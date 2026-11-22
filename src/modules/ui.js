import { basePath } from "./paths.js";

export function escapeHTML(value = "") {
  return String(value).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
}

export function icon(name, extraClass = "") {
  const safeName = /^[a-z0-9-]+$/.test(name) ? name : "info-circle";
  return /* HTML */ `
    <svg
      class="icon ${escapeHTML(extraClass)}"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <use href="${basePath}/src/assets/icons/bootstrap-icons.svg#${safeName}"></use>
    </svg>
  `.trim();
}

export function dateLabel(value, lang) {
  return new Intl.DateTimeFormat(lang === "fa" ? "fa-IR" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}

export function safeExternalURL(value, hosts = []) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      (!hosts.length || hosts.includes(url.hostname))
      ? url.href
      : "";
  } catch {
    return "";
  }
}
