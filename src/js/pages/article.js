import { copy, articles, services } from "../../content/data.js";
import { basePath } from "../../modules/paths.js";
import { escapeHTML, icon, dateLabel } from "../../modules/ui.js";
import { t, pathFor } from "../../modules/language.js";
import { CTA } from "../../modules/sections.js";
import { ArticleCard } from "../../components/ArticleCard.js";
export function render(lang, article) {
  const c = copy[lang];
  const category = services.find((s) => s.id === article.category);
  const articleSections = article.sections
    .map(
      (section) => /* HTML */ `
        <section class="prose-section">
          <h2>${escapeHTML(t(section.heading, lang))}</h2>
          ${t(section.paragraphs, lang)
            .map(
              (p) => /* HTML */ `
                <p>${escapeHTML(p)}</p>
              `,
            )
            .join("")}
        </section>
      `,
    )
    .join("");
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)
    .map(
      (a) => /* HTML */ `
        <div class="col-md-6 col-lg-4">${ArticleCard(a, lang)}</div>
      `,
    )
    .join("");

  return /* HTML */ `
    <article>
      <header class="page-intro article-intro">
        <div class="container narrow">
          <a class="text-link breadcrumb-link" href="${pathFor("insights", lang)}">
            ${icon("arrow-left", "directional")}${escapeHTML(c.insights)}
          </a>
          <p class="eyebrow">${escapeHTML(t(category?.title, lang))}</p>
          <h1>${escapeHTML(t(article.title, lang))}</h1>
          <p class="lead">${escapeHTML(t(article.excerpt, lang))}</p>
          <div class="article-byline">
            <span>${escapeHTML(c.attribution)}</span>
            <span>
              ${escapeHTML(c.published)}
              <time datetime="${article.date}">${escapeHTML(dateLabel(article.date, lang))}</time>
            </span>
            <span>
              ${escapeHTML(c.updated)}
              <time datetime="${article.updated}">
                ${escapeHTML(dateLabel(article.updated, lang))}
              </time>
            </span>
          </div>
        </div>
      </header>
      <div class="container article-cover">
        <img
          src="${basePath}${escapeHTML(article.image)}"
          alt="${escapeHTML(t(article.imageAlt, lang))}"
          width="1000"
          height="670"
        />
      </div>
      <div class="section container reading-column">
        ${article.draft
          ? /* HTML */ `
              <div class="notice">
                ${icon("info-circle")}
                <p>${escapeHTML(c.articleNotice)}</p>
              </div>
            `
          : ""}${articleSections}
        <aside class="article-disclaimer">${escapeHTML(c.generalDisclaimer)}</aside>
      </div>
    </article>
    <section class="section soft-section">
      <div class="container">
        <h2>${escapeHTML(c.related)}</h2>
        <div class="row g-4 mt-3">${relatedArticles}</div>
      </div>
    </section>
    ${CTA(lang)}
  `;
}
