import { copy, navigation, services, brand } from "../content/data.js";
import { config } from "../config.js";
import { bookingPath, pathFor, t } from "../modules/language.js";
import { escapeHTML, icon, safeExternalURL } from "../modules/ui.js";
import { Brand } from "./Brand.js";
export function Footer(lang) {
  const c = copy[lang];
  const social = safeExternalURL(config.contact.instagram, ["www.instagram.com", "instagram.com"]);
  const wa = /^\d{8,15}$/.test(config.contact.whatsapp)
    ? `https://wa.me/${config.contact.whatsapp}`
    : "";
  const navigationLinks = navigation
    .map(
      (n) => /* HTML */ `
        <li><a href="${pathFor(n.path, lang)}">${escapeHTML(t(n.label, lang))}</a></li>
      `,
    )
    .join("");
  const policyLinks = ["privacy", "cookies", "terms", "refunds", "complaints"]
    .map(
      (id) => /* HTML */ `
        <li><a href="${pathFor(`legal/${id}`, lang)}">${escapeHTML(c[id])}</a></li>
      `,
    )
    .join("");
  const emailContact =
    config.contact.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contact.email)
      ? /* HTML */ `
          <a class="footer-contact" href="mailto:${escapeHTML(config.contact.email)}">
            ${icon("envelope")}
            <bdi>${escapeHTML(config.contact.email)}</bdi>
          </a>
        `
      : /* HTML */ `
          <p class="small footer-muted">${escapeHTML(c.contactUnconfirmed)}</p>
        `;
  const whatsappContact = wa
    ? /* HTML */ `
        <a class="footer-contact" href="${wa}" target="_blank" rel="noopener noreferrer">
          ${icon("whatsapp")}WhatsApp
        </a>
      `
    : "";
  const instagramContact = social
    ? /* HTML */ `
        <a
          class="footer-contact"
          href="${escapeHTML(social)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${icon("instagram")}Instagram
        </a>
      `
    : "";
  const serviceLinks = services
    .map(
      (s) => /* HTML */ `
        <a href="${pathFor(`services/${s.id}`, lang)}">
          ${escapeHTML(t(s.shortTitle || s.title, lang))}
        </a>
      `,
    )
    .join("");

  return /* HTML */ `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-5 footer-main">
          <div class="col-lg-4">
            ${Brand(lang, { footer: true })}
            <p class="footer-intro">${escapeHTML(c.footerAbout)}</p>
            <p class="small">
              ${escapeHTML(brand.company)}
              <br />
              ${escapeHTML(brand.tradingName)}
            </p>
            <p class="small footer-muted">${escapeHTML(c.companyPending)}</p>
          </div>
          <div class="col-6 col-md-3 col-lg-2">
            <h2>${escapeHTML(c.footerNavigate)}</h2>
            <ul>
              ${navigationLinks}
              <li><a href="${bookingPath(lang)}">${escapeHTML(c.book)}</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <h2>${escapeHTML(c.footerLegal)}</h2>
            <ul>
              ${policyLinks}
              <li>
                <button class="footer-preferences" data-cookie-settings>
                  ${escapeHTML(c.preferences)}
                </button>
              </li>
            </ul>
          </div>
          <div class="col-md-5 col-lg-3">
            <h2>${escapeHTML(c.footerContact)}</h2>
            ${emailContact}
            ${whatsappContact}
            ${instagramContact}
            <a class="text-link footer-contact" href="${pathFor("contact", lang)}">
              ${escapeHTML(c.contactLabel)}${icon("arrow-up-right", "directional")}
            </a>
          </div>
        </div>
        <div class="footer-services">
          <h2>${escapeHTML(c.services)}</h2>
          <div>${serviceLinks}</div>
        </div>
        <div class="footer-disclosure">${escapeHTML(c.footerDisclosure)}</div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} UKLawPersian. ${escapeHTML(c.copyright)}</p>
          <span>${escapeHTML(c.languages)}</span>
        </div>
      </div>
    </footer>
  `;
}
