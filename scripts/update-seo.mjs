import { readFile, writeFile } from 'node:fs/promises';
import { config } from '../src/config.js';
import { articles, legal, services } from '../src/content/data.js';

const workspace = new URL('../', import.meta.url);
const locales = ['en', 'fa'];
const sitemapOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';
const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
const regularPages = [
  ['index.html', ''], ['pages/about.html', 'about/'], ['pages/services.html', 'services/'],
  ['pages/insights.html', 'insights/'], ['pages/booking.html', 'book/'],
  ['pages/contact.html', 'contact/'], ['pages/from-instagram.html', 'from-instagram/'],
];
const templateRules = [
  ...regularPages.map(([file]) => [file, true]),
  ['pages/service.html', true],
  ['pages/article.html', articles.every(article => !article.draft)],
  ['pages/legal.html', legal.every(policy => !policy.draft)],
];
const noIndex = '  <meta name="robots" content="noindex, nofollow">\n';

function approvedOrigin() {
  if (!config.launchApproved) return '';
  const url = new URL(config.siteUrl);
  if (url.protocol !== 'https:' || url.href !== `${url.origin}/` || url.username || url.password) {
    throw new Error('Set config.siteUrl to the approved HTTPS origin only, without a path, query or fragment.');
  }
  return url.origin;
}

const origin = approvedOrigin();
const dataRoutes = [
  ...regularPages.map(([, path]) => path),
  ...services.map(service => `services/${service.id}/`),
  ...(articles.every(article => !article.draft) ? articles.map(article => `insights/${article.slug}/`) : []),
  ...(legal.every(policy => !policy.draft) ? legal.map(policy => `legal/${policy.id}/`) : []),
];

function entry(path, lang) {
  const url = code => `${origin}/${code}/${path}`;
  const alternates = [...locales, 'x-default'].map(code =>
    `    <xhtml:link rel="alternate" hreflang="${code}" href="${url(code === 'x-default' ? 'en' : code)}"/>`,
  );
  return ['  <url>', `    <loc>${url(lang)}</loc>`, ...alternates, '  </url>'].join('\n');
}

const sitemap = origin
  ? [xmlDeclaration, sitemapOpen, ...dataRoutes.flatMap(path => locales.map(lang => entry(path, lang))), '</urlset>', ''].join('\n')
  : `${xmlDeclaration}\n<!-- Preview sitemap. Generate the public URLs after approving the site and specifying its origin. -->\n${sitemapOpen.slice(0, -1)}/>\n`;
const robots = origin
  ? `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`
  : '# Preview configuration. Set the approved domain and generate launch files before indexing.\nUser-agent: *\nDisallow: /\n';

for (const [file, fullyApproved] of templateRules) {
  const location = new URL(file, workspace);
  const source = (await readFile(location, 'utf8')).replace(/\r\n/g, '\n');
  const withoutDirective = source.replace(/^\s*<meta name="robots" content="noindex, nofollow">\n/m, '');
  const updated = origin && fullyApproved ? withoutDirective : withoutDirective.replace('  <title>', `${noIndex}  <title>`);
  if (source !== updated) await writeFile(location, updated);
}

await writeFile(new URL('robots.txt', workspace), robots);
await writeFile(new URL('sitemap.xml', workspace), sitemap);
console.log(origin ? `Generated public SEO files for ${origin}.` : 'Generated preview SEO files.');
