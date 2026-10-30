import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/seo';
import { SERVICE_LABELS } from '@/lib/service-labels';
import {
  SERVICES,
  SERVICE_LOCALES,
  serviceIndexPath,
  servicePath,
  servicePrefix,
  type Locale,
} from '@/lib/service-pages';

function asLocale(value: string): Locale | null {
  return (SERVICE_LOCALES as string[]).includes(value) ? (value as Locale) : null;
}

export function generateStaticParams() {
  return SERVICE_LOCALES.map((locale) => ({
    locale,
    section: servicePrefix(locale),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}): Promise<Metadata> {
  const { locale, section } = await params;
  const loc = asLocale(locale);
  if (!loc || section !== servicePrefix(loc)) return {};

  const labels = SERVICE_LABELS[loc];
  const url = `${SITE_URL}${serviceIndexPath(loc)}`;

  const languages: Record<string, string> = {};
  for (const l of SERVICE_LOCALES) {
    languages[l] = `${SITE_URL}${serviceIndexPath(l)}`;
  }
  languages['x-default'] = `${SITE_URL}${serviceIndexPath('es')}`;

  return {
    title: labels.indexTitle,
    description: labels.indexDescription,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      url,
      title: labels.indexTitle,
      description: labels.indexDescription,
    },
  };
}

export default async function ServiceIndexPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section } = await params;
  const loc = asLocale(locale);
  if (!loc || section !== servicePrefix(loc)) notFound();

  setRequestLocale(loc);
  const labels = SERVICE_LABELS[loc];

  return (
    <div className="min-h-screen pt-24 text-slate-700">
      <BreadcrumbsJsonLd
        items={[
          { name: labels.breadcrumbHome, url: `/${loc}` },
          { name: labels.breadcrumbIndex, url: serviceIndexPath(loc) },
        ]}
      />
      <Navbar activeRole="client" />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          {labels.indexTitle}
        </h1>
        <p className="text-base leading-relaxed text-slate-600">{labels.indexIntro}</p>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <li key={service.id}>
              <Link
                href={servicePath(loc, service.id)}
                className="block h-full rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300"
              >
                <span className="block text-lg font-bold text-slate-900">
                  {service.content[loc].name}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                  {service.content[loc].priceRange}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
