import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import PublishJobClient from '@/components/PublishJobClient';
import { SITE_URL } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Publica un Trabajo y Encuentra Trabajadores | Chamba Bolivia'
    : locale === 'pt'
    ? 'Publique um Trabalho e Encontre Profissionais | Chamba Bolívia'
    : 'Post a Job and Hire Local Pros | Chamba Bolivia';

  const description = isEs
    ? 'Publica tu trabajo gratis en Santa Cruz de la Sierra y recibe ofertas de trabajadores verificados en minutos. Pago directo en Bs.'
    : locale === 'pt'
    ? 'Publique seu pedido grátis em Santa Cruz de la Sierra e receba propostas de profissionais verificados.'
    : 'Post your job request for free in Santa Cruz, Bolivia and get instant offers from verified handymen.';

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/publicar-trabajo`,
      languages: {
        es: `${SITE_URL}/es/publicar-trabajo`,
        en: `${SITE_URL}/en/publicar-trabajo`,
        pt: `${SITE_URL}/pt/publicar-trabajo`,
        'x-default': `${SITE_URL}/es/publicar-trabajo`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/publicar-trabajo`,
    },
  };
}

export default async function PublishPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PublishJobClient />;
}
