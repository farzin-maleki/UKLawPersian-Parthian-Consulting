import { t } from "../modules/language.js";
import { escapeHTML, icon } from "../modules/ui.js";
export function FAQ(items, lang) {
  const questions = items
    .map(
      (item) => /* HTML */ `
        <details class="faq-item">
          <summary>${escapeHTML(t(item.question, lang))}${icon("plus-lg")}</summary>
          <div class="faq-answer"><p>${escapeHTML(t(item.answer, lang))}</p></div>
        </details>
      `,
    )
    .join("");

  return /* HTML */ `
    <div class="faq-list">${questions}</div>
  `;
}
