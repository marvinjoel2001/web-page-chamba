# Revisión SEO de Chamba — 2 de noviembre de 2026

Dominio revisado: https://www.chambatrabajo.com. Las correcciones se publicaron en Vercel desde el commit `039b4d3`. La comprobación SEO de las 45 URL pasó también contra el dominio público.

## Diagnóstico de la versión pública

Se comprobaron las respuestas HTTP de la portada, el registro, robots.txt, sitemap.xml y las variantes de dominio. La versión publicada ya tenía una base SEO técnica y páginas por oficio. El repositorio local estaba tres commits atrasado; se actualizó hasta `24de1f5` antes de integrar las correcciones para conservar esas páginas.

| Hallazgo | Resultado |
| --- | --- |
| Acceso público | `/es` y `/es/unete` responden 200; sin cabecera `X-Robots-Tag` que impida su indexación. |
| Dominio | El dominio sin `www` redirige 308 hacia `www`; `/` redirige 307 a `/es`. |
| Sitemap y robots | Disponibles públicamente; no faltaban en producción. |
| Título del registro | Repetía `Chamba Bolivia` por combinar un título completo con otra plantilla de marca. |
| Contenido para trabajadores | La portada inicial estaba centrada en contratar servicios; cambiar de modo requería interacción. Existía `/unete`, pero faltaban enlaces permanentes y contenido informativo visible sobre buscar trabajo. |
| Datos estructurados | Se generaban cinco vacantes genéricas con salarios y fechas fijas en portada y registro, sin páginas individuales de vacantes reales. |
| Datos de negocio | El código declaraba teléfono de ejemplo, código postal `0000`, reseñas, horarios y cobertura extendida sin una fuente de datos verificable. |
| Idiomas | Ayuda, privacidad y términos tenían el mismo contenido principal en español bajo tres URL de idioma. |
| Rendimiento | El video decorativo de fondo pesa 9.96 MB y se solicitaba durante la carga inicial. No se midieron Core Web Vitals de usuarios reales. |

En la revisión inicial no se tenía acceso a Search Console. Durante la publicación se verificó la propiedad de prefijo `https://www.chambatrabajo.com/` mediante el archivo HTML oficial de Google. Search Console confirmó que el sitemap se procesó correctamente y descubrió 45 páginas. La inspección de la portada `/es` mostró «Descubierta: actualmente sin indexar», sin rastreo previo registrado. El resto de los informes todavía está procesando datos; no hay evidencia suficiente para atribuir posiciones o acciones manuales.

## Correcciones publicadas

- Dominio canónico estable: `https://www.chambatrabajo.com`. Las URL temporales de Vercel ya no sustituyen el dominio cuando falta la variable de entorno.
- Títulos sin marca duplicada y descripciones centradas en el producto real, sin prometer cientos de pedidos diarios.
- Encabezados de portada que mencionan Santa Cruz y una sección visible sobre trabajo independiente en Bolivia, incluida en el HTML inicial.
- Nueva guía `/es/trabajo-santa-cruz`, con versiones en inglés y portugués: oficios, registro, modalidades por trabajo/hora/día, verificación y cobertura actual. Informa que los pedidos se consultan en la app y que no se garantiza salario o disponibilidad.
- Enlaces permanentes desde la portada y el pie de página al registro, la guía de trabajo y el directorio existente de servicios. El menú de trabajadores también enlaza la guía.
- Conservación de las treinta páginas por oficio e idioma y de sus URL actuales.
- Retirada del marcado de vacantes genéricas. El JSON-LD describe organización, sitio y app Android; sin teléfono ficticio, valoración fija, búsqueda web inexistente ni disponibilidad iOS no publicada.
- Las guías de servicios describen a Chamba como intermediario y no declaran inventario disponible ni una oferta concreta sin datos en tiempo real.
- Ayuda, términos y privacidad consolidan las copias en su URL española y no anuncian traducciones inexistentes en el sitemap. El contenido legal se conserva.
- La página de eliminación de cuenta conserva `noindex`, también para Googlebot, y permanece fuera del sitemap.
- Sitemap actualizado con 45 URL canónicas: portada, registro y guía de trabajo en tres idiomas; ayuda y dos páginas legales en español; tres índices y treinta guías de oficios.
- Video aplazado hasta después de cargar la página; no se descarga para quienes tienen ahorro de datos o movimiento reducido. El contenedor principal deja de depender de una animación inicialmente invisible.

## Validación

La prueba en tiempo real de Google Search Console del 2 de noviembre de 2026 a las 13:06 (Bolivia) confirmó para `/es`: «La URL está disponible para Google» y «La página se puede indexar». Esto verifica el acceso y la posibilidad técnica de indexación; no equivale a estar ya indexada.

La compilación de producción y la comprobación de TypeScript pasan. ESLint termina sin errores; quedan doce advertencias preexistentes sobre imágenes y símbolos sin uso.

`npm run check:seo` comprueba por HTTP la versión de producción local: 45 URL del sitemap, títulos únicos, descripción, H1, canonical, hreflang, robots, JSON-LD parseable, ausencia de vacantes genéricas, exclusión de páginas noindex, consolidación del contenido español, enlaces iniciales y errores 404 de oficios inexistentes.

Se abrió la guía en Chrome y se comprobó su contenido y geometría mediante el DOM. La captura de la guía agotó el tiempo de espera; posteriormente se guardaron capturas de Search Console con el sitemap procesado y la prueba de acceso de Google. No se presenta esta revisión como una medición de velocidad móvil.

Para reproducir:

```powershell
npm run build
npm run start -- --port 3100
# En otra terminal:
npm run check:seo
```

## Publicación, descubrimiento y seguimiento

1. Completado: correcciones publicadas y verificadas en producción. Mantener `NEXT_PUBLIC_SITE_URL=https://www.chambatrabajo.com` en el alojamiento.
2. Completado: propiedad de prefijo `https://www.chambatrabajo.com/` verificada en [Google Search Console](https://search.google.com/search-console?resource_id=https%3A%2F%2Fwww.chambatrabajo.com%2F). Conservar `public/googlea3d44afce5340b9e.html` para mantener la verificación. La propiedad de dominio por DNS es diferente y no se modificó.
3. Completado: [sitemap.xml](https://www.chambatrabajo.com/sitemap.xml) enviado y procesado por Google, con 45 páginas descubiertas. La solicitud manual adicional de la portada no se completó: Google mostró un error al enviar la solicitud y un aviso de conexión fallida con su servicio reCAPTCHA. No se sorteó esa comprobación ni se afirma que la solicitud manual haya quedado aceptada.
4. Consultar en Search Console las páginas excluidas, canonical elegida por Google, acciones manuales, experiencia móvil e impresiones por consulta. No repetir solicitudes masivamente.
5. Confirmar con datos reales los precios de referencia, zonas, testimonios y cifras comerciales existentes. Completar las traducciones pendientes de los componentes de portada y registro.
6. Para búsquedas de vacantes concretas, publicar solicitudes reales con una URL por vacante, descripción visible, ubicación, fecha y forma de postular. Solo entonces añadir `JobPosting`; retirar o caducar las vacantes cerradas. La Indexing API se reserva para páginas admitidas por Google, no para indexar toda la web.
7. Priorizar contenido útil para consultas específicas: trabajo independiente en Santa Cruz, limpieza, albañilería, plomería y electricidad. Medir impresiones, clics y registros antes de ampliar a otras ciudades. No afirmar cobertura nacional mientras la operación indicada siga en Santa Cruz.

Una campaña publicitaria en Google Ads puede dar visibilidad de pago cuando esté aprobada y activa; es una decisión aparte, con presupuesto. Las mejoras SEO no garantizan un primer puesto ni una fecha de indexación.

Referencias oficiales: [reglas de JobPosting](https://developers.google.com/search/docs/appearance/structured-data/job-posting), [rastreo e indexación](https://developers.google.com/search/help/crawling-index-faq), [solicitar un nuevo rastreo](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).

## Difusión externa

Se encontró una conversación relevante de r/BOLIVIA sobre fuentes de trabajo. El usuario indicó después «Solo publicar las mejoras de la web por ahora»: no se publicó en Reddit, Facebook ni otros foros. No se compraron enlaces ni anuncios.
