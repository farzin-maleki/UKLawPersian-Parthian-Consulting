import { copy } from "../content/data.js";
import { pathFor } from "../modules/language.js";
import { escapeHTML } from "../modules/ui.js";

import { basePath } from "../modules/paths.js";

const logoPath = `${basePath}/src/assets/logos`;

export function Brand(lang, { footer = false } = {}) {
  const label = escapeHTML(`UKLawPersian · Parthian Consulting — ${copy[lang].home}`);
  const wordmark = footer ? /* HTML */ `
    <span class="footer-brand-name" lang="en" dir="ltr">
      Parthian <span>Consulting</span>
    </span>
  ` : /* HTML */ `
    <span class="wordmark" dir="ltr">UKLaw<span>Persian</span><span class="brand-dot"></span></span>
  `;

  return /* HTML */ `
    <a
      class="brand${footer ? " footer-brand" : ""}"
      href="${pathFor("", lang)}"
      aria-label="${label}"
    >
      <img
        class="brand-emblem"
        src="${logoPath}/parthian-emblem.webp"
        alt=""
        width="360"
        height="360"
        ${footer ? 'loading="lazy"' : ""}
      />
      ${wordmark}
    </a>
  `;
}
