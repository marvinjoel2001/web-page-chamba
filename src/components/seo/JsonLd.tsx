import React from 'react';
import { SITE_URL, PLAY_STORE_URL, CONTACT_EMAIL } from '@/lib/seo';

/** Describe the actual platform. Only real, public individual vacancies may use JobPosting. */
export function RootJsonLd({ locale = 'es' }: { locale?: string }) {
  const organizationId = `${SITE_URL}/#organization`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': organizationId,
        name: 'Chamba', url: SITE_URL, logo: `${SITE_URL}/images/icon.png`,
        description: 'Plataforma que conecta clientes y trabajadores independientes en Santa Cruz de la Sierra, Bolivia.',
        email: CONTACT_EMAIL, sameAs: [PLAY_STORE_URL],
      },
      {
        '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'Chamba',
        alternateName: ['Chamba App', 'Chamba Bolivia'],
        url: `${SITE_URL}/${locale}`, inLanguage: locale,
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'MobileApplication', name: 'Chamba', operatingSystem: 'Android',
        applicationCategory: 'BusinessApplication', installUrl: PLAY_STORE_URL,
        image: `${SITE_URL}/images/icon.png`,
        screenshot: `${SITE_URL}/images/app-screens/v2/cliente-inicio.webp`,
        publisher: { '@id': organizationId },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}

/** FAQ data must describe questions and answers visible on the page. */
export function FaqJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}

/**
 * BreadcrumbList Schema para navegación jerárquica en Google.
 */
export function BreadcrumbsJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
