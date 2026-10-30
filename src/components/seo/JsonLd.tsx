import React from 'react';
import {
  SITE_URL,
  PLAY_STORE_URL,
  AGENCY_PORTAL_URL,
  CONTACT_EMAIL,
  SITE_IMAGES,
} from '@/lib/seo';

/**
 * Inyecta Structured Data (JSON-LD) para Google Search.
 * Cumple al 100% las especificaciones de Schema.org, Google Rich Results,
 * Google for Jobs y Google Images.
 */
export function RootJsonLd({ locale = 'es' }: { locale?: string }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chamba',
    legalName: 'Chamba App',
    url: SITE_URL,
    logo: `${SITE_URL}/images/icon.png`,
    image: `${SITE_URL}/images/hero-visual.png`,
    description:
      'Plataforma líder en Bolivia para encontrar trabajo independiente y contratar profesionales de confianza en Santa Cruz de la Sierra.',
    email: CONTACT_EMAIL,
    sameAs: [
      PLAY_STORE_URL,
      AGENCY_PORTAL_URL,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Santa Cruz de la Sierra',
      addressLocality: 'Santa Cruz de la Sierra',
      addressRegion: 'Santa Cruz',
      postalCode: '0000',
      addressCountry: 'BO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_EMAIL,
      contactType: 'customer support',
      availableLanguage: ['Spanish', 'English', 'Portuguese'],
      areaServed: 'BO',
    },
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chamba — Trabajos y Servicios en Bolivia',
    alternateName: [
      'Chamba App',
      'Chamba Bolivia',
      'Chamba Santa Cruz',
      'Chamba Trabajos',
      'Chamba Empleos',
    ],
    url: `${SITE_URL}/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/${locale}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const mobileAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Chamba',
    alternateName: 'Chamba App Bolivia — Trabajos y Servicios',
    operatingSystem: 'Android, iOS',
    applicationCategory: 'BusinessApplication',
    installUrl: PLAY_STORE_URL,
    image: `${SITE_URL}/images/icon.png`,
    screenshot: `${SITE_URL}/images/app-screens/v2/cliente-inicio.webp`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BOB',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const localServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Chamba — Servicios y Trabajos en Santa Cruz de la Sierra',
    image: `${SITE_URL}/images/hero-visual.png`,
    url: `${SITE_URL}/${locale}`,
    telephone: '+59170000000',
    priceRange: 'Bs 40 - Bs 500',
    currenciesAccepted: 'BOB',
    paymentAccepted: 'Cash, QR, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Santa Cruz de la Sierra',
      addressLocality: 'Santa Cruz de la Sierra',
      addressRegion: 'Santa Cruz',
      postalCode: '0000',
      addressCountry: 'BO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -17.7833,
      longitude: -63.1821,
    },
    areaServed: [
      { '@type': 'City', name: 'Santa Cruz de la Sierra' },
      { '@type': 'AdministrativeArea', name: 'Santa Cruz' },
      { '@type': 'AdministrativeArea', name: 'Montero' },
      { '@type': 'AdministrativeArea', name: 'Warnes' },
      { '@type': 'AdministrativeArea', name: 'Cotoca' },
      { '@type': 'Country', name: 'Bolivia' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Catálogo de Trabajos y Servicios Chamba Santa Cruz',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo y Servicios de Plomería y Destranques en Santa Cruz',
            description: 'Reparación de fugas, destranques, bombas de agua e instalación de sanitarios en Santa Cruz.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo y Servicios de Electricidad Domiciliaria en Santa Cruz',
            description: 'Arreglo de cortocircuitos, luminarias LED, cableado y tableros eléctricos.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo de Pintores de Casas y Departamentos en Santa Cruz',
            description: 'Pintura de interiores, exteriores, fachadas y acabados decorativos.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo de Limpieza del Hogar y Oficinas en Santa Cruz',
            description: 'Limpieza profunda de casas, oficinas, departamentos y post-construcción.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo de Albañilería y Construcción en Santa Cruz',
            description: 'Colocado de porcelanato, cerámica, muros, revoques y refacciones.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo de Instalación y Mantenimiento de Aire Acondicionado',
            description: 'Mantenimiento preventivo, limpieza, carga de gas e instalación de splits.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo de Jardinería y Paisajismo en Santa Cruz',
            description: 'Corte de césped, poda de árboles y mantenimiento de jardines en condominios.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo de Carpintería y Muebles en Santa Cruz',
            description: 'Armado de muebles en melamina, instalación de puertas y cerraduras.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo de Fletes y Transporte de Carga en Santa Cruz',
            description: 'Transporte de carga liviana, mudanzas y fletes locales.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajo de Auxilio Mecánico Ligero en Santa Cruz',
            description: 'Cambio de batería, arranque con cables y mecánica de emergencia a domicilio.',
          },
        },
      ],
    },
  };

  // Google Image Search Schemas (ImageObject)
  const imageSchemas = SITE_IMAGES.map((img) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: img.url,
    name: img.title,
    caption: img.caption,
    description: img.caption,
    creator: {
      '@type': 'Organization',
      name: 'Chamba App Bolivia',
    },
    contentLocation: {
      '@type': 'Place',
      name: 'Santa Cruz de la Sierra, Bolivia',
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileAppSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localServiceSchema).replace(/</g, '\\u003c'),
        }}
      />
      {imageSchemas.map((imgSchema, idx) => (
        <script
          key={`img-ld-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imgSchema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}

/**
 * Google for Jobs Structured Data (`JobPosting` Schema).
 * Permite que Chamba aparezca directamente en el recuadro interactivo "Google Empleos"
 * cuando los usuarios buscan "trabajos en Santa Cruz", "trabajo bolivia", "empleo plomero", etc.
 */
export function JobPostingsJsonLd() {
  const jobs = [
    {
      title: 'Trabajadores y Técnicos de Oficios del Hogar (Plomería, Electricidad, Albañilería, Limpieza)',
      description:
        'Chamba conecta a trabajadores independientes y técnicos de oficios en Santa Cruz de la Sierra con clientes que necesitan reparaciones, instalaciones y servicios del hogar. Trabaja a tu propio ritmo, define tus tarifas en Bs y recibe solicitudes directas en tu celular.',
      datePosted: '2026-01-10T08:00:00-04:00',
      validThrough: '2027-12-31T23:59:59-04:00',
      employmentType: ['CONTRACTOR', 'PART_TIME', 'FULL_TIME', 'TEMPORARY'],
      baseSalaryMin: 150,
      baseSalaryMax: 600,
      unitText: 'DAY',
      occupationalCategory: 'Construcción y Mantenimiento del Hogar',
    },
    {
      title: 'Plomero / Fontanero Independiente a Domicilio en Santa Cruz de la Sierra',
      description:
        'Se requieren plomeros independientes para atender destranques, fugas de agua, instalación de griferías, bombas y sanitarios en Santa Cruz de la Sierra. Pagos directos e inmediatos en Bolivianos.',
      datePosted: '2026-01-10T08:00:00-04:00',
      validThrough: '2027-12-31T23:59:59-04:00',
      employmentType: ['CONTRACTOR', 'PART_TIME', 'TEMPORARY'],
      baseSalaryMin: 120,
      baseSalaryMax: 500,
      unitText: 'DAY',
      occupationalCategory: 'Fontanería e Instalaciones Sanitarias',
    },
    {
      title: 'Electricista Domiciliario e Instalaciones Eléctricas en Santa Cruz de la Sierra',
      description:
        'Oportunidad de trabajo para electricistas calificados en Santa Cruz. Reparación de cortocircuitos, instalación de luminarias, cableado, tableros eléctricos y aires acondicionados con pago directo del cliente.',
      datePosted: '2026-01-10T08:00:00-04:00',
      validThrough: '2027-12-31T23:59:59-04:00',
      employmentType: ['CONTRACTOR', 'PART_TIME', 'TEMPORARY'],
      baseSalaryMin: 150,
      baseSalaryMax: 550,
      unitText: 'DAY',
      occupationalCategory: 'Electricidad e Instalaciones',
    },
    {
      title: 'Personal de Limpieza para Casas, Departamentos y Oficinas en Santa Cruz',
      description:
        'Convocatoria abierta para personal de limpieza en Santa Cruz de la Sierra. Servicios de limpieza profunda, por horas o por día. Recibe ofertas cercanas a tu zona sin horarios obligatorios.',
      datePosted: '2026-01-10T08:00:00-04:00',
      validThrough: '2027-12-31T23:59:59-04:00',
      employmentType: ['CONTRACTOR', 'PART_TIME', 'TEMPORARY'],
      baseSalaryMin: 100,
      baseSalaryMax: 350,
      unitText: 'DAY',
      occupationalCategory: 'Servicios de Limpieza y Mantenimiento',
    },
    {
      title: 'Albañil, Pintor y Constructor para Refacciones y Obras Menores en Santa Cruz',
      description:
        'Trabajo para albañiles y pintores independientes en Santa Cruz de la Sierra. Colocación de pisos, revoques, pintura interior y exterior. Cobro directo en Bs acordado con cada cliente.',
      datePosted: '2026-01-10T08:00:00-04:00',
      validThrough: '2027-12-31T23:59:59-04:00',
      employmentType: ['CONTRACTOR', 'PART_TIME', 'TEMPORARY'],
      baseSalaryMin: 150,
      baseSalaryMax: 600,
      unitText: 'DAY',
      occupationalCategory: 'Construcción y Pintura',
    },
  ];

  return (
    <>
      {jobs.map((job, idx) => {
        const schema = {
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: job.title,
          description: job.description,
          datePosted: job.datePosted,
          validThrough: job.validThrough,
          employmentType: job.employmentType,
          occupationalCategory: job.occupationalCategory,
          hiringOrganization: {
            '@type': 'Organization',
            name: 'Chamba',
            sameAs: SITE_URL,
            logo: `${SITE_URL}/images/icon.png`,
          },
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Santa Cruz de la Sierra',
              addressLocality: 'Santa Cruz de la Sierra',
              addressRegion: 'Santa Cruz',
              postalCode: '0000',
              addressCountry: 'BO',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -17.7833,
              longitude: -63.1821,
            },
          },
          baseSalary: {
            '@type': 'MonetaryAmount',
            currency: 'BOB',
            value: {
              '@type': 'QuantitativeValue',
              minValue: job.baseSalaryMin,
              maxValue: job.baseSalaryMax,
              unitText: job.unitText,
            },
          },
          applicantLocationRequirements: {
            '@type': 'Country',
            name: 'Bolivia',
          },
          directApply: true,
        };

        return (
          <script
            key={`job-posting-${idx}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
            }}
          />
        );
      })}
    </>
  );
}

/**
 * FAQPage Schema para preguntas frecuentes (Centro de Ayuda y FAQs).
 * Genera el snippet de preguntas desplegables en Google SERP.
 */
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
