import { config } from "../config.js";
import { getConsent, setConsent } from "../modules/cookieConsent.js";
import { pathFor } from "../modules/language.js";
import { escapeHTML } from "../modules/ui.js";

const copy = {
  en: {
    title: "Your privacy preferences",
    text: "Optional analytics are disabled unless you accept. Essential preferences remember your language and this choice.",
    accept: "Accept optional analytics",
    reject: "Reject optional analytics",
    policy: "Cookie policy",
    essential:
      "This website currently uses no analytics or marketing trackers. Only your language and privacy choices may be saved in this browser.",
    close: "Close preferences",
  },
  fa: {
    title: "تنظیمات حریم خصوصی شما",
    text: "تحلیل‌گرهای اختیاری فقط با موافقت شما فعال می‌شوند. تنظیمات ضروری، زبان و انتخاب شما را به خاطر می‌سپارند.",
    accept: "پذیرش تحلیل‌گرهای اختیاری",
    reject: "رد تحلیل‌گرهای اختیاری",
    policy: "سیاست کوکی‌ها",
    essential:
      "این وب‌سایت در حال حاضر از ابزارهای تحلیل یا رهگیری تبلیغاتی استفاده نمی‌کند. فقط انتخاب زبان و حریم خصوصی شما ممکن است در این مرورگر ذخیره شود.",
    close: "بستن تنظیمات",
  },
};

export function CookieBanner(lang = "en") {
  const c = copy[lang] || copy.en;
  const show = config.analytics.enabled && !getConsent();
  const actions = config.analytics.enabled
    ? /* HTML */ `
        <button type="button" class="button button-secondary" data-consent="rejected">
          ${c.reject}
        </button>
        <button type="button" class="button button-primary" data-consent="accepted">
          ${c.accept}
        </button>
      `
    : /* HTML */ `
        <button type="button" class="button button-secondary" data-cookie-close>${c.close}</button>
      `;

  return /* HTML */ `
    <section
      class="cookie-banner"
      id="cookie-banner"
      aria-labelledby="cookie-title"
      ${show ? "" : "hidden"}
    >
      <div class="container">
        <div class="cookie-copy">
          <h2 id="cookie-title">${c.title}</h2>
          <p>
            ${config.analytics.enabled ? c.text : c.essential}
            <a href="${escapeHTML(pathFor("legal/cookies/", lang))}">${c.policy}</a>
          </p>
        </div>
        <div class="cookie-actions">${actions}</div>
      </div>
    </section>
  `;
}

export function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  let returnFocus = null;
  banner.querySelectorAll("[data-consent]").forEach((button) =>
    button.addEventListener("click", () => {
      setConsent(button.dataset.consent);
      banner.hidden = true;
      returnFocus?.focus();
    }),
  );
  banner.querySelector("[data-cookie-close]")?.addEventListener("click", () => {
    banner.hidden = true;
    returnFocus?.focus();
  });
  const open = () => {
    returnFocus = document.activeElement;
    banner.hidden = false;
    banner.querySelector("button")?.focus();
  };
  window.addEventListener("cookiepreferences", open);
  document
    .querySelectorAll("[data-cookie-settings]")
    .forEach((button) => button.addEventListener("click", open));
}
