import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import PublishJobClient from '@/components/PublishJobClient';
import {SITE_URL} from '@/lib/seo';

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale}=await params;
  return {title:'Publica un trabajo y encuentra trabajadores | Chamba Bolivia',description:'Crea tu cuenta de cliente, publica un trabajo en Chamba y encuentra trabajadores cercanos. Pago en efectivo al finalizar.',
    alternates:{canonical:`${SITE_URL}/${locale}/publicar-trabajo`},robots:{index:false,follow:true}};
}
export default async function PublishPage({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;setRequestLocale(locale);return <PublishJobClient/>;
}
