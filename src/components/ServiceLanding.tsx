import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaqJsonLd, BreadcrumbsJsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/seo';
import {
  SERVICES,
  ZONES,
  servicePath,
  serviceIndexPath,
  getService,
  type Locale,
  type ServiceContent,
} from '@/lib/service-pages';

interface ServiceLandingProps {
  locale: Locale;
  content: ServiceContent;
  /** id del oficio actual, para no repetirlo en "otros servicios". */
  currentId: string;
  labels: {
    breadcrumbHome: string;
    breadcrumbIndex: string;
    breadcrumbCurrent: string;
    includes: string;
    price: string;
    questions: string;
    zones: string;
    zonesIntro: string;
    faqs: string;
    ctaTitle: string;
    ctaBody: string;
    ctaApp: string;
    ctaJoin: string;
    otherServices: string;
  };
}

const cardClass =
  'bg-white/72 backdrop-blur-xl backdrop-saturate-150 border border-white/70 rounded-3xl p-8 sm:p-12 shadow-[0_12px_40px_-8px_rgba(31,38,135,0.14),inset_0_1px_0_rgba(255,255,255,0.75)]';
const h2Class = 'text-2xl font-bold text-slate-900 mt-10 mb-3';
const bodyClass = 'text-base leading-relaxed text-slate-600';

/**
 * Plantilla de las páginas de servicio (`/es/trabajos/...`, `/en/services/...`).
 * Es un Server Component: el contenido llega en el HTML inicial, sin depender
 * de JavaScript, que es lo que Google necesita para indexar texto largo.
 */
export default function ServiceLanding({
  locale,
  content,
  currentId,
  labels,
}: ServiceLandingProps) {
  const url = `${SITE_URL}${servicePath(locale, currentId)}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.h1,
    serviceType: content.name,
    description: content.description,
    url,
    image: `${SITE_URL}${content.image}`,
    provider: {
      '@type': 'Organization',
      name: 'Chamba',
      url: SITE_URL,
      logo: `${SITE_URL}/images/icon.png`,
      areaServed: {
        '@type': 'City',
        name: 'Santa Cruz de la Sierra',
      },
    },
    areaServed: ZONES[locale].map((zone) => ({
      '@type': 'Place',
      name: `${zone}, Santa Cruz de la Sierra, Bolivia`,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BOB',
      description: content.priceRange,
      availability: 'https://schema.org/InStock',
      areaServed: 'BO',
    },
  };

  const others = SERVICES.filter((service) => service.id !== currentId);

  return (
    <div className="min-h-screen pt-24 text-slate-700">
      <BreadcrumbsJsonLd
        items={[
          { name: labels.breadcrumbHome, url: `/${locale}` },
          { name: labels.breadcrumbIndex, url: serviceIndexPath(locale) },
          { name: content.name, url: servicePath(locale, currentId) },
        ]}
      />
      <FaqJsonLd
        faqs={content.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
        }}
      />

      <Navbar activeRole="client" />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-500">
          <Link href={`/${locale}`} className="hover:underline">
            {labels.breadcrumbHome}
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={serviceIndexPath(locale)} className="hover:underline">
            {labels.breadcrumbIndex}
          </Link>
        </nav>

        <article className={cardClass}>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {content.h1}
          </h1>

          <div className="space-y-4">
            {content.intro.map((paragraph) => (
              <p key={paragraph} className={bodyClass}>
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className={h2Class}>{labels.includes}</h2>
          <ul className="space-y-2">
            {content.includes.map((item) => (
              <li key={item} className={bodyClass}>
                {item}
              </li>
            ))}
          </ul>

          <h2 className={h2Class}>{labels.price}</h2>
          <p className={bodyClass}>{content.priceRange}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{content.priceNote}</p>

          <h2 className={h2Class}>{labels.questions}</h2>
          <ul className="space-y-2">
            {content.questions.map((item) => (
              <li key={item} className={bodyClass}>
                {item}
              </li>
            ))}
          </ul>

          <h2 className={h2Class}>{labels.zones}</h2>
          <p className={bodyClass}>{labels.zonesIntro}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {ZONES[locale].join(' · ')}
          </p>

          <h2 className={h2Class}>{labels.faqs}</h2>
          <dl className="space-y-5">
            {content.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-base font-bold text-slate-900">{faq.q}</dt>
                <dd className={`mt-1 ${bodyClass}`}>{faq.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-lg font-bold text-slate-900">{labels.ctaTitle}</p>
            <p className="mt-1 text-base leading-relaxed text-slate-600">{labels.ctaBody}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`/${locale}#descargar`}
                className="inline-flex items-center rounded-full bg-violet-700 px-5 py-3 text-sm font-bold text-white hover:bg-violet-800"
              >
                {labels.ctaApp}
              </Link>
              <Link
                href={`/${locale}/unete`}
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                {labels.ctaJoin}
              </Link>
            </div>
          </div>

          <h2 className={h2Class}>{labels.otherServices}</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {others.map((service) => (
              <li key={service.id}>
                <Link
                  href={servicePath(locale, service.id)}
                  className="text-sm font-semibold text-violet-700 hover:underline"
                >
                  {getService(service.id)!.content[locale].name}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>

      <Footer />
    </div>
  );
}
