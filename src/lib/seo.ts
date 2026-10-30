/**
 * Configuración centralizada de SEO para Chamba Web.
 * Optimizado para indexación rápida en Google, Google for Jobs, Google Images y SEO local en Bolivia.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://www.chambatrabajo.com');

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.chambatrabajo.app';

export const AGENCY_PORTAL_URL = 'https://agency-chamba.vercel.app/';

export const CONTACT_EMAIL = 'soporte@chamba.app';

export const SEO_DATA = {
  es: {
    siteName: 'Chamba',
    title: 'Trabajos en Santa Cruz y Servicios en Bolivia | Chamba App',
    titleTemplate: '%s | Chamba Bolivia',
    description:
      'Encuentra trabajo en Santa Cruz de la Sierra o contrata plomeros, electricistas, albañiles, pintores y limpieza en Bolivia. Ofertas de trabajo diario, oficios independientes y servicios al instante en Bs.',
    keywords: [
      // Búsquedas principales de trabajo y empleo en Bolivia y Santa Cruz
      'trabajo',
      'trabajos',
      'trabajo bolivia',
      'trabajos en bolivia',
      'trabajo santa cruz',
      'trabajos en santa cruz',
      'trabajos en santa cruz de la sierra',
      'empleo santa cruz',
      'empleos en santa cruz',
      'empleos bolivia',
      'empleo santa cruz bolivia',
      'bolsa de trabajo santa cruz',
      'bolsa de trabajo bolivia',
      'ofertas de trabajo santa cruz',
      'ofertas laborales santa cruz',
      'ofertas laborales bolivia',
      'buscar trabajo en santa cruz',
      'buscar trabajo bolivia',
      'conseguir trabajo santa cruz',
      'conseguir trabajo en santa cruz de la sierra',
      'trabajo hoy santa cruz',
      'trabajo urgente santa cruz',
      'trabajos de medio tiempo santa cruz',
      'trabajos sin experiencia santa cruz',
      'trabajos para mujeres santa cruz',
      'trabajos para hombres santa cruz',
      'trabajo independiente bolivia',
      'trabajadores independientes santa cruz',
      'chambas bolivia',
      'chamba santa cruz',
      'chamba app',
      'app de trabajo bolivia',
      'app para encontrar trabajo bolivia',
      'plataforma de empleo santa cruz',

      // Oficios y trabajos específicos en Santa Cruz
      'trabajo de plomero santa cruz',
      'plomero santa cruz',
      'plomeria santa cruz bolivia',
      'trabajo de electricista santa cruz',
      'electricista santa cruz',
      'electricistas a domicilio santa cruz',
      'trabajo de pintor santa cruz',
      'pintor de casas santa cruz',
      'pintores bolivia',
      'trabajo de albañil santa cruz',
      'albañil santa cruz de la sierra',
      'construccion y albañileria santa cruz',
      'trabajos de construccion santa cruz',
      'trabajo de limpieza santa cruz',
      'servicio de limpieza santa cruz',
      'limpieza de casas y departamentos santa cruz',
      'trabajo de jardineria santa cruz',
      'mantenimiento de jardines santa cruz',
      'trabajo de carpintero santa cruz',
      'armado de muebles santa cruz',
      'trabajos de fletes y mudanzas santa cruz',
      'transporte de carga santa cruz',
      'auxilio mecanico santa cruz',
      'mecanico a domicilio santa cruz',
      'instalacion de aire acondicionado santa cruz',
      'mantenimiento de aire acondicionado santa cruz',

      // Zonas clave de Santa Cruz de la Sierra
      'trabajos equipetrol',
      'trabajo plan 3000',
      'trabajos villa 1ro de mayo',
      'trabajo pampa de la isla',
      'trabajos las palmas santa cruz',
      'trabajo av banzer santa cruz',
      'servicios equipetrol santa cruz',
      'plomero plan 3000',
      'electricista villa 1ro de mayo',

      // Búsquedas transaccionales
      'reparaciones del hogar santa cruz',
      'servicios tecnicos en santa cruz',
      'tecnicos a domicilio bolivia',
      'mano de obra calificada bolivia',
      'contratar personal de confianza santa cruz',
      'cotizaciones de servicios santa cruz',
      'conseguir clientes para oficios',
      'ganar dinero con mi oficio bolivia',
      'registro de trabajadores independientes',
    ],
  },
  en: {
    siteName: 'Chamba',
    title: 'Jobs in Santa Cruz & Home Services in Bolivia | Chamba App',
    titleTemplate: '%s | Chamba Bolivia',
    description:
      'Find jobs in Santa Cruz, Bolivia or hire trusted local plumbers, electricians, painters, and cleaners. Instant job offers, freelance trades, and direct payments in Bs.',
    keywords: [
      'jobs in bolivia',
      'jobs in santa cruz bolivia',
      'find jobs santa cruz',
      'chamba bolivia',
      'home services santa cruz bolivia',
      'local handymen bolivia',
      'hire plumbers santa cruz',
      'hire electricians santa cruz',
      'home repairs bolivia',
      'freelance jobs bolivia',
    ],
  },
  pt: {
    siteName: 'Chamba',
    title: 'Vagas de Trabalho em Santa Cruz e Serviços na Bolívia | Chamba',
    titleTemplate: '%s | Chamba Bolívia',
    description:
      'Encontre trabalho em Santa Cruz de la Sierra ou contrate encanadores, eletricistas, pedreiros e diaristas na Bolívia. Vagas diárias e pagamentos diretos.',
    keywords: [
      'trabalho na bolivia',
      'vagas de emprego santa cruz bolivia',
      'chamba bolivia',
      'serviços residenciais santa cruz bolivia',
      'encanador santa cruz bolivia',
      'eletricista santa cruz bolivia',
      'reformas e reparos bolivia',
    ],
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
