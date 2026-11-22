import { copy } from "../content/data.js";
import { escapeHTML, icon } from "../modules/ui.js";
import { Brand } from "./Brand.js";
import { Navbar } from "./Navbar.js";
import { LanguageSwitcher } from "./LanguageSwitcher.js";
import { MobileMenu } from "./MobileMenu.js";
import { BookingButton } from "./BookingButton.js";
export function Header(lang, compact = false) {
  return /* HTML */ `
    <div class="brand-strip">
      <div class="container">
        <span>PARTHIAN CONSULTING</span>
        <span>${escapeHTML(copy[lang].languages)}</span>
      </div>
    </div>
    <div class="site-header">
      <div class="container header-inner">
        ${Brand(lang)}${compact ? "" : Navbar(lang)}
        <div class="header-actions">
          ${LanguageSwitcher(lang)}${compact
            ? ""
            : BookingButton(lang, { className: "header-booking" })}
          <button
            class="icon-button mobile-menu-toggle"
            aria-label="${escapeHTML(copy[lang].menu)}"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            ${icon("list")}
          </button>
        </div>
      </div>
    </div>
    ${MobileMenu(lang)}
  `;
}
