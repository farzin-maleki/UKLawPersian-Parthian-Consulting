import { copy, services, articles, faqs } from "../../content/data.js";
import { basePath } from "../../modules/paths.js";
import { escapeHTML, icon } from "../../modules/ui.js";
import { bookingPath, pathFor } from "../../modules/language.js";
import { lines, CTA, PricingCards } from "../../modules/sections.js";
import { BookingButton } from "../../components/BookingButton.js";
import { ServiceCard } from "../../components/ServiceCard.js";
import { ArticleCard } from "../../components/ArticleCard.js";
import { FAQ } from "../../components/FAQ.js";
export function render(lang) {
  const c = copy[lang];
  const assuranceItems = [
    ["chat-square-text", c.languages],
    ["compass", c.practical],
    ["credit-card", c.transparent],
  ]
    .map(
      ([name, label]) => /* HTML */ `
        <div>
          ${icon(name)}
          <span>${escapeHTML(label)}</span>
        </div>
      `,
    )
    .join("");
  const processSteps = c.steps
    .map(
      ([title, body], index) => /* HTML */ `
        <div class="col-md-6 col-xl-3">
          <div class="step">
            <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHTML(title)}</h3>
            <p>${escapeHTML(body)}</p>
          </div>
        </div>
      `,
    )
    .join("");

  return /* HTML */ `
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">
              <span class="accent-line"></span>
              ${escapeHTML(c.heroEyebrow)}
            </p>
            <h1>${lines(c.heroTitle)}</h1>
            <p class="hero-intro">${escapeHTML(c.heroIntro)}</p>
            <div class="hero-actions">
              ${BookingButton(lang)}
              <a class="hero-secondary button-lines" href="${pathFor("services", lang)}">
                ${escapeHTML(c.explore)}${icon("arrow-right", "directional")}
              </a>
            </div>
            <div class="hero-detail">
              ${icon("chat-square-text")}
              <span>${escapeHTML(c.languages)}</span>
              <span class="detail-divider"></span>
              <span>${escapeHTML(c.heroNote)}</span>
            </div>
          </div>
          <div class="hero-visual">
            <img
              class="hero-photo"
              src="${basePath}/src/assets/images/hero/london.webp"
              srcset="
                ${basePath}/src/assets/images/hero/london-small.webp  700w,
                ${basePath}/src/assets/images/hero/london.webp       1350w
              "
              sizes="(max-width: 767px) calc(100vw - 48px), 555px"
              alt="${escapeHTML(c.heroPhoto)}"
              width="1350"
              height="1510"
              fetchpriority="high"
            />
            <span class="hero-photo-caption">${escapeHTML(c.heroCaption)}</span>
            <a class="hero-floating-card" href="${bookingPath(lang)}">
              <span class="floating-icon">${icon("calendar2-check")}</span>
              <span>
                <strong>${escapeHTML(c.heroCardTitle)}</strong>
                <small>${escapeHTML(c.heroCardDetail)}</small>
              </span>
              ${icon("arrow-up-right", "directional")}
            </a>
            <div class="hero-decoration" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="assurance-strip">
      <div class="container">${assuranceItems}</div>
    </div>

    <section class="section trust-section">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <p class="eyebrow">${escapeHTML(c.trustEyebrow)}</p>
            <h2>${lines(c.trustTitle)}</h2>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <p class="body-large">${escapeHTML(c.trustText)}</p>
            <a class="text-link" href="${pathFor("about", lang)}">
              ${escapeHTML(c.trustLink)}${icon("arrow-up-right", "directional")}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section services-section">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">${escapeHTML(c.services)}</p>
            <h2>${lines(c.serviceHeading)}</h2>
          </div>
          <p>${escapeHTML(c.serviceSubtitle)}</p>
        </div>
        <div class="service-grid">
          ${services.map((s, i) => ServiceCard(s, lang, i)).join("")}
          <div class="service-overview">
            <span class="eyebrow">UKLawPersian</span>
            <p>${escapeHTML(c.practical)}</p>
            <a class="text-link" href="${pathFor("services", lang)}">
              ${escapeHTML(c.allServices)}${icon("arrow-right", "directional")}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section how-section">
      <div class="container">
        <p class="eyebrow">${escapeHTML(c.howEyebrow)}</p>
        <h2>${escapeHTML(c.howTitle)}</h2>
        <div class="row g-4 steps-row">${processSteps}</div>
      </div>
    </section>

    <section class="section pricing-section">
      <div class="container">
        <div class="row g-5">
          <div class="col-xl-4 pricing-intro">
            <p class="eyebrow">${escapeHTML(c.pricingEyebrow)}</p>
            <h2>${lines(c.pricingTitle)}</h2>
            <p>${escapeHTML(c.pricingIntro)}</p>
            <a class="text-link" href="${bookingPath(lang)}">
              ${escapeHTML(c.pricingLink)}${icon("arrow-right", "directional")}
            </a>
          </div>
          <div class="col-xl-8">${PricingCards(lang)}</div>
        </div>
      </div>
    </section>

    <section class="section about-preview">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <div class="about-image">
              <img
                src="${basePath}/src/assets/images/backgrounds/london-detail.webp"
                alt="${escapeHTML(c.aboutImage)}"
                width="900"
                height="1100"
                loading="lazy"
              />
              <span>
                PARTHIAN
                <br />
                CONSULTING
              </span>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <p class="eyebrow">${escapeHTML(c.aboutEyebrow)}</p>
            <h2>${lines(c.aboutTitle)}</h2>
            <p class="body-large">${escapeHTML(c.aboutText)}</p>
            <p class="profile-note">${icon("person-badge")}${escapeHTML(c.profilePending)}</p>
            <a class="text-link" href="${pathFor("about", lang)}">
              ${escapeHTML(c.learnMore)}${icon("arrow-up-right", "directional")}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section insights-section">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">${escapeHTML(c.insights)}</p>
            <h2>${escapeHTML(c.insightHomeTitle)}</h2>
            <p>${escapeHTML(c.insightHomeIntro)}</p>
          </div>
          <a class="text-link" href="${pathFor("insights", lang)}">
            ${escapeHTML(c.allInsights)}${icon("arrow-right", "directional")}
          </a>
        </div>
        <div class="row g-4">
          ${articles
            .slice(0, 3)
            .map(
              (a) => /* HTML */ `
                <div class="col-md-6 col-lg-4">${ArticleCard(a, lang)}</div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4">
            <p class="eyebrow">${escapeHTML(c.faqEyebrow)}</p>
            <h2>${lines(c.faqTitle)}</h2>
          </div>
          <div class="col-lg-7 offset-lg-1">${FAQ(faqs, lang)}</div>
        </div>
      </div>
    </section>

    ${CTA(lang)}
  `;
}
