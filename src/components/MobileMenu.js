import { navigation, copy } from "../content/data.js";
import { pathFor, t } from "../modules/language.js";
import { escapeHTML, icon } from "../modules/ui.js";
import { LanguageSwitcher } from "./LanguageSwitcher.js";
import { BookingButton } from "./BookingButton.js";
import { Brand } from "./Brand.js";
import { ServicesDropdown } from "./ServicesDropdown.js";
export function MobileMenu(lang) {
  const c = copy[lang];
  const menuLinks = navigation
    .map((item) => {
      if (item.path === "services/") return ServicesDropdown(lang, "mobile");
      return /* HTML */ `
        <a href="${pathFor(item.path, lang)}">
          ${escapeHTML(t(item.label, lang))}
        </a>
      `;
    })
    .join("");

  return /* HTML */ `
    <dialog
      id="mobile-menu"
      class="mobile-menu"
      aria-label="${escapeHTML(c.navigation)}"
    >
      <div class="mobile-menu-top" tabindex="-1" autofocus>
        ${Brand(lang)}
        <button
          class="icon-button"
          data-close-menu
          aria-label="${escapeHTML(c.close)}"
        >
          ${icon("x-lg")}
        </button>
      </div>
      <nav aria-label="${escapeHTML(c.navigation)}">${menuLinks}</nav>
      <div class="mobile-menu-bottom">
        ${LanguageSwitcher(lang)}${BookingButton(lang)}
      </div>
    </dialog>
  `;
}
