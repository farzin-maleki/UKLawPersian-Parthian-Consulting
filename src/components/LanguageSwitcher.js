import { alternatePath } from "../modules/language.js";
import { escapeHTML, icon } from "../modules/ui.js";
import { copy } from "../content/data.js";
export function LanguageSwitcher(lang) {
  const other = lang === "en" ? "fa" : "en";
  return /* HTML */ `
    <a
      class="language-switch"
      href="${escapeHTML(alternatePath(other))}"
      hreflang="${other}"
      lang="${other}"
      data-language="${other}"
      aria-label="${escapeHTML(copy[lang].language)}: ${other === "fa" ? "فارسی" : "English"}"
    >
      ${icon("globe2")}
      <span>${other === "fa" ? "فارسی" : "EN"}</span>
    </a>
  `;
}
