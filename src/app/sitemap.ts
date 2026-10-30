import type { MetadataRoute } from 'next';
import { SITE_URL, SITE_IMAGES } from '@/lib/seo';
import { routing } from '@/i18n/routing';

interface RouteConfig {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
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

const routes: RouteConfig[] = [
  { path: '', changeFrequency: 'daily', priority: 1.0, images: allImageUrls },
  { path: '/unete', changeFrequency: 'daily', priority: 0.95, images: workerImageUrls },
  { path: '/help', changeFrequency: 'weekly', priority: 0.8, images: [`${SITE_URL}/images/hero-visual.png`, `${SITE_URL}/images/icon.png`] },
  { path: '/terms', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/privacy', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/eliminar-cuenta', changeFrequency: 'monthly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    // Generar alternates con hreflang para cada idioma soportado
    const languages: Record<string, string> = {};
    for (const loc of routing.locales) {
      languages[loc] = `${SITE_URL}/${loc}${route.path}`;
    }
    languages['x-default'] = `${SITE_URL}/es${route.path}`;

    for (const locale of routing.locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages,
        },
        images: route.images,
      });
    }
  }

  return entries;
}
