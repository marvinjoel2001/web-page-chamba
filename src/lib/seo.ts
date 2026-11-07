/**
 * Configuración centralizada de SEO para Chamba Web.
 * Metadatos de la plataforma y sus páginas públicas en Bolivia.
 */

// The public domain is stable even when building on a Vercel preview hostname.
const configuredSiteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.chambatrabajo.com');
if (configuredSiteUrl.protocol !== 'https:' || configuredSiteUrl.pathname !== '/' || configuredSiteUrl.search || configuredSiteUrl.hash || configuredSiteUrl.username || configuredSiteUrl.password) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be the public HTTPS origin without a path, query, fragment or credentials.');
}
export const SITE_URL = configuredSiteUrl.origin;

export type Locale = 'es' | 'en' | 'pt';
export type PageParams = { params: Promise<{ locale: string }> };
export function getLocale(value: string): Locale {
  return value === 'en' || value === 'pt' ? value : 'es';
}
export function localizedUrl(locale: Locale, path = ''): string {
  return `${SITE_URL}/${locale}${path}`;
}

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.chambatrabajo.app&pcampaignid=web_share';

export const AGENCY_PORTAL_URL = 'https://agency-chamba.vercel.app/';

export const CONTACT_EMAIL = 'soporte@chamba.app';

export const SEO_DATA = {
  es: {
    siteName: 'Chamba',
    title: 'Trabajo en Bolivia y servicios en Santa Cruz | Chamba',
    description:
      'Ofrece tu oficio o contrata servicios en Santa Cruz de la Sierra, Bolivia. Chamba conecta clientes y trabajadores de limpieza, plomería, electricidad y más.',
  },
  en: {
    siteName: 'Chamba',
    title: 'Jobs in Santa Cruz & Home Services in Bolivia | Chamba App',
    description:
      'Offer your trade or hire services in Santa Cruz de la Sierra, Bolivia. Chamba connects clients with independent cleaners, plumbers, electricians and more.',
  },
  pt: {
    siteName: 'Chamba',
    title: 'Vagas de Trabalho em Santa Cruz e Serviços na Bolívia | Chamba',
    description:
      'Ofereça seu ofício ou contrate serviços em Santa Cruz de la Sierra, Bolívia. Chamba conecta clientes e trabalhadores de limpeza, encanamento, eletricidade e mais.',
  },
};

export const GEO_METADATA = {
  'geo.region': 'BO-S',
  'geo.placename': 'Santa Cruz de la Sierra, Bolivia',
  'geo.position': '-17.7833;-63.1821',
  ICBM: '-17.7833, -63.1821',
};

/**
 * Catálogo completo de imágenes oficiales para Google Image SEO y sitemaps.
 */
export const SITE_IMAGES = [
  {
    url: `${SITE_URL}/images/hero-visual.png`,
    title: 'Chamba Bolivia — Trabajos y Servicios en Santa Cruz de la Sierra',
    caption: 'Plataforma líder para encontrar trabajo y contratar profesionales en Santa Cruz de la Sierra, Bolivia.',
  },
  {
    url: `${SITE_URL}/images/icon.png`,
    title: 'Logo Oficial de Chamba App Bolivia',
    caption: 'Ícono oficial de la aplicación móvil Chamba en Bolivia.',
  },
  {
    url: `${SITE_URL}/images/workers_diverse_bolivia.jpg`,
    title: 'Trabajadores y Profesionales de Oficios en Santa Cruz de la Sierra — Chamba',
    caption: 'Red de plomeros, electricistas, albañiles, pintores y personal de limpieza en Bolivia.',
  },
  {
    url: `${SITE_URL}/images/categories/plomeria.jpg`,
    title: 'Trabajos de Plomería en Santa Cruz de la Sierra — Chamba',
    caption: 'Plomeros certificados a domicilio para destranques, fugas e instalaciones en Santa Cruz.',
  },
  {
    url: `${SITE_URL}/images/categories/electricidad.jpg`,
    title: 'Trabajos de Electricidad Domiciliaria en Santa Cruz — Chamba',
    caption: 'Electricistas profesionales para cortocircuitos, luminarias y tableros en Bolivia.',
  },
  {
    url: `${SITE_URL}/images/categories/construccion.jpg`,
    title: 'Trabajos de Albañilería y Construcción en Santa Cruz — Chamba',
    caption: 'Albañiles calificados para colocación de pisos, muros, revoques y refacciones.',
  },
  {
    url: `${SITE_URL}/images/categories/pintura.jpg`,
    title: 'Trabajos de Pintura de Casas y Departamentos en Santa Cruz — Chamba',
    caption: 'Pintores expertos para interiores, fachadas y acabados en Santa Cruz de la Sierra.',
  },
  {
    url: `${SITE_URL}/images/categories/limpieza.jpg`,
    title: 'Trabajos de Limpieza del Hogar y Oficinas en Santa Cruz — Chamba',
    caption: 'Personal de limpieza para casas, oficinas y departamentos en Bolivia.',
  },
  {
    url: `${SITE_URL}/images/categories/jardineria.jpg`,
    title: 'Trabajos de Jardinería y Mantenimiento en Santa Cruz — Chamba',
    caption: 'Jardineros para corte de césped, poda y mantenimiento de áreas verdes.',
  },
  {
    url: `${SITE_URL}/images/categories/carpinteria.jpg`,
    title: 'Trabajos de Carpintería y Armado de Muebles en Santa Cruz — Chamba',
    caption: 'Carpinteros para armado de muebles de melamina, puertas y reparaciones en madera.',
  },
  {
    url: `${SITE_URL}/images/categories/transporte.jpg`,
    title: 'Trabajos de Fletes y Mudanzas en Santa Cruz — Chamba',
    caption: 'Servicio de transporte de carga liviana, mudanzas y fletes rápidos.',
  },
  {
    url: `${SITE_URL}/images/categories/mecanica.jpg`,
    title: 'Trabajos de Auxilio Mecánico y Mantenimiento en Santa Cruz — Chamba',
    caption: 'Mecánicos a domicilio para auxilio de baterías, arranque y revisiones ligeras.',
  },
  {
    url: `${SITE_URL}/images/app-screens/v2/cliente-inicio.webp`,
    title: 'App Chamba: Pantalla de Inicio y Pedidos en Santa Cruz',
    caption: 'Pide servicios por voz o texto, fija tu precio en Bs y recibe ofertas en minutos.',
  },
  {
    url: `${SITE_URL}/images/app-screens/v2/trabajador-disponible.webp`,
    title: 'App Chamba Trabajador: Modo Disponible para Recibir Trabajos',
    caption: 'Los trabajadores activan su disponibilidad para recibir solicitudes cerca en Santa Cruz.',
  },
  {
    url: `${SITE_URL}/images/app-screens/v2/trabajador-solicitud.webp`,
    title: 'Oferta de Trabajo en la App Chamba Bolivia',
    caption: 'Solicitud de trabajo en tiempo real con ubicación y precio ofertado por el cliente.',
  },
  {
    url: `${SITE_URL}/images/app-screens/v2/trabajador-billetera.webp`,
    title: 'Billetera y Ganancias en Chamba Bolivia',
    caption: 'Cobra tus ingresos directos sin comisiones abusivas en bolivianos (Bs).',
  },
];
