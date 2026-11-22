// GitHub Pages supplies the project prefix in the generated HTML. Root hosts use "".
export const basePath = globalThis.document?.documentElement.dataset.basePath || "";

export function routePath() {
  return location.pathname.slice(basePath.length).replace(/\/index\.html$/, "/") || "/";
}
