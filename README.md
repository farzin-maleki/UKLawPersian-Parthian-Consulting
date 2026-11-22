# UKLawPersian

A bilingual website for UKLawPersian and Parthian Consulting, the trading name of Parthian Peak Group Ltd. It uses static HTML templates, Bootstrap 5 grids, Bootstrap SVG icons, custom CSS and vanilla JavaScript modules. Fonts and imagery are self-hosted. Production uses Vercel’s static hosting with no Node build, framework or server functions.

## Local preview

From the repository, run `node scripts/serve.mjs` with Node.js 22 or later and open [the English preview](http://127.0.0.1:4173/en/) or [the Persian preview](http://127.0.0.1:4173/fa/). The development server reads the routing rules from `vercel.json`. Set `PORT` if 4173 is occupied. The root remembers the language selected in the switcher and otherwise opens in English.

If a page shows `Cannot GET /en/about/`, check the port in the browser. VS Code Live Server and other plain file servers do not apply the route that maps `/en/about/` to `pages/about.html`. If you launched Live Server, click **Stop Live Server** in VS Code, then use the preview command and URL above. Press **Ctrl+C** in the preview terminal when you want to stop it.

Optional browser checks use Playwright and an existing Chromium-based browser. With the preview running, set `PLAYWRIGHT_MODULE` to an installed Playwright module if it is outside the workspace, set `BROWSER_EXECUTABLE` if using a system browser, and run `node scripts/browser-check.cjs`. The test uses synthetic form inputs and expects launch integrations to be off. Browser automation is a development tool only.

## Edit and launch

- Edit service definitions, guides, FAQs, policy drafts and consultation options in `src/content/data.js`. Shared site copy lives in `src/content/interface.js`. The booking and contact modules have their own bilingual interface messages.
- Approve both policy translations, editorial guides, service scope, company registration details, contact details and consultant profile before launch. Update the corresponding copy in `src/content/interface.js` and `src/content/data.js`. Qualifications, authorisations, audience figures, testimonials and the consultant photo are held pending verification and approval.
- Configure booking and enquiry providers using [the integration guide](INTEGRATIONS.md). Public settings live in `src/config.js`. Private credentials stay in the business accounts. Cal.com opens as a separate tab. No third-party script loads on the site during browsing.
- Set `config.siteUrl` to the approved HTTPS origin and `launchApproved` after review. Run `node scripts/update-seo.mjs` and include the resulting `robots.txt`, `sitemap.xml` and HTML edits in the release. Preview defaults block indexing. Shared article and policy templates retain a static `noindex` directive until every item using that template is approved.
- In the business-owned Vercel project, import the repository root with the **Other** framework preset and the checked-in `vercel.json`. It maps the clean trailing-slash URLs to the HTML templates, restricts public files to the site’s assets, and serves a 404 with its proper status for unknown paths. Check the routes and response headers in a Vercel preview before promoting it. This repository includes hosting configuration but has no live deployment or connected domain.

The Instagram landing page is at `/en/from-instagram/` and `/fa/from-instagram/`. The former `/en/instagram/` and `/fa/instagram/` links redirect to the new URLs.

When adding a service, guide or policy, add the approved slug to `vercel.json`. The preview server automatically uses updated route rules after restart. Update the optional browser route list and re-run the SEO helper after publishing changes.

The page modules set bilingual titles, descriptions, canonicals, `hreflang` and Open Graph metadata. Language-specific content and detail metadata render in JavaScript, which some crawlers and social previews do not execute. For more reliable multilingual indexing and link previews, a future release can pre-render one HTML document per route using the same modules at publish time, without adopting a framework. Owner-managed article and page publishing is deferred to a separately approved CMS scope.

See [asset credits and licence information](src/assets/ASSETS.md) and [bilingual document-request email templates](docs/document-email-templates.md).
