// ==========================================================
// SITEMAP: a list of every page, so search engines can find them all.
// It builds itself: new pages in src/pages (and new case studies) are added automatically.
// ==========================================================
import { site } from '../data/site';
import { caseStudies } from '../data/projects';

export function GET() {
  // every .astro page except the 404 page and dynamic [slug] pages
  const files = Object.keys(import.meta.glob('./**/*.astro'));
  const paths = files
    .filter((f) => !f.includes('[') && !f.endsWith('404.astro'))
    .map((f) => f.replace(/^\./, '').replace(/\.astro$/, '').replace(/\/index$/, '') || '/');
  // plus one page per case study
  for (const cs of caseStudies) paths.push(`/projects/${cs.slug}`);

  const urls = [...new Set(paths)].sort()
    .map((p) => `  <url><loc>${new URL(p === '/' ? p : `${p}/`, site.url).href}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
