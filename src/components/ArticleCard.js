import { t, pathFor } from "../modules/language.js";
import { escapeHTML, icon, dateLabel } from "../modules/ui.js";
import { services, copy } from "../content/data.js";
export function ArticleCard(article, lang) {
  const category = services.find((s) => s.id === article.category);
  return /* HTML */ `
    <article class="article-card">
      <a
        class="article-image-link"
        href="${pathFor(`insights/${article.slug}`, lang)}"
        tabindex="-1"
        aria-hidden="true"
      >
        <img
          src="${escapeHTML(article.image)}"
          alt=""
          width="800"
          height="560"
          loading="lazy"
        />
      </a>
      <div class="article-card-body">
        <div class="article-meta">
          <span
            >${escapeHTML(
              t(category?.shortTitle || category?.title, lang),
            )}</span
          >
          <time datetime="${article.updated}"
            >${escapeHTML(dateLabel(article.updated, lang))}</time
          >
        </div>
        <h3>
          <a href="${pathFor(`insights/${article.slug}`, lang)}">
            ${escapeHTML(t(article.title, lang))}
          </a>
        </h3>
        <p>${escapeHTML(t(article.excerpt, lang))}</p>
        ${article.draft
          ? /* HTML */ `
              <span class="draft-label">${escapeHTML(copy[lang].draft)}</span>
            `
          : ""}
        <a
          class="text-link"
          href="${pathFor(`insights/${article.slug}`, lang)}"
        >
          ${escapeHTML(copy[lang].readMore)}${icon(
            "arrow-right",
            "directional",
          )}
        </a>
      </div>
    </article>
  `;
}
