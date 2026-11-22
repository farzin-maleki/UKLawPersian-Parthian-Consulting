import { copy, services, articles } from "../../content/data.js";
import { config } from "../../config.js";
import { escapeHTML, icon } from "../../modules/ui.js";
import { t, pathFor } from "../../modules/language.js";
import { lines, PricingCards } from "../../modules/sections.js";
export function render(lang) {
  const c = copy[lang];
  const whatsapp = /^\d{8,15}$/.test(config.contact.whatsapp)
    ? `https://wa.me/${config.contact.whatsapp}`
    : "";
  const whatsappContact = whatsapp
    ? /* HTML */ `
        <a
          class="button button-secondary button-lines"
          href="${whatsapp}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${icon("whatsapp")}${lang === "fa"
            ? "گفت‌وگو در واتس‌اپ"
            : "Contact on WhatsApp"}
        </a>
      `
    : /* HTML */ ` <p class="muted">${escapeHTML(c.whatsappUnavailable)}</p> `;
  const serviceLinks = services
    .map(
      (s) => /* HTML */ `
        <a href="${pathFor(`services/${s.id}`, lang)}">
          ${icon(s.icon)}${escapeHTML(t(s.shortTitle || s.title, lang))}
        </a>
      `,
    )
    .join("");
  const guideLinks = articles
    .map(
      (a) => /* HTML */ `
        <a class="guide-link" href="${pathFor(`insights/${a.slug}`, lang)}">
          <span>${escapeHTML(t(a.title, lang))}</span>
          ${icon("arrow-right", "directional")}
        </a>
      `,
    )
    .join("");

  return /* HTML */ `
    <section class="instagram-page">
      <div class="container">
        <div class="instagram-intro">
          <span class="instagram-mark">${icon("instagram")}</span>
          <p class="eyebrow">${escapeHTML(c.instagramEyebrow)}</p>
          <h1>${lines(c.instagramTitle)}</h1>
          <p class="lead">${escapeHTML(c.instagramIntro)}</p>
        </div>
        ${PricingCards(lang)}
        <div class="instagram-contact">
          ${whatsappContact}
          <a class="text-link" href="${pathFor("contact", lang)}">
            ${escapeHTML(c.contactLabel)}${icon("arrow-right", "directional")}
          </a>
        </div>
        <div class="instagram-services">
          <h2>${escapeHTML(c.instagramScope)}</h2>
          <div class="service-chips">${serviceLinks}</div>
        </div>
        <div class="instagram-guides">
          <h2>${escapeHTML(c.usefulGuides)}</h2>
          ${guideLinks}
        </div>
      </div>
    </section>
  `;
}
