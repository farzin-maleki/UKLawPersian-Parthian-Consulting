import { copy, services } from "../../content/data.js";
import { escapeHTML, icon } from "../../modules/ui.js";
import { pathFor, t } from "../../modules/language.js";
import { CTA } from "../../modules/sections.js";
import { FAQ } from "../../components/FAQ.js";
import { ServiceCard } from "../../components/ServiceCard.js";
import { BookingButton } from "../../components/BookingButton.js";
export function render(lang, service) {
  const c = copy[lang];
  const topicItems = t(service.topics, lang)
    .map(
      (topic) => /* HTML */ `
        <li>
          ${icon("check2")}
          <span>${escapeHTML(topic)}</span>
        </li>
      `,
    )
    .join("");
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3)
    .map(
      (s, i) => /* HTML */ `
        <div class="col-md-4">${ServiceCard(s, lang, i)}</div>
      `,
    )
    .join("");

  return /* HTML */ `
    <section class="page-intro">
      <div class="container">
        <a class="text-link breadcrumb-link" href="${pathFor("services", lang)}">
          ${icon("arrow-left", "directional")}${escapeHTML(c.backServices)}
        </a>
        <span class="large-service-icon">${icon(service.icon)}</span>
        <h1>${escapeHTML(t(service.title, lang))}</h1>
        <p class="lead">${escapeHTML(t(service.intro, lang))}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8">
            <h2>${escapeHTML(c.typicalTopics)}</h2>
            <ul class="topic-list">
              ${topicItems}
            </ul>
            <h2 class="mt-5">${escapeHTML(c.serviceProcess)}</h2>
            <ol class="process-list">
              ${t(service.process, lang)
                .map(
                  (step) => /* HTML */ `
                    <li>${escapeHTML(step)}</li>
                  `,
                )
                .join("")}
            </ol>
            <h2 class="mt-5">${escapeHTML(c.serviceFAQs)}</h2>
            ${FAQ(service.faqs, lang)}
          </div>
          <aside class="col-lg-4">
            <div class="scope-panel">
              <span class="icon-box">${icon("info-circle")}</span>
              <h2>${escapeHTML(c.scope)}</h2>
              <p>${escapeHTML(t(service.scope, lang))}</p>
              ${BookingButton(lang)}
              <a class="text-link" href="${pathFor("contact", lang)}">
                ${escapeHTML(c.ctaSecondary)}${icon("arrow-right", "directional")}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section class="section soft-section">
      <div class="container">
        <h2>${escapeHTML(c.relatedServices)}</h2>
        <div class="row g-4 mt-3">${relatedServices}</div>
      </div>
    </section>
    ${CTA(lang)}
  `;
}
