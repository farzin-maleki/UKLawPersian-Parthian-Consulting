import { copy, services } from "../../content/data.js";
import { escapeHTML, icon } from "../../modules/ui.js";
import { pageIntro, CTA } from "../../modules/sections.js";
import { ServiceCard } from "../../components/ServiceCard.js";
export function render(lang) {
  const c = copy[lang];
  return /* HTML */ `
    ${pageIntro(c.servicesEyebrow, c.servicesTitle, c.servicesIntro)}
    <section class="section">
      <div class="container">
        <div class="row g-4">
          ${services
            .map(
              (s, i) => /* HTML */ `
                <div class="col-md-6 col-lg-4">${ServiceCard(s, lang, i)}</div>
              `,
            )
            .join("")}
        </div>
        <div class="notice mt-5">
          ${icon("info-circle")}
          <p>${escapeHTML(c.professionalText)}</p>
        </div>
      </div>
    </section>
    ${CTA(lang)}
  `;
}
