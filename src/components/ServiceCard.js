import { t, pathFor } from "../modules/language.js";
import { basePath } from "../modules/paths.js";
import { escapeHTML, icon } from "../modules/ui.js";
export function ServiceCard(service, lang) {
  return /* HTML */ `
    <a class="service-card" href="${pathFor(`services/${service.id}`, lang)}">
      <div class="service-card-top">
        <img
          class="service-card-photo"
          src="${basePath}/src/assets/images/${service.photo}"
          width="640"
          height="360"
          loading="lazy"
          alt=""
        />
        <span class="service-icon">${icon(service.icon)}</span>
      </div>
      <h3>${escapeHTML(t(service.shortTitle || service.title, lang))}</h3>
      <p>${escapeHTML(t(service.summary, lang))}</p>
    </a>
  `;
}
