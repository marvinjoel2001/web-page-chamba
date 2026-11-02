'use client';
import {useEffect,useId,useRef,useState} from 'react';
import type {ConfirmationResult,RecaptchaVerifier} from 'firebase/auth';
import {bolivianPhone,phoneAuth} from '@/lib/firebase-phone';

export default function PhoneVerification({phone,onVerified,disabled=false}:{phone:string;onVerified:(token:string)=>void;disabled?:boolean}) {
  const id=useId().replace(/:/g,'');
  const verifier=useRef<RecaptchaVerifier|null>(null);
  const [confirmation,setConfirmation]=useState<ConfirmationResult|null>(null);
  const [code,setCode]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState(''),[verified,setVerified]=useState(false);
  const [retryAt,setRetryAt]=useState(0);
  const [seconds,setSeconds]=useState(0);
  useEffect(()=>{if(seconds<=0)return;const timer=setTimeout(()=>setSeconds(s=>Math.max(0,s-1)),1000);return()=>clearTimeout(timer);},[seconds]);
  useEffect(()=>()=>{verifier.current?.clear();},[]);
  const failed=(e:unknown)=>{
    const c=(e as {code?:string}).code;
    setError(c==='auth/invalid-verification-code'?'El código no es correcto. Revisa el SMS.':c==='auth/too-many-requests'?'Demasiados intentos. Espera unos minutos.':c==='auth/operation-not-allowed'||c==='auth/billing-not-enabled'?'La verificación por SMS aún no está habilitada. Intenta más tarde.':c==='auth/unauthorized-domain'?'Este dominio todavía no está autorizado para verificar teléfonos.':c==='auth/code-expired'?'El código venció. Solicita uno nuevo.':e instanceof Error && !c?e.message:'No se pudo verificar el número. Intenta de nuevo.');
  };
  async function send() {
    if(busy||Date.now()<retryAt)return;
    setBusy(true);setError('');
    try {
      const number=bolivianPhone(phone),auth=await phoneAuth();
      const {RecaptchaVerifier,signInWithPhoneNumber}=await import('firebase/auth');
      verifier.current?.clear();verifier.current=new RecaptchaVerifier(auth,id,{size:'normal'});
      const next=await signInWithPhoneNumber(auth,number,verifier.current);
      setConfirmation(next);setRetryAt(Date.now()+60000);setSeconds(60);
    } catch(e){failed(e);verifier.current?.clear();verifier.current=null;}
    finally{setBusy(false);}
  }
  async function confirm(){
    if(!confirmation||busy)return;setBusy(true);setError('');
    try{const result=await confirmation.confirm(code);onVerified(await result.user.getIdToken(true));setVerified(true);}
    catch(e){failed(e);}finally{setBusy(false);}
  }
  return <div className="space-y-3 rounded-xl border border-line bg-white p-4 text-ink">
    <p className="text-sm font-semibold">{verified?'✓ Número verificado':'Verifica tu celular una sola vez al crear tu cuenta'}</p>
    {verified&&<button type="button" className="text-sm underline" onClick={()=>{setVerified(false);setConfirmation(null);setCode('');onVerified('');verifier.current?.clear();verifier.current=null;}}>Verificar de nuevo</button>}
    {!verified&&<><p className="text-xs text-ink-soft">Recibirás un código por SMS. Al continuar, aceptas que Google procese tu número para verificarlo y prevenir abuso.</p>
      <div id={id}/>{confirmation&&<label className="block text-sm">Código del SMS<input aria-label="Código del SMS" className="mt-1 w-full rounded-lg border border-line px-3 py-2" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code} disabled={busy||disabled} onChange={e=>setCode(e.target.value.replace(/\D/g,''))}/></label>}
      <div className="flex flex-wrap gap-2"><button type="button" className="btn btn-secondary !min-h-10 !px-3 !text-sm disabled:opacity-50" disabled={busy||disabled||!phone||seconds>0} onClick={send}>{busy?'Procesando…':confirmation?seconds>0?`Reenviar en ${seconds} s`:'Reenviar SMS':'Enviar código SMS'}</button>{confirmation&&<button type="button" className="btn btn-primary !min-h-10 !px-3 !text-sm disabled:opacity-50" disabled={busy||disabled||code.length!==6} onClick={confirm}>Verificar código</button>}</div></>}
    {error&&<p role="alert" className="text-sm text-red-700">{error}</p>}
  </div>;
}
