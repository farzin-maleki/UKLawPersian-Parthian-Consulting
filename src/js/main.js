import { copy, services, articles, legal, brand } from "../content/data.js";
import { config } from "../config.js";
import { getLanguage, t, pathFor } from "../modules/language.js";
import { escapeHTML, icon, safeExternalURL } from "../modules/ui.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { CookieBanner, initCookieBanner } from "../components/CookieBanner.js";
import { initNavigation } from "./navigation.js";
import { initAnalytics } from "./analytics.js";

const lang = getLanguage();
const c = copy[lang];
const route = location.pathname.split("/").filter(Boolean).slice(1);
let type = "404";
let item;
if (document.body.dataset.page !== "404" && /^(en|fa)$/.test(location.pathname.split("/")[1])) {
  if (!route.length) type = "home";
  else if (
    route.length === 1 &&
    ["about", "services", "insights", "book", "contact", "from-instagram"].includes(route[0])
  )
    type = route[0];
  else if (route.length === 2) {
    if (route[0] === "services") {
      item = services.find((s) => s.id === route[1]);
      if (item) type = "service";
    }
    if (route[0] === "insights") {
      item = articles.find((a) => a.slug === route[1]);
      if (item) type = "article";
    }
    if (route[0] === "legal") {
      item = legal.find((p) => p.id === route[1]);
      if (item) type = "legal";
    }
  }
}

function metadata() {
  const titles = {
    home:
      lang === "fa"
        ? "مشاوره و آموزش حقوقی به فارسی و انگلیسی"
        : "Clear guidance. A confident next step.",
    about: c.about,
    services: c.services,
    insights: c.insights,
    book: c.book,
    contact: c.contact,
    "from-instagram": "UKLawPersian · Instagram",
    404: c.missingTitle,
  };
  const title = item ? t(item.title, lang) : titles[type];
  const description = item
    ? t(item.summary || item.excerpt, lang) || c.policyNotice
    : type === "home"
      ? c.heroIntro
      : type === "services"
        ? c.servicesIntro
        : type === "about"
          ? c.aboutPageIntro
          : type === "insights"
            ? c.insightIntro
            : c.footerAbout;
  document.title = `${title} | UKLawPersian`;
  const meta = (name, content, property = false) => {
    let el = document.querySelector(`meta[${property ? "property" : "name"}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(property ? "property" : "name", name);
      document.head.append(el);
    }
    el.content = content;
  };
  meta("description", description);
  meta(
    "robots",
    config.launchApproved && !item?.draft && type !== "404" ? "index, follow" : "noindex, nofollow",
  );
  meta("og:title", document.title, true);
  meta("og:description", description, true);
  meta("og:type", type === "article" ? "article" : "website", true);
  meta("og:locale", lang === "fa" ? "fa_IR" : "en_GB", true);
  meta("og:site_name", "UKLawPersian", true);
  const base = (safeExternalURL(config.siteUrl) || location.origin).replace(/\/$/, "");
  const currentPath = pathFor(route.join("/"), lang);
  const link = (rel, href, hreflang = "") => {
    const el = document.createElement("link");
    el.rel = rel;
    el.href = href;
    if (hreflang) el.hreflang = hreflang;
    el.dataset.seo = "";
    document.head.append(el);
  };
  document.querySelectorAll("[data-seo]").forEach((el) => el.remove());
  if (type !== "404") {
    link("canonical", base + currentPath);
    for (const code of ["en", "fa"]) link("alternate", base + pathFor(route.join("/"), code), code);
    link("alternate", base + pathFor(route.join("/"), "en"), "x-default");
    meta("og:url", base + currentPath, true);
  }
  meta("og:image", base + (item?.image || "/src/assets/images/hero/london.webp"), true);
  meta("og:image:alt", item?.imageAlt ? t(item.imageAlt, lang) : c.heroPhoto, true);
  meta("twitter:card", "summary_large_image");
  if (config.launchApproved && safeExternalURL(config.siteUrl) && type === "home") {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: brand.tradingName,
      legalName: brand.company,
      url: base,
      alternateName: brand.name,
    });
    document.head.append(script);
  }
}

async function start() {
  let html = "";
  let initialize;
  if (type === "404")
    html = /* HTML */ `
      <section class="not-found container">
        ${icon("signpost-split")}
        <p class="eyebrow">404</p>
        <h1>${escapeHTML(c.missingTitle)}</h1>
        <p class="lead">${escapeHTML(c.missingText)}</p>
        <div>
          <a class="button button-primary" href="${pathFor("", lang)}">
            ${escapeHTML(c.backHome)}${icon("arrow-right", "directional")}
          </a>
        </div>
      </section>
    `;
  else if (type === "book") {
    const module = await import("./booking.js");
    html = module.renderBooking(lang);
    initialize = module.initBooking;
  } else if (type === "contact") {
    const module = await import("./contact.js");
    html = module.renderContact(lang);
    initialize = module.initContact;
  } else {
    const module = await import(`./pages/${type}.js`);
    html = module.render(lang, item);
    initialize = module.init;
  }
  document.querySelector("#site-header").innerHTML = Header(lang, type === "from-instagram");
  document.querySelector("#main-content").innerHTML = html;
  document.querySelector("#site-footer").innerHTML = Footer(lang);
  document.querySelector("#cookie-root").innerHTML = CookieBanner(lang);
  const skipLink = document.querySelector(".skip-link");
  skipLink.textContent = c.skip;
  skipLink.hidden = false;
  metadata();
  initNavigation();
  initCookieBanner();
  initAnalytics();
  initialize?.(lang);
  if (location.hash) {
    let fragment = location.hash.slice(1);
    try {
      fragment = decodeURIComponent(fragment);
    } catch {
      // Leave malformed escapes untouched.
    }
    document.getElementById(fragment)?.scrollIntoView({ behavior: "instant" });
  }
  document.documentElement.dataset.ready = "true";
}
start()
  .catch((error) => {
    console.error("Page initialization failed:", error);
    document.querySelector("#main-content").innerHTML = /* HTML */ `
      <section class="container section">
        <h1>${lang === "fa" ? "صفحه بارگذاری نشد" : "The page could not be loaded"}</h1>
        <p>
          ${lang === "fa"
            ? "لطفاً صفحه را دوباره بارگذاری کنید."
            : "Please refresh the page and try again."}
        </p>
        <a class="button button-secondary" href="${pathFor("", lang)}">${escapeHTML(c.home)}</a>
      </section>
    `;
  })
  .finally(() => {
    document.querySelector("#main-content").removeAttribute("aria-busy");
    delete document.documentElement.dataset.pageLoading;
    document.dispatchEvent(new Event("uklp:page-ready"));
  });
