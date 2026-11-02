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
  const env={fetch:async(url,options)=>{
    requests.push({url,options,body:options.body?JSON.parse(options.body):undefined});
    if(url.endsWith('/auth/session')) return Response.json({user});
    if(url.endsWith('/auth/register')||url.endsWith('/auth/login')) return Response.json({user,token:'backend-signed-secret-token'});
    if(url.endsWith('/mobile/requests')) return Response.json({request:{id:'created-job'}});
    if(url.endsWith('/mobile/client/web-jobs')) return Response.json({jobs:[{id:'searching-job',status:'searching'}]});
    throw new Error('Unexpected route '+url);
  }};
  const session=load('src/lib/chamba-session.ts',{'server-only':{},'next/headers':{cookies:async()=>({get:name=>jar.has(name)?{value:jar.get(name)}:undefined})},'./api-base':{apiBase:()=> 'https://isolated-backend.test/api'}},env);
  const routeMocks={'@/lib/chamba-session':session};
  return {jar,requests,user,auth:load('src/app/api/chamba/auth/route.ts',routeMocks,env),jobs:load('src/app/api/chamba/jobs/route.ts',routeMocks,env)};
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

test('publication derives the client identity and cash payment on the server',async()=>{
  const f=fixture();f.jar.set('chamba_session','session-token');
  const response=await f.jobs.POST(req('jobs',{clientUserId:'victim-account',title:'Reparar grifo',description:'El grifo de la cocina tiene una fuga',category:'Plomería',budget:80,address:'Dirección de prueba',latitude:-17.8,longitude:-63.2,paymentMethod:'QR',modality:'daily'}));
  assert.equal(response.status,200);
  const sent=f.requests.find(r=>r.url.endsWith('/mobile/requests'));
  assert.equal(sent.body.clientUserId,'account-owner');assert.equal(sent.body.paymentMethod,'Efectivo');assert.equal(sent.body.modality,'fixed');
  assert.equal(sent.options.headers.Authorization,'Bearer session-token');
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
