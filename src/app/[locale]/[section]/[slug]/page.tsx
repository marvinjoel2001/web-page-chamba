import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ServiceLanding from '@/components/ServiceLanding';
import { SITE_URL } from '@/lib/seo';
import { SERVICE_LABELS } from '@/lib/service-labels';
import {
  SERVICE_IDS,
  SERVICE_LOCALES,
  getService,
  getServiceBySlug,
  servicePath,
  servicePrefix,
  type Locale,
} from '@/lib/service-pages';

function asLocale(value: string): Locale | null {
  return (SERVICE_LOCALES as string[]).includes(value) ? (value as Locale) : null;
}

function alternatesFor(id: string) {
  const languages: Record<string, string> = {};
  for (const loc of SERVICE_LOCALES) {
    languages[loc] = `${SITE_URL}${servicePath(loc, id)}`;
  }
  languages['x-default'] = `${SITE_URL}${servicePath('es', id)}`;
  return languages;
}

export function generateStaticParams() {
  return SERVICE_LOCALES.flatMap((locale) =>
    SERVICE_IDS.map((id) => ({
      locale,
      section: servicePrefix(locale),
      slug: getService(id)!.content[locale].slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, section, slug } = await params;
  const loc = asLocale(locale);
  if (!loc || section !== servicePrefix(loc)) return {};

  const service = getServiceBySlug(loc, slug);
  if (!service) return {};

  const content = service.content[loc];
  const url = `${SITE_URL}${servicePath(loc, service.id)}`;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: url,
      languages: alternatesFor(service.id),
    },
    openGraph: {
      type: 'article',
      locale: loc === 'es' ? 'es_BO' : loc === 'pt' ? 'pt_BR' : 'en_US',
      url,
      title: content.title,
      description: content.description,
      images: [
        {
          url: `${SITE_URL}${content.image}`,
          alt: content.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [`${SITE_URL}${content.image}`],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; section: string; slug: string }>;
}) {
  const { locale, section, slug } = await params;
  const loc = asLocale(locale);
  if (!loc || section !== servicePrefix(loc)) notFound();

  const service = getServiceBySlug(loc, slug);
  if (!service) notFound();

  setRequestLocale(loc);

  return (
    <ServiceLanding
      locale={loc}
      content={service.content[loc]}
      currentId={service.id}
      labels={SERVICE_LABELS[loc]}
    />
  );
}
