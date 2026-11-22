import { t } from "../modules/language.js";
import { escapeHTML } from "../modules/ui.js";
// No testimonial is published until the business verifies it and permission exists.
export function TestimonialCard(testimonial, lang) {
  if (!testimonial?.approved || !testimonial?.permissionConfirmed) return "";
  return /* HTML */ `
    <figure class="testimonial-card">
      <blockquote>${escapeHTML(t(testimonial.quote, lang))}</blockquote>
      <figcaption>${escapeHTML(testimonial.name)}</figcaption>
    </figure>
  `;
}
