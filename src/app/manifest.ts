import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chamba — Servicios y Profesionales en Bolivia',
    short_name: 'Chamba',
    description:
      'Conecta con profesionales de confianza para servicios del hogar y reparaciones en Santa Cruz de la Sierra, Bolivia.',
    start_url: '/es',
    display: 'standalone',
    background_color: '#FAF6F0',
    theme_color: '#6D28D9',
    lang: 'es-BO',
    categories: ['business', 'utilities', 'lifestyle'],
    icons: [
      {
        src: '/images/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
