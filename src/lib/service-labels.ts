import type { Locale } from '@/lib/service-pages';

/**
 * Textos de interfaz de las páginas de servicio. No son traducciones de
 * marketing: son etiquetas estables que no deben cambiar por slug.
 */
export const SERVICE_LABELS: Record<
  Locale,
  {
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
    indexTitle: string;
    indexDescription: string;
    indexIntro: string;
  }
> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbIndex: 'Trabajos y servicios',
    breadcrumbCurrent: 'Servicio',
    includes: 'Qué incluye el trabajo',
    price: 'Precio de referencia en Santa Cruz',
    questions: 'Qué preguntar antes de contratar',
    zones: 'Zonas de cobertura en Santa Cruz de la Sierra',
    zonesIntro:
      'Los trabajadores de Chamba atienden toda el área urbana de Santa Cruz de la Sierra y municipios cercanos. Estas son las zonas con más solicitudes:',
    faqs: 'Preguntas frecuentes',
    ctaTitle: 'Pide este servicio en Chamba',
    ctaBody:
      'Describe lo que necesitas, indica cuánto quieres pagar en bolivianos y recibe ofertas de trabajadores verificados de tu zona.',
    ctaApp: 'Descargar la app',
    ctaJoin: 'Quiero trabajar en esto',
    otherServices: 'Otros servicios en Santa Cruz',
    indexTitle: 'Trabajos y servicios en Santa Cruz de la Sierra',
    indexDescription:
      'Precios de referencia y guías para contratar plomeros, electricistas, albañiles, pintores, personal de limpieza y más oficios en Santa Cruz de la Sierra, Bolivia.',
    indexIntro:
      'Cada oficio tiene su propio rango de precio y sus preguntas clave. Estas guías te ayudan a saber cuánto deberías pagar antes de contratar a alguien en Santa Cruz de la Sierra.',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbIndex: 'Services',
    breadcrumbCurrent: 'Service',
    includes: 'What the job includes',
    price: 'Reference price in Santa Cruz',
    questions: 'What to ask before hiring',
    zones: 'Coverage areas in Santa Cruz de la Sierra',
    zonesIntro:
      'Chamba workers cover the entire urban area of Santa Cruz de la Sierra and nearby municipalities. These are the areas with the most requests:',
    faqs: 'Frequently asked questions',
    ctaTitle: 'Request this service on Chamba',
    ctaBody:
      'Describe what you need, set the price you want to pay in bolivianos and receive offers from verified workers in your area.',
    ctaApp: 'Download the app',
    ctaJoin: 'I want to work in this trade',
    otherServices: 'Other services in Santa Cruz',
    indexTitle: 'Services and trades in Santa Cruz de la Sierra',
    indexDescription:
      'Reference prices and hiring guides for plumbers, electricians, masons, painters, cleaners and other trades in Santa Cruz de la Sierra, Bolivia.',
    indexIntro:
      'Every trade has its own price range and its key questions. These guides help you understand what you should pay before hiring someone in Santa Cruz de la Sierra.',
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbIndex: 'Serviços',
    breadcrumbCurrent: 'Serviço',
    includes: 'O que o serviço inclui',
    price: 'Preço de referência em Santa Cruz',
    questions: 'O que perguntar antes de contratar',
    zones: 'Regiões atendidas em Santa Cruz de la Sierra',
    zonesIntro:
      'Os profissionais da Chamba atendem toda a área urbana de Santa Cruz de la Sierra e municípios próximos. Estas são as regiões com mais pedidos:',
    faqs: 'Perguntas frequentes',
    ctaTitle: 'Peça este serviço na Chamba',
    ctaBody:
      'Descreva o que você precisa, indique quanto quer pagar em bolivianos e receba propostas de profissionais verificados da sua região.',
    ctaApp: 'Baixar o aplicativo',
    ctaJoin: 'Quero trabalhar nisso',
    otherServices: 'Outros serviços em Santa Cruz',
    indexTitle: 'Serviços e ofícios em Santa Cruz de la Sierra',
    indexDescription:
      'Preços de referência e guias para contratar encanadores, eletricistas, pedreiros, pintores, diaristas e outros ofícios em Santa Cruz de la Sierra, Bolívia.',
    indexIntro:
      'Cada ofício tem sua própria faixa de preço e suas perguntas-chave. Estes guias ajudam você a saber quanto deveria pagar antes de contratar alguém em Santa Cruz de la Sierra.',
  },
};
