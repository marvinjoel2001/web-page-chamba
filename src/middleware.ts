import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Intercepta todas las rutas excepto llamadas a /api, archivos estáticos (_next, imágenes, etc.)
  // y archivos con extensión (robots.txt, sitemap.xml, manifest, etc.).
  // Esto evita errores 404 cuando Googlebot o un usuario entra a URLs sin prefijo de idioma (/unete, /help, etc.).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
