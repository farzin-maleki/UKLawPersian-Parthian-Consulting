import { navigation, copy } from "../content/data.js";
import { pathFor, t } from "../modules/language.js";
import { escapeHTML } from "../modules/ui.js";
import { ServicesDropdown } from "./ServicesDropdown.js";
export function Navbar(lang) {
  const pathname = location.pathname.replace(/\/$/, "");
  const navigationLinks = navigation
    .map((item) => {
      if (item.path === "services/") return ServicesDropdown(lang, "desktop");
      const href = pathFor(item.path, lang);
      const active = item.path
        ? pathname.startsWith(href.replace(/\/$/, ""))
        : pathname === pathFor("", lang).replace(/\/$/, "");
      return /* HTML */ `
        <a href="${href}" ${active ? ' aria-current="page"' : ""}>
          ${escapeHTML(t(item.label, lang))}
        </a>
      `;
    })
    .join("");

  return /* HTML */ `
    <nav class="desktop-nav" aria-label="${escapeHTML(copy[lang].navigation)}">
      ${navigationLinks}
    </nav>
  `;
}
