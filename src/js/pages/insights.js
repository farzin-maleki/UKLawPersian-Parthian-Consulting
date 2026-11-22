import { copy, articles, services } from "../../content/data.js";
import { escapeHTML, icon } from "../../modules/ui.js";
import { t } from "../../modules/language.js";
import { pageIntro, CTA } from "../../modules/sections.js";
import { ArticleCard } from "../../components/ArticleCard.js";
export function render(lang) {
  const c = copy[lang];
  const categoryOptions = services
    .filter((s) => articles.some((a) => a.category === s.id))
    .map(
      (s) => /* HTML */ `
        <option value="${s.id}">${escapeHTML(t(s.shortTitle || s.title, lang))}</option>
      `,
    )
    .join("");
  const articleCards = articles
    .map(
      (a) => /* HTML */ `
        <div class="col-md-6 col-lg-4" data-article="${a.slug}">${ArticleCard(a, lang)}</div>
      `,
    )
    .join("");

  return /* HTML */ `
    ${pageIntro(c.insightEyebrow, c.insightTitle, c.insightIntro)}
    <section class="section">
      <div class="container">
        <form class="insights-filters" role="search">
          <div class="search-field">
            <label for="insight-search">${escapeHTML(c.search)}</label>
            <div>
              ${icon("search")}
              <input
                type="search"
                id="insight-search"
                placeholder="${escapeHTML(c.searchPlaceholder)}"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="category-field">
            <label for="insight-category">${escapeHTML(c.category)}</label>
            <select id="insight-category">
              <option value="">${escapeHTML(c.allTopics)}</option>
              ${categoryOptions}
            </select>
          </div>
        </form>
        <div class="row g-4" id="article-results">${articleCards}</div>
        <p id="article-empty" class="empty-state" hidden>${escapeHTML(c.noResults)}</p>
        <p id="search-status" class="visually-hidden" role="status"></p>
      </div>
    </section>
    ${CTA(lang)}
  `;
}
export function init(lang) {
  const search = document.querySelector("#insight-search");
  const category = document.querySelector("#insight-category");
  const normalize = (value) =>
    value
      .toLocaleLowerCase()
      .replace(/ي/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/\u200c/g, " ");
  const filter = () => {
    const query = normalize(search.value.trim());
    let count = 0;
    articles.forEach((article) => {
      const visible =
        (!category.value || category.value === article.category) &&
        normalize(`${t(article.title, lang)} ${t(article.excerpt, lang)}`).includes(query);
      document.querySelector(`[data-article="${article.slug}"]`).hidden = !visible;
      if (visible) count++;
    });
    document.querySelector("#article-empty").hidden = count > 0;
    document.querySelector("#search-status").textContent =
      lang === "fa" ? `${count} مطلب یافت شد` : `${count} guides found`;
  };
  search.addEventListener("input", filter);
  category.addEventListener("change", filter);
  document.querySelector(".insights-filters").addEventListener("submit", (e) => e.preventDefault());
}
