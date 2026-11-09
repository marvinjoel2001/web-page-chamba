import type { MetadataRoute } from 'next';
import { SITE_URL, SITE_IMAGES } from '@/lib/seo';
import { routing } from '@/i18n/routing';
import {
  SERVICES,
  SERVICE_LOCALES,
  serviceIndexPath,
  servicePath,
} from '@/lib/service-pages';

interface RouteConfig {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  /** Fecha real de la última modificación de contenido de esta ruta (ISO 8601). */
  lastModified: string;
  images?: string[];
}

const allImageUrls = SITE_IMAGES.map((img) => img.url);
const workerImageUrls = SITE_IMAGES.filter(
  (img) =>
    img.url.includes('worker') ||
    img.url.includes('trabajador') ||
    img.url.includes('categories') ||
    img.url.includes('hero')
).map((img) => img.url);

/**
 * `lastModified` es una fecha de contenido, no la del request.
 * Devolver `new Date()` en cada visita le dice a Google que las 18 URLs
 * cambiaron siempre, lo que desgasta el crawl budget y retrasa la
 * reindexación real. Actualizar estas fechas solo cuando cambie el contenido.
 */
const routes: RouteConfig[] = [
  {
    path: '',
    changeFrequency: 'daily',
    priority: 1.0,
    lastModified: '2026-11-02',
    images: allImageUrls,
  },
  {
    path: '/unete',
    changeFrequency: 'daily',
    priority: 0.95,
    lastModified: '2026-11-02',
    images: workerImageUrls,
  },
  {
    path: '/publicar-trabajo',
    changeFrequency: 'daily',
    priority: 0.95,
    lastModified: '2026-11-09',
    images: allImageUrls,
  },
  {
    path: '/trabajo-santa-cruz',
    changeFrequency: 'daily',
    priority: 0.9,
    lastModified: '2026-11-02',
    images: workerImageUrls,
  },
  {
    path: '/help',
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModified: '2026-10-30',
    images: [`${SITE_URL}/images/hero-visual.png`, `${SITE_URL}/images/icon.png`],
  },
  {
    path: '/terms',
    changeFrequency: 'yearly',
    priority: 0.4,
    lastModified: '2026-06-15',
  },
  {
    path: '/privacy',
    changeFrequency: 'yearly',
    priority: 0.4,
    lastModified: '2026-06-15',
  },
  // `/eliminar-cuenta` queda fuera a propósito: lleva `noindex` para cumplir
  // con la política de Google Play sin competir en resultados de búsqueda orgánica.
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    // Help and legal content are currently in Spanish in every locale.
    // Their duplicate URLs canonicalize to Spanish until genuinely translated.
    const locales = ['/help', '/terms', '/privacy'].includes(route.path) ? ['es'] : routing.locales;
    // Generar alternates con hreflang para cada idioma soportado
    const languages: Record<string, string> = {};
    for (const loc of locales) {
      languages[loc] = `${SITE_URL}/${loc}${route.path}`;
    }
    languages['x-default'] = `${SITE_URL}/es${route.path}`;

    const lastModified = new Date(route.lastModified);

    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages,
        },
        images: route.images,
      });
    }
  }

  // Índice de servicios por idioma (`/es/trabajos`, `/en/services`, ...).
  for (const locale of SERVICE_LOCALES) {
    const languages: Record<string, string> = {};
    for (const loc of SERVICE_LOCALES) {
      languages[loc] = `${SITE_URL}${serviceIndexPath(loc)}`;
    }
    languages['x-default'] = `${SITE_URL}${serviceIndexPath('es')}`;

    entries.push({
      url: `${SITE_URL}${serviceIndexPath(locale)}`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: { languages },
    });
  }

  // Una URL por oficio y idioma. Son las páginas que capturan las búsquedas
  // long-tail ("plomero en Santa Cruz", "cuánto cuesta un electricista").
  for (const locale of SERVICE_LOCALES) {
    for (const service of SERVICES) {
      const content = service.content[locale];

      const serviceLanguages: Record<string, string> = {};
      for (const loc of SERVICE_LOCALES) {
        serviceLanguages[loc] = `${SITE_URL}${servicePath(loc, service.id)}`;
      }
      serviceLanguages['x-default'] = `${SITE_URL}${servicePath('es', service.id)}`;

      entries.push({
        url: `${SITE_URL}${servicePath(locale, service.id)}`,
        lastModified: new Date('2026-10-30'),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: { languages: serviceLanguages },
        images: [`${SITE_URL}${content.image}`],
      });
    }
  }

  return entries;
}
