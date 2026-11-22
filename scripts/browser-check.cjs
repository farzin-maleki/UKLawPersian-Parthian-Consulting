// Optional browser QA. Set PLAYWRIGHT_MODULE and BROWSER_EXECUTABLE to use existing tools.
const assert = require('node:assert/strict');
const { mkdir } = require('node:fs/promises');
const { join } = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const origin = process.env.CHECK_ORIGIN || 'http://127.0.0.1:4173';

const suffixes = [
  '', 'about/', 'services/', 'insights/', 'book/', 'contact/', 'from-instagram/',
  ...['immigration', 'housing', 'employment', 'civil-disputes', 'business', 'property', 'document-assistance']
    .map(slug => `services/${slug}/`),
  ...['prepare-for-a-housing-conversation', 'organise-your-workplace-records', 'prepare-a-useful-business-brief']
    .map(slug => `insights/${slug}/`),
  ...['privacy', 'cookies', 'terms', 'refunds', 'complaints'].map(slug => `legal/${slug}/`),
];

async function main() {
  const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE, headless: true });
  const page = await browser.newPage();
  const pageErrors = [];
  const externalRequests = [];
  const failedAssets = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', entry => {
    if (entry.type() === 'error' && !/404 \(Not Found\)/.test(entry.text())) pageErrors.push(entry.text());
  });
  page.on('request', request => {
    if (!request.url().startsWith(`${origin}/`)) externalRequests.push(request.url());
  });
  page.on('response', response => {
    if (response.status() >= 400 && response.request().resourceType() !== 'document') failedAssets.push(response.url());
  });

  async function visit(path, expectedStatus = 200) {
    const response = await page.goto(`${origin}${path}`);
    assert.equal(response.status(), expectedStatus, path);
    await page.locator('html[data-ready=true]').waitFor();
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('main h1').count(), 1, path);
  }

  try {
    if (process.env.PREVIEW_SHOTS) {
      await mkdir(process.env.PREVIEW_SHOTS, { recursive: true });
      await page.setViewportSize({ width: 1440, height: 900 });
      await visit('/en/');
      await page.screenshot({ path: join(process.env.PREVIEW_SHOTS, 'homepage-en.png') });
      await page.setViewportSize({ width: 390, height: 900 });
      await visit('/fa/');
      await page.screenshot({ path: join(process.env.PREVIEW_SHOTS, 'homepage-fa-mobile.png') });
    }
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 880 });
      for (const lang of ['en', 'fa']) {
        for (const suffix of suffixes) {
          const path = `/${lang}/${suffix}`;
          await visit(path);
          const layout = await page.evaluate(() => ({
            lang: document.documentElement.lang,
            dir: document.documentElement.dir,
            bodyWidth: document.documentElement.scrollWidth,
            canonical: new URL(document.querySelector('link[rel=canonical]').href).pathname,
            alternatives: [...document.querySelectorAll('link[hreflang]')].map(link => link.hreflang),
            bootstrap: [...document.styleSheets].some(sheet => sheet.href?.endsWith(`/bootstrap${document.documentElement.lang === 'fa' ? '.rtl' : ''}.min.css`) && sheet.cssRules.length > 0),
          }));
          assert.equal(layout.lang, lang, path);
          assert.equal(layout.dir, lang === 'fa' ? 'rtl' : 'ltr', path);
          assert.equal(layout.canonical, path, path);
          assert.deepEqual(layout.alternatives, ['en', 'fa', 'x-default'], path);
          assert.ok(layout.bootstrap, `${path} Bootstrap stylesheet did not load`);
          assert.ok(layout.bodyWidth <= width, `${path} overflows at ${width}px (${layout.bodyWidth}px)`);
        }
      }
    }

    await visit('/en/services/housing/');
    const toggle = page.locator('.mobile-menu-toggle');
    await toggle.focus();
    await page.keyboard.press('Enter');
    assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
    assert.equal(await page.locator('#mobile-menu').evaluate(el => el.matches(':modal')), true);
    await page.keyboard.press('Escape');
    assert.equal(await toggle.evaluate(el => el === document.activeElement), true);
    await page.locator('.site-header [data-language=fa]').click();
    assert.equal(new URL(page.url()).pathname, '/fa/services/housing/');
    await page.goBack();
    assert.equal(new URL(page.url()).pathname, '/en/services/housing/');
    await page.goto(`${origin}/`);
    await page.waitForURL(`${origin}/fa/`);

    await visit('/en/book/');
    await page.locator('[data-booking-type=written]').click();
    assert.match(await page.locator('#booking-detail').innerText(), /do not attend a meeting/i);
    assert.equal(await page.locator('[data-booking-type=written]').getAttribute('aria-pressed'), 'true');
    const bookWritten = page.locator('#booking-confirmation button[type=submit]');
    await bookWritten.click();
    assert.equal(await page.locator('#written-guide').isVisible(), false);
    await page.locator('#booking-terms').check();
    await bookWritten.click();
    await page.locator('#guide-email img').waitFor();
    await page.locator('button[aria-controls=guide-whatsapp]').click();
    await page.locator('#guide-whatsapp img').waitFor();
    await page.locator('#written-guide [data-cancel]').click();
    await page.locator('.site-header [data-language=fa]').click();
    assert.equal(new URL(page.url()).searchParams.get('type'), 'written');
    await page.locator('[data-booking-type=written][aria-pressed=true]').waitFor();

    await visit('/en/contact/');
    const submit = page.locator('#contact-form button[type=submit]');
    await submit.click();
    assert.equal(await page.locator('#contact-name').getAttribute('aria-invalid'), 'true');
    assert.equal(await page.locator('#contact-name').evaluate(el => el === document.activeElement), true);
    await page.locator('#contact-name').fill('Preview Visitor');
    await page.locator('#contact-email').fill('preview@example.test');
    await page.locator('#contact-category').selectOption('general');
    await page.locator('#contact-message').fill('This is a synthetic preview enquiry.');
    await page.locator('#contact-privacy').check();
    await submit.click();
    assert.match(await page.locator('[data-form-status]').innerText(), /has not been sent/i);
    assert.equal(await page.locator('#contact-message').inputValue(), 'This is a synthetic preview enquiry.');

    const cookieButton = page.locator('[data-cookie-settings]');
    assert.equal(await page.locator('#cookie-banner').isVisible(), false);
    await cookieButton.click();
    assert.match(await page.locator('#cookie-banner').innerText(), /no analytics or marketing trackers/i);
    await page.locator('[data-cookie-close]').click();
    assert.equal(await page.locator('#cookie-banner').isVisible(), false);
    assert.equal(await cookieButton.evaluate(el => el === document.activeElement), true);

    await visit('/en/insights/');
    await page.locator('#insight-search').fill('unmatchable-search-term');
    assert.equal(await page.locator('#article-empty').isVisible(), true);
    await page.locator('#insight-search').clear();
    await page.locator('#insight-category').selectOption('housing');
    assert.equal(await page.locator('[data-article]:visible').count(), 1);

    await visit('/fa/legal/missing-policy/', 404);
    assert.equal(await page.locator('.not-found').isVisible(), true);
    await visit('/en/#%');
    assert.equal(await page.locator('.hero').isVisible(), true);
    assert.deepEqual(failedAssets, []);
    assert.deepEqual(externalRequests, []);
    assert.deepEqual([...new Set(pageErrors)], []);
    console.log(`Browser checks passed for ${suffixes.length * 2} routes at 1440, 390 and 320 px, plus language, navigation, booking, contact, cookie preferences, search and 404 flows.`);
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
