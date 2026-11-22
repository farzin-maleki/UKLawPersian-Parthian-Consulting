import { copy } from "../content/data.js";
import { bookingPath } from "../modules/language.js";
import { escapeHTML, icon } from "../modules/ui.js";
export function BookingButton(
  lang,
  {
    label = copy[lang].book,
    variant = "primary",
    type = "",
    className = "",
  } = {},
) {
  return /* HTML */ `
    <a
      class="button button-${escapeHTML(variant)} ${escapeHTML(className)}"
      href="${bookingPath(lang, type)}"
    >
      ${escapeHTML(label)}
    </a>
  `;
}
