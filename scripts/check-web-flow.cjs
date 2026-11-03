const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function load(relative, mocks, env) {
  const filename=path.join(__dirname,'..',relative);
  const source=ts.transpileModule(readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const exports={};
  vm.runInNewContext(source,{exports,require:id=>Object.hasOwn(mocks,id)?mocks[id]:require(id),fetch:env.fetch,
    process:{env:{NODE_ENV:'production',NEXT_PUBLIC_API_URL:'https://isolated-backend.test/api'}},URL,AbortSignal,Request,Response,console},{filename});
  return exports;
}

function fixture() {
  const jar=new Map(),requests=[];
  const user={id:'account-owner',type:'client',firstName:'Ana',phone:'70000000'};
  const state={modalities:{fixed:true,hourly:true,daily:true},modalitiesStatus:200,publicJobs:{total:0,jobs:[]},publicJobsFail:false};
  const categories=[{id:'plomeria',name:'Plomería',active:true},{id:'carpinteria',name:'Carpinteria',active:true},{id:'vieja',name:'Vieja',active:false}];
  const env={fetch:async(url,options={})=>{
    requests.push({url,options,body:options.body?JSON.parse(options.body):undefined});
    if(url.endsWith('/auth/session')) return Response.json({user});
    if(url.endsWith('/auth/register')||url.endsWith('/auth/login')) return Response.json({user,token:'backend-signed-secret-token'});
    if(url.endsWith('/mobile/requests')) return Response.json({request:{id:'created-job'}});
    if(url.endsWith('/mobile/client/web-jobs')) return Response.json({jobs:[{id:'searching-job',status:'searching'}]});
    if(url.endsWith('/mobile/categories')) return Response.json({categories});
    if(url.endsWith('/mobile/work-modalities')) return Response.json(state.modalities,{status:state.modalitiesStatus});
    if(url.includes('/web/jobs?')) { if(state.publicJobsFail) throw new Error('backend down'); return Response.json(state.publicJobs); }
    throw new Error('Unexpected route '+url);
  }};
  const session=load('src/lib/chamba-session.ts',{'server-only':{},'next/headers':{cookies:async()=>({get:name=>jar.has(name)?{value:jar.get(name)}:undefined})},'./api-base':{apiBase:()=> 'https://isolated-backend.test/api'}},env);
  const catalog=load('src/lib/job-catalog.ts',{'server-only':{},'./chamba-session':session},env);
  const routeMocks={'@/lib/chamba-session':session,'@/lib/job-catalog':catalog};
  return {jar,requests,user,state,auth:load('src/app/api/chamba/auth/route.ts',routeMocks,env),jobs:load('src/app/api/chamba/jobs/route.ts',routeMocks,env),
    catalog:load('src/app/api/chamba/catalog/route.ts',routeMocks,env),
    publicJobs:load('src/lib/public-jobs.ts',{'server-only':{},'./api-base':{apiBase:()=> 'https://isolated-backend.test/api'}},env)};
}
function req(endpoint,body,origin='https://www.chambatrabajo.com'){
  return new Request(`https://www.chambatrabajo.com/api/chamba/${endpoint}`,{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(body)});
}

test('account login issues a secure HttpOnly session; JWT never appears in the browser response',async()=>{
  const f=fixture();
  const response=await f.auth.POST(req('auth',{action:'login',identifier:'ana@example.test',password:'secret'}));
  assert.equal(response.status,200);
  const cookie=response.cookies.get('chamba_session');
  assert.equal(cookie.httpOnly,true);assert.equal(cookie.secure,true);assert.equal(cookie.sameSite,'lax');
  assert.ok(!(await response.text()).includes('backend-signed-secret-token'));
});

test('signup forwards the SMS proof and forces the web source',async()=>{
  const f=fixture();
  await f.auth.POST(req('auth',{action:'register',type:'client',source:'mobile',phoneIdToken:'signed-google-proof',phone:'+59170000000',firstName:'Ana',email:'ana@example.test',password:'secret123'}));
  const sent=f.requests[0].body;
  assert.equal(sent.source,'web');assert.equal(sent.phoneIdToken,'signed-google-proof');assert.equal(sent.type,'client');
});

test('anonymous visitors and cross-origin requests cannot publish',async()=>{
  const f=fixture();
  assert.equal((await f.jobs.POST(req('jobs',{}))).status,401);
  assert.equal((await f.jobs.POST(req('jobs',{},'https://untrusted.test'))).status,403);
  assert.equal((await f.auth.POST(req('auth',{action:'login'},'https://untrusted.test'))).status,403);
  assert.equal(f.requests.length,0);
});

const job={title:'Reparar grifo',description:'El grifo de la cocina tiene una fuga',category:'plomeria',address:'Dirección de prueba',latitude:-17.8,longitude:-63.2};
const sentJob=f=>f.requests.filter(r=>r.url.endsWith('/mobile/requests')).at(-1);
const boliviaDay=offset=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/La_Paz'}).format(new Date(Date.now()+offset*86400000));

test('publication derives the client identity and cash payment on the server',async()=>{
  const f=fixture();f.jar.set('chamba_session','session-token');
  const response=await f.jobs.POST(req('jobs',{...job,clientUserId:'victim-account',budget:80,paymentMethod:'QR',paymentMethodCode:'qr',modality:'fixed'}));
  assert.equal(response.status,200);
  const sent=sentJob(f);
  assert.equal(sent.body.clientUserId,'account-owner');assert.equal(sent.body.paymentMethod,'Efectivo');assert.equal(sent.body.paymentMethodCode,'cash');
  assert.equal(sent.body.modality,'fixed');assert.equal(sent.body.priceType,'Precio fijo');assert.equal(sent.body.budget,80);
  assert.equal(sent.options.headers.Authorization,'Bearer session-token');
});

test('the job uses the exact backend category so it reaches workers with that trade',async()=>{
  const f=fixture();f.jar.set('chamba_session','session-token');
  assert.equal((await f.jobs.POST(req('jobs',{...job,budget:80}))).status,200);
  assert.equal(sentJob(f).body.category,'Plomería');
  assert.deepEqual(sentJob(f).body.aiCategories,[{id:'plomeria',name:'Plomería',confidence:1}]);
  // Una página vieja manda el nombre con tilde: se traduce a la categoría real.
  assert.equal((await f.jobs.POST(req('jobs',{...job,category:'Carpintería',budget:80}))).status,200);
  assert.equal(sentJob(f).body.category,'Carpinteria');assert.equal(sentJob(f).body.aiCategories[0].id,'carpinteria');
});

test('hourly and daily totals are computed on the server from units and rate',async()=>{
  const f=fixture();f.jar.set('chamba_session','session-token');
  assert.equal((await f.jobs.POST(req('jobs',{...job,modality:'hourly',estimatedHours:3,hourlyRate:25,budget:1}))).status,200);
  let sent=sentJob(f).body;
  assert.equal(sent.budget,75);assert.equal(sent.estimatedHours,3);assert.equal(sent.hourlyRate,25);assert.equal(sent.priceType,'Por hora');assert.equal(sent.modality,'hourly');
  const start=boliviaDay(1);
  assert.equal((await f.jobs.POST(req('jobs',{...job,modality:'daily',days:2,dailyRate:150,startDate:start,budget:1}))).status,200);
  sent=sentJob(f).body;
  assert.equal(sent.budget,300);assert.equal(sent.days,2);assert.equal(sent.dailyRate,150);assert.equal(sent.startDate,start);assert.equal(sent.priceType,'Por día');
});

test('unknown categories, invalid modalities and bad amounts never reach the job service',async()=>{
  const f=fixture();f.jar.set('chamba_session','session-token');
  const cases=[{...job,category:'Mudanzas',budget:80},{...job,category:'vieja',budget:80},{...job,modality:'weekly',budget:80},
    {...job,modality:'hourly',estimatedHours:2.5,hourlyRate:20},{...job,modality:'hourly',estimatedHours:3},
    {...job,modality:'daily',days:1,dailyRate:100,startDate:'2020-01-01'},{...job,modality:'daily',days:1,dailyRate:100,startDate:'2026-02-30'},
    {...job,modality:'daily',days:60,dailyRate:20000},{...job,budget:-5}];
  for(const body of cases) assert.equal((await f.jobs.POST(req('jobs',body))).status,400,JSON.stringify(body));
  assert.ok(f.requests.every(r=>!r.url.endsWith('/mobile/requests')));
});

test('the publish form gets active categories and only the enabled modalities',async()=>{
  const f=fixture();
  assert.equal((await f.catalog.GET()).status,401);
  f.jar.set('chamba_session','session-token');f.state.modalities={fixed:true,hourly:false,daily:true};
  const response=await f.catalog.GET();
  assert.equal(response.status,200);assert.equal(response.headers.get('cache-control'),'private, no-store');
  const value=await response.json();
  assert.deepEqual(value.categories.map(c=>c.id),['plomeria','carpinteria']);
  assert.deepEqual(value.modalities,{fixed:true,hourly:false,daily:true});
  // Si el backend no responde se muestran todas; el backend igual rechaza una apagada.
  f.state.modalitiesStatus=500;
  assert.deepEqual((await (await f.catalog.GET()).json()).modalities,{fixed:true,hourly:true,daily:true});
});

test('the public job list keeps only public fields and is cached for a minute',async()=>{
  const f=fixture();
  f.state.publicJobs={total:9,jobs:[{title:'Pintar la sala',category:'Pintura',budget:300,modality:'daily',createdAt:'2026-11-03T12:00:00.000Z',
    address:'Calle secreta 123',description:'Texto privado',clientName:'Ana',latitude:-17.8},{title:'Sin fecha'},{title:'Otro',modality:'semanal',createdAt:'2026-11-03T10:00:00.000Z'}]};
  const value=await f.publicJobs.fetchPublicJobs(6);
  assert.deepEqual(JSON.parse(JSON.stringify(value)),{total:9,jobs:[{title:'Pintar la sala',category:'Pintura',budget:300,modality:'daily',createdAt:'2026-11-03T12:00:00.000Z'},
    {title:'Otro',category:'General',budget:0,modality:'fixed',createdAt:'2026-11-03T10:00:00.000Z'}]});
  const call=f.requests.find(r=>r.url.includes('/web/jobs?'));
  assert.equal(call.url,'https://isolated-backend.test/api/web/jobs?limit=6');assert.equal(call.options.next.revalidate,60);
  assert.equal(call.options.headers,undefined);
  f.state.publicJobsFail=true;
  assert.equal(await f.publicJobs.fetchPublicJobs(6),null);
});

test('a worker session cannot publish; invalid coordinates and budgets never reach the job service',async()=>{
  const f=fixture();f.jar.set('chamba_session','session-token');f.user.type='worker';
  assert.equal((await f.jobs.POST(req('jobs',{}))).status,403);
  f.user.type='client';
  assert.equal((await f.jobs.POST(req('jobs',{latitude:100,longitude:0,budget:0}))).status,400);
  assert.ok(f.requests.every(r=>!r.url.endsWith('/mobile/requests')));
});

test('the job list uses the account from the session and includes searching jobs',async()=>{
  const f=fixture();f.jar.set('chamba_session','session-token');
  const response=await f.jobs.GET();
  assert.equal((await response.json()).jobs[0].status,'searching');
  assert.ok(f.requests.some(r=>r.url.endsWith('/mobile/client/web-jobs')));
  assert.equal(response.headers.get('cache-control'),'private, no-store');
});
