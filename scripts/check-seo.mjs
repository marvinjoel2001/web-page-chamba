// Run after `npm run build` and `npm run start -- --port 3100`.
// Override SEO_CHECK_BASE_URL to audit a deployed version, without modifying it.
import assert from 'node:assert/strict';

const base = new URL(process.env.SEO_CHECK_BASE_URL || 'http://localhost:3100');
const production = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.chambatrabajo.com');
const failures = [];
async function read(path) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  return response.text();
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map((match) => [match[1].toLowerCase(), match[2]]));
}
const sitemap = await read('/sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.ok(urls.length > 0, 'Sitemap must contain URLs');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
assert.ok(urls.every((url) => new URL(url).origin === production.origin), 'Sitemap must use the public origin');
assert.ok(!urls.some((url) => url.includes('/eliminar-cuenta')), 'Account deletion is noindex');
const robots = await read('/robots.txt');
assert.ok(robots.includes(`Sitemap: ${new URL('/sitemap.xml', production).href}`), 'robots sitemap URL');
assert.ok(!/Disallow:\s*\/(?:_next|images|static)/i.test(robots), 'Crawler assets must remain accessible');
const uniqueTitles = new Set();
for (let index = 0; index < urls.length; index += 6) {
  await Promise.all(urls.slice(index, index + 6).map(async (url) => {
    const path = new URL(url).pathname;
    try {
      const html = await read(path);
      const tags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/g)].map((match) => attributes(match[0]));
      const canonical = tags.filter((tag) => tag.rel === 'canonical');
      assert.equal(canonical.length, 1, 'One canonical per page');
      assert.equal(canonical[0].href, url, 'Canonical must match sitemap URL');
      assert.ok(!tags.some((tag) => ['robots', 'googlebot'].includes(tag.name) && /noindex/i.test(tag.content)), 'Sitemap entry must be indexable');
      assert.ok(tags.some((tag) => tag.name === 'description' && tag.content.length > 0), 'Description required');
      assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one H1');
      const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1];
      assert.ok(title, 'Title required');
      assert.ok(!uniqueTitles.has(title), 'Unique title across indexable pages');
      uniqueTitles.add(title);
      assert.ok((title.match(/Chamba/g) || []).length <= 1, 'Brand must not be appended twice');
      const locale = path.split('/')[1];
      assert.ok(html.includes(`<html lang="${locale}"`), 'HTML language');
      const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
      assert.ok(schemas.length > 0, 'Parseable structured data');
      assert.ok(!schemas.some((schema) => /"@type":"JobPosting"/.test(JSON.stringify(schema))), 'No invented vacancies on informational pages');
      assert.ok(!schemas.some((schema) => /\+59170000000|"postalCode":"0000"/.test(JSON.stringify(schema))), 'No placeholder business data');
      for (const tag of tags.filter((tag) => tag.rel === 'alternate' && tag.hreflang)) {
        assert.ok(urls.includes(tag.href), `Alternate must be a canonical sitemap URL: ${tag.href}`);
      }
    } catch (error) {
      failures.push(`${path}: ${error.message}`);
    }
  }));
}
for (const locale of ['es', 'en', 'pt']) {
  for (const route of ['help', 'terms', 'privacy']) {
    const html = await read(`/${locale}/${route}`);
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map((match) => attributes(match[0]));
    assert.equal(links.find((tag) => tag.rel === 'canonical')?.href, new URL(`/es/${route}`, production).href, 'Untranslated content must canonicalize to Spanish');
  }
  const html = await read(`/${locale}/eliminar-cuenta`);
  for (const name of ['robots', 'googlebot']) {
    assert.ok([...html.matchAll(/<meta\b[^>]*>/g)].map((match) => attributes(match[0])).some((tag) => tag.name === name && /noindex/.test(tag.content)), `${locale} account deletion: ${name} noindex`);
  }
  if (base.origin !== production.origin) {
    const missing = await fetch(new URL(`/${locale}/trabajos/no-existe`, base));
    assert.equal(missing.status, 404, 'Unknown service must return 404');
  }
}
const home = await read('/es');
assert.ok(home.includes('href="/es/trabajo-santa-cruz"'), 'Crawlable job information link in initial HTML');
assert.ok(home.includes('href="/es/unete"'), 'Crawlable worker registration link');
assert.ok(home.includes('href="/es/trabajos"'), 'Crawlable service directory link');
assert.ok(!/<video[^>]+src=/.test(home), 'Decorative video must not start downloading from initial HTML');
assert.ok(!/<div[^>]+class="flex flex-col min-h-screen"[^>]+style="[^"]*opacity:0/.test(home), 'Page wrapper must be visible without hydration');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SEO OK: ${urls.length} canonical sitemap pages; robots, titles, descriptions, H1, languages, JSON-LD, account noindex, links and video loading checked.`);
}
