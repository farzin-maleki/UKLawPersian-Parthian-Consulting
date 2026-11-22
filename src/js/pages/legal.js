import { copy } from "../../content/data.js";
import { escapeHTML, icon, dateLabel } from "../../modules/ui.js";
import { t, pathFor } from "../../modules/language.js";
export function render(lang, policy) {
  const c = copy[lang];
  const sectionLinks = policy.sections
    .map(
      (section) => /* HTML */ `
        <a href="#${escapeHTML(section.id)}">${escapeHTML(t(section.heading, lang))}</a>
      `,
    )
    .join("");
  const draftNotice = policy.draft
    ? /* HTML */ `
        <div class="notice">
          <span>${icon("info-circle")}</span>
          <div>
            <strong>${escapeHTML(c.policyDraft)}</strong>
            <p>${escapeHTML(c.policyNotice)}</p>
          </div>
        </div>
      `
    : "";
  const policySections = policy.sections
    .map(
      (section) => /* HTML */ `
        <section class="prose-section" id="${escapeHTML(section.id)}">
          <h2>${escapeHTML(t(section.heading, lang))}</h2>
          ${t(section.paragraphs, lang)
            .map(
              (p) => /* HTML */ `
                <p>${escapeHTML(p)}</p>
              `,
            )
            .join("")}
        </section>
      `,
    )
    .join("");

  return /* HTML */ `
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">${escapeHTML(c.footerLegal)}</p>
        <h1>${escapeHTML(t(policy.title, lang))}</h1>
        <p class="muted">
          ${escapeHTML(c.updated)}
          <time datetime="${policy.updated}">${escapeHTML(dateLabel(policy.updated, lang))}</time>
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row g-5">
          <aside class="col-lg-3">
            <nav class="policy-toc" aria-label="${escapeHTML(c.policyContents)}">
              <h2>${escapeHTML(c.policyContents)}</h2>
              ${sectionLinks}
            </nav>
          </aside>
          <div class="col-lg-8 offset-lg-1 policy-prose">
            ${draftNotice}${policySections}
            <div class="policy-contact">
              <p>${escapeHTML(c.policyContact)}</p>
              <a class="text-link" href="${pathFor("contact", lang)}">
                ${escapeHTML(c.contact)}${icon("arrow-right", "directional")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
