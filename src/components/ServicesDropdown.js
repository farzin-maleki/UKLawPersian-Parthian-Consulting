import { copy, services } from "../content/data.js";
import { pathFor, t } from "../modules/language.js";
import { escapeHTML, icon } from "../modules/ui.js";

export function ServicesDropdown(lang, placement) {
  const panelId = `${placement}-service-links`;
  const overview = pathFor("services", lang);
  const current = location.pathname.replace(/\/?$/, "/");
  const currentSection = current === overview ? "page" : current.startsWith(overview) ? "location" : "";
  const links = services.map((service) => {
    const href = pathFor(`services/${service.id}`, lang);
    return /* HTML */ `
      <li>
        <a href="${href}" ${current === href ? 'aria-current="page"' : ""}>
          ${icon(service.icon)}
          ${escapeHTML(t(service.shortTitle || service.title, lang))}
        </a>
      </li>
    `;
  }).join("");

  return /* HTML */ `
    <div class="services-dropdown">
      <div class="services-dropdown-row">
        <a href="${overview}" ${currentSection ? `aria-current="${currentSection}"` : ""}>
          ${escapeHTML(copy[lang].services)}
        </a>
        <button class="services-toggle" type="button" aria-controls="${panelId}"
          aria-expanded="false" aria-label="${lang === "fa" ? "فهرست خدمات" : "Services submenu"}">
        </button>
      </div>
      <ul id="${panelId}" class="service-links" hidden>${links}</ul>
    </div>
  `;
}
