'use client';
import {useCallback,useEffect,useRef,useState} from 'react';
import {Link} from '@/i18n/routing';
import Navbar from './Navbar';
import Footer from './Footer';
import PhoneVerification from './PhoneVerification';
import JobLocationPicker,{type JobPoint} from './JobLocationPicker';
import {bolivianPhone} from '@/lib/firebase-phone';

type User={id:string;type:'client'|'worker';firstName:string};
type Job={id:string;title:string;budget:number;status:string;createdAt:string};
type Modality='fixed'|'hourly'|'daily';
type Catalog={categories:{id:string;name:string}[];modalities:Record<Modality,boolean>};
const field='mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-accent-tint';
const states:Record<string,string>={searching:'Buscando trabajador',negotiating:'Recibiendo ofertas',assigned:'Trabajador asignado',in_progress:'En curso',completed:'Terminado',cancelled:'Cancelado'};
// Solo se muestran las que el admin dejó activas.
const MODALITIES:{key:Modality;label:string;hint:string}[]=[
  {key:'fixed',label:'Por trabajo',hint:'Un precio por todo el trabajo.'},
  {key:'hourly',label:'Por hora',hint:'Tarifa por hora × horas estimadas.'},
  {key:'daily',label:'Por día',hint:'Tarifa por día × días de trabajo.'},
];
const bs=(value:number)=>`Bs ${value.toLocaleString('es-BO',{maximumFractionDigits:2})}`;
const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/La_Paz'}).format(new Date());

async function call(path:string,method='GET',body?:unknown){
  const response=await fetch('/api/chamba/'+path,{method,credentials:'same-origin',cache:'no-store',headers:{'Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{})});
  const result=await response.json();
  if(!response.ok)throw new Error(Array.isArray(result.message)?result.message.join('. '):result.message||'No se pudo completar la solicitud.');
  return result;
}

export default function PublishJobClient(){
  const [user,setUser]=useState<User|null>(null),[loading,setLoading]=useState(true),[mode,setMode]=useState<'login'|'register'>('register');
  const [phone,setPhone]=useState(''),[phoneToken,setPhoneToken]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState(''),[success,setSuccess]=useState('');
  const [point,setPoint]=useState<JobPoint|null>(null),[jobs,setJobs]=useState<Job[]>([]);
  const [catalog,setCatalog]=useState<Catalog|null>(null),[catalogError,setCatalogError]=useState('');
  const [modality,setModality]=useState<Modality>('fixed');
  const [hours,setHours]=useState('2'),[hourlyRate,setHourlyRate]=useState(''),[days,setDays]=useState('1'),[dailyRate,setDailyRate]=useState('');
  const working=useRef(false);
  const loadJobs=useCallback(async()=>{const result=await call('jobs');setJobs(result.jobs??[]);},[]);
  const applyCatalog=useCallback((result:Catalog)=>{
    setCatalog(result);setCatalogError('');
    setModality(current=>result.modalities[current]?current:MODALITIES.find(item=>result.modalities[item.key])?.key??'fixed');
  },[]);
  useEffect(()=>{let active=true;void call('auth').then(result=>{if(active)setUser(result.user);}).catch(e=>{if(active)setError(e.message);}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[]);
  useEffect(()=>{let active=true;if(user?.type==='client')void call('jobs').then(result=>{if(active)setJobs(result.jobs??[]);}).catch(e=>{if(active)setError(e.message);});return()=>{active=false;};},[user]);
  useEffect(()=>{let active=true;if(user?.type==='client')void call('catalog').then(result=>{if(active)applyCatalog(result);}).catch(e=>{if(active)setCatalogError(e.message);});return()=>{active=false;};},[user,applyCatalog]);

  const modalities=MODALITIES.filter(item=>catalog?.modalities[item.key]!==false);
  const total=modality==='hourly'?Number(hours)*Number(hourlyRate):modality==='daily'?Number(days)*Number(dailyRate):0;

  async function authenticate(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();if(working.current)return;
    working.current=true;setBusy(true);setError('');
    const form=new FormData(event.currentTarget);
    try{
      if(mode==='register'&&!phoneToken)throw new Error('Verifica primero tu celular con el código SMS.');
      const payload=mode==='register'?{action:'register',type:'client',firstName:form.get('firstName'),email:form.get('email'),phone:bolivianPhone(phone),phoneIdToken:phoneToken,password:form.get('password')}
        :{action:'login',identifier:form.get('identifier'),password:form.get('password')};
      const result=await call('auth','POST',payload);setUser(result.user);setPhoneToken('');
    }catch(e){setError(e instanceof Error?e.message:'No se pudo iniciar sesión.');}
    finally{working.current=false;setBusy(false);}
  }
  async function publish(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();if(working.current)return;
    working.current=true;setBusy(true);setError('');setSuccess('');
    const element=event.currentTarget,form=new FormData(element);
    try{
      if(!point)throw new Error('Marca en el mapa dónde se hará el trabajo.');
      const price=modality==='hourly'?{estimatedHours:Number(hours),hourlyRate:Number(hourlyRate)}
        :modality==='daily'?{days:Number(days),dailyRate:Number(dailyRate),startDate:form.get('startDate')||undefined}
        :{budget:Number(form.get('budget'))};
      const result=await call('jobs','POST',{title:form.get('title'),description:form.get('description'),category:form.get('category'),address:form.get('address'),modality,...price,...point});
      if(!result.request?.id)throw new Error('No se pudo confirmar la publicación. Revisa tus trabajos antes de reintentar.');
      setSuccess('Tu trabajo ya está publicado en Chamba. Entra a la app con esta misma cuenta para revisar ofertas y coordinar con el trabajador.');
      element.reset();setPoint(null);setHours('2');setHourlyRate('');setDays('1');setDailyRate('');await loadJobs();
    }catch(e){
      setError(e instanceof Error?e.message:'No se pudo publicar.');void loadJobs().catch(()=>{});
      // Si el admin apagó la modalidad mientras se llenaba el formulario.
      void call('catalog').then(applyCatalog).catch(()=>{});
    }
    finally{working.current=false;setBusy(false);}
  }
  async function logout(){setBusy(true);try{await call('auth','DELETE');setUser(null);setJobs([]);setPoint(null);setSuccess('');setCatalog(null);}catch(e){setError(e instanceof Error?e.message:'No se pudo cerrar sesión.');}finally{setBusy(false);}}

  return <div className="on-video min-h-screen text-ink"><Navbar activeRole="client"/><main className="mx-auto max-w-4xl px-4 pb-16 pt-32"><div className="mb-7"><Link href="/" className="text-sm font-semibold text-ink-soft">← Volver a Chamba</Link><h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Publica tu trabajo en Chamba</h1><p className="mt-3 text-ink-soft">Cuéntanos qué necesitas, marca el lugar y ofrece tu presupuesto en bolivianos.</p></div>
    {error&&<p role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">{error}</p>}
    {success&&<p role="status" className="mb-5 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">{success}</p>}
    {loading?<p role="status">Comprobando tu cuenta…</p>:!user?<section data-solid className="mx-auto max-w-lg rounded-3xl bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] p-6 text-ink sm:p-8"><h2 className="text-xl font-bold">{mode==='register'?'Primero, crea tu cuenta de cliente':'Entra con tu cuenta de Chamba'}</h2><p className="mt-2 text-sm text-ink-soft">{mode==='register'?'Tu número se verifica una vez. Después entrarás con tu contraseña.':'Usa el mismo correo o celular y contraseña que en la app.'}</p>
      <div className="my-5 flex rounded-xl bg-white/60 p-1">{(['register','login'] as const).map(value=><button key={value} type="button" disabled={busy} onClick={()=>{setMode(value);setError('');setPhoneToken('');}} className={`flex-1 rounded-lg p-2 text-sm font-bold ${mode===value?'bg-white shadow-sm':''}`}>{value==='register'?'Crear cuenta':'Ya tengo cuenta'}</button>)}</div>
      <form className="space-y-4" onSubmit={authenticate}>{mode==='register'?<><label className="block text-sm font-bold">Tu nombre<input className={field} name="firstName" autoComplete="name" required maxLength={80} disabled={busy}/></label><label className="block text-sm font-bold">Correo electrónico<input className={field} type="email" name="email" autoComplete="email" required disabled={busy}/></label><label className="block text-sm font-bold">Celular<input className={field} type="tel" autoComplete="tel" placeholder="+591 7XXXXXXX" required value={phone} onChange={e=>{setPhoneToken('');setPhone(e.target.value);}} disabled={busy}/></label><PhoneVerification key={phone} phone={phone} onVerified={setPhoneToken} disabled={busy}/></>:<label className="block text-sm font-bold">Correo o celular<input className={field} name="identifier" autoComplete="username" required disabled={busy}/></label>}
        <label className="block text-sm font-bold">Contraseña<input className={field} name="password" type="password" autoComplete={mode==='register'?'new-password':'current-password'} minLength={mode==='register'?8:undefined} maxLength={72} required disabled={busy}/></label>
        {mode==='login'&&<p className="text-sm text-ink-soft">¿Olvidaste tu contraseña? En la app Chamba toca «¿Olvidaste tu contraseña?» y recupérala con tu cuenta de Google. Después de 5 intentos fallidos la cuenta se bloquea 15 minutos.</p>}
        {mode==='register'&&<label className="flex items-start gap-2 text-sm text-ink-soft"><input type="checkbox" required className="mt-1"/>Acepto los <Link href="/terms" className="underline">términos</Link> y la <Link href="/privacy" className="underline">política de privacidad</Link>.</label>}
        <button className="btn btn-primary w-full disabled:opacity-50" disabled={busy||(mode==='register'&&!phoneToken)}>{busy?'Procesando…':mode==='register'?'Crear cuenta y continuar':'Entrar y continuar'}</button>
      </form></section>:<><div data-solid className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] p-4 text-ink"><p>Hola, <strong>{user.firstName}</strong></p><button onClick={logout} disabled={busy} className="text-sm font-semibold underline">Cerrar sesión</button></div>
      {user.type!=='client'?<div data-solid className="rounded-2xl bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] p-6 text-ink"><h2 className="text-xl font-bold">Esta cuenta es de trabajador</h2><p className="mt-2">Para publicar un pedido, entra con tu cuenta de cliente. Tu cuenta de trabajador sigue disponible en la app.</p></div>:<><form onSubmit={publish} data-solid className="space-y-5 rounded-3xl bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] p-6 text-ink sm:p-8"><h2 className="text-xl font-bold">¿Qué necesitas hacer?</h2>
        {catalogError&&<div role="alert" className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800"><span>{catalogError}</span><button type="button" className="font-bold underline" onClick={()=>void call('catalog').then(applyCatalog).catch(e=>setCatalogError(e.message))}>Reintentar</button></div>}
        <label className="block text-sm font-bold">Título del trabajo<input className={field} name="title" placeholder="Por ejemplo: reparar una fuga en el baño" required maxLength={120} disabled={busy}/></label>
        <label className="block text-sm font-bold">Describe el trabajo<textarea className={field} name="description" rows={4} placeholder="Explica qué hay que hacer y qué debe saber el trabajador." required minLength={10} maxLength={3000} disabled={busy}/></label>
        <label className="block text-sm font-bold">Categoría<select className={field} name="category" required defaultValue="" disabled={busy||!catalog}><option value="" disabled>{catalog?'Elige la categoría':'Cargando categorías…'}</option>{catalog?.categories.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
        <fieldset disabled={busy||!catalog}><legend className="text-sm font-bold">¿Cómo quieres pagar?</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">{modalities.map(item=><label key={item.key} className={`cursor-pointer rounded-xl border p-3 text-sm ${modality===item.key?'border-accent bg-accent-tint':'border-line bg-white'}`}><span className="flex items-center gap-2 font-bold"><input type="radio" name="modality" value={item.key} checked={modality===item.key} onChange={()=>setModality(item.key)}/>{item.label}</span><span className="mt-1 block text-ink-soft">{item.hint}</span></label>)}</div>
        </fieldset>
        {modality==='fixed'?<label className="block text-sm font-bold">Tu presupuesto (Bs)<input className={field} name="budget" type="number" min="1" max="100000" step="0.01" required disabled={busy}/></label>
          :modality==='hourly'?<div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-bold">Horas estimadas<input className={field} type="number" min="1" max="100" step="1" required value={hours} onChange={e=>setHours(e.target.value)} disabled={busy}/></label><label className="block text-sm font-bold">Tarifa por hora (Bs)<input className={field} type="number" min="1" max="5000" step="0.01" required value={hourlyRate} onChange={e=>setHourlyRate(e.target.value)} disabled={busy}/></label></div>
          :<div className="grid gap-4 sm:grid-cols-3"><label className="block text-sm font-bold">Días de trabajo<input className={field} type="number" min="1" max="60" step="1" required value={days} onChange={e=>setDays(e.target.value)} disabled={busy}/></label><label className="block text-sm font-bold">Tarifa por día (Bs)<input className={field} type="number" min="1" max="20000" step="0.01" required value={dailyRate} onChange={e=>setDailyRate(e.target.value)} disabled={busy}/></label><label className="block text-sm font-bold">Fecha de inicio (opcional)<input className={field} name="startDate" type="date" min={today()} disabled={busy}/></label></div>}
        {modality!=='fixed'&&total>0&&<p className="text-sm font-semibold">Total a ofrecer: {bs(Math.round(total*100)/100)}</p>}
        <label className="block text-sm font-bold">Dirección y referencia<input className={field} name="address" placeholder="Barrio, calle y una referencia para llegar" required maxLength={300} disabled={busy}/></label>
        <JobLocationPicker value={point} onChange={setPoint} disabled={busy}/>
        <p className="rounded-xl bg-white/60 p-3 text-sm text-ink-soft">Pagas en efectivo al trabajador al finalizar. Tu pedido se enviará a trabajadores cercanos de la categoría elegida.</p>
        <button className="btn btn-primary w-full disabled:opacity-50" disabled={busy||!point||!catalog}>{busy?'Publicando…':'Publicar trabajo'}</button>
      </form><section data-solid className="mt-8 rounded-3xl bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] p-6 text-ink"><div className="flex items-center justify-between gap-3"><h2 className="text-xl font-bold">Mis trabajos recientes</h2><button type="button" className="text-sm font-bold underline" onClick={()=>void loadJobs().catch(e=>setError(e.message))}>Actualizar</button></div>
        {!jobs.length?<p className="mt-4 text-sm text-ink-soft">Todavía no publicaste trabajos con esta cuenta.</p>:<ul className="mt-4 divide-y divide-slate-100">{jobs.map(job=><li key={job.id} className="py-4"><div className="flex justify-between gap-3"><strong>{job.title}</strong><span>Bs {job.budget}</span></div><p className="mt-1 text-sm text-ink-soft">{states[job.status]||job.status} · {new Date(job.createdAt).toLocaleDateString('es-BO')}</p></li>)}</ul>}
        <p className="mt-5 text-sm text-ink-soft">Revisa ofertas, conversa y confirma el servicio desde la app con esta misma cuenta.</p><Link href="/#descargar" className="btn btn-secondary mt-4">Descargar Chamba</Link>
      </section></>}
    </>}
  </main><Footer/></div>;
}
