import { copy, consultationOptions } from "../content/data.js";
import { escapeHTML, icon } from "./ui.js";
import { t, pathFor } from "./language.js";
import { BookingButton } from "../components/BookingButton.js";
export const lines = (value) => escapeHTML(value).replace(/\n/g, "<br>");
export function pageIntro(eyebrow, title, description) {
  return /* HTML */ `
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">${escapeHTML(eyebrow)}</p>
        <h1>${lines(title)}</h1>
        <p class="lead">${escapeHTML(description)}</p>
      </div>
    </section>
  `;
}
export function CTA(lang) {
  const c = copy[lang];
  return /* HTML */ `
    <section class="cta-section">
      <div class="container">
        <div class="cta-panel">
          <div>
            <p class="eyebrow">${escapeHTML(c.ctaEyebrow)}</p>
            <h2>${lines(c.ctaTitle)}</h2>
            <p>${escapeHTML(c.ctaText)}</p>
          </div>
          <div class="cta-actions">
            ${BookingButton(lang, { variant: "light" })}
            <a href="${pathFor("contact", lang)}">
              ${escapeHTML(c.ctaSecondary)}${icon("arrow-right", "directional")}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
export function PricingCards(lang) {
  const c = copy[lang];
  const cards = consultationOptions
    .map(
      (option, index) => /* HTML */ `
        <div class="col-md-6">
          <article class="price-card ${index === 0 ? "price-card-featured" : ""}">
            <div class="price-card-top">
              <span class="icon-box">
                ${icon(option.icon || (index === 0 ? "camera-video" : "file-earmark-text"))}
              </span>
              <span class="small">${escapeHTML(t(option.duration, lang))}</span>
            </div>
            <h3>${escapeHTML(t(option.title, lang))}</h3>
            <div class="price" dir="ltr"><span>£</span>${option.price}</div>
            <p>${escapeHTML(t(option.summary, lang))}</p>
            <ul class="check-list">
              ${t(option.features, lang)
                .map(
                  (feature) => /* HTML */ `
                    <li>${icon("check2")}${escapeHTML(feature)}</li>
                  `,
                )
                .join("")}
            </ul>
            ${BookingButton(lang, {
              type: option.id,
              variant: index === 0 ? "light" : "secondary",
            })}
          </article>
        </div>
      `,
    )
    .join("");

  return /* HTML */ `
    <div class="row g-4">${cards}</div>
    <p class="pricing-footnote">${icon("info-circle")}${escapeHTML(c.noHidden)}</p>
  `;
}
