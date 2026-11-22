import { copy } from "../../content/data.js";
import { basePath } from "../../modules/paths.js";
import { escapeHTML, icon } from "../../modules/ui.js";
import { pageIntro, CTA } from "../../modules/sections.js";
export function render(lang) {
  const c = copy[lang];
  const valueCards = c.values
    .map(
      ([title, body], i) => /* HTML */ `
        <div class="col-md-4">
          <div class="value-card">
            <span class="icon-box">${icon(["chat-square-text", "people", "compass"][i])}</span>
            <h3>${escapeHTML(title)}</h3>
            <p>${escapeHTML(body)}</p>
          </div>
        </div>
      `,
    )
    .join("");

  return /* HTML */ `
    ${pageIntro(c.aboutPageEyebrow, c.aboutPageTitle, c.aboutPageIntro)}
    <section class="section">
      <div class="container">
        <div class="row g-5 align-items-start">
          <div class="col-lg-5">
            <img
              class="about-plaza-photo"
              src="${basePath}/src/assets/images/backgrounds/london-plaza.webp"
              alt="${lang === "fa" ? "عابران پیاده در میدانی میان ساختمان‌های آجری و شیشه‌ای لندن" : "Pedestrians crossing a London plaza framed by brick and glass buildings"}"
              width="840"
              height="900"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6 offset-lg-1">
            <p class="eyebrow">PARTHIAN CONSULTING</p>
            <h2>${escapeHTML(c.aboutCompanyTitle)}</h2>
            <p class="body-large">${escapeHTML(c.aboutCompanyText)}</p>
            <h3 class="mt-5">${escapeHTML(c.backgroundTitle)}</h3>
            <p>${escapeHTML(c.backgroundText)}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section soft-section">
      <div class="container">
        <h2>${escapeHTML(c.valuesTitle)}</h2>
        <div class="row g-4 mt-3">${valueCards}</div>
      </div>
    </section>
    <section class="section">
      <div class="container narrow">
        <h2>${escapeHTML(c.professionalTitle)}</h2>
        <p class="body-large">${escapeHTML(c.professionalText)}</p>
        <div class="notice">
          ${icon("info-circle")}
          <p>${escapeHTML(c.companyPending)}</p>
        </div>
      </div>
    </section>
    ${CTA(lang)}
  `;
}
