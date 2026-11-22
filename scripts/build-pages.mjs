import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { articles, legal, services } from "../src/content/data.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(root, process.argv[2] || ".preview/pages");
const basePath = (process.env.PAGES_BASE_PATH || "").replace(/\/$/, "");
if (basePath && !/^\/[A-Za-z0-9._-]+$/.test(basePath)) {
  throw new Error("Expected a GitHub Pages repository path.");
}
await mkdir(output, { recursive: true });
if ((await readdir(output)).length) throw new Error("Choose an empty build directory.");

async function emit(page, destination, lang = "en") {
  const source = await readFile(join(root, page), "utf8");
  const html = source
    .replace('<html lang="en" dir="ltr">', `<html lang="${lang}" dir="${lang === "fa" ? "rtl" : "ltr"}" data-base-path="${basePath}">`)
    .replace(/(src|href)="\/(?!\/)/g, `$1="${basePath}/`);
  const file = join(output, destination);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

await cp(join(root, "src"), join(output, "src"), { recursive: true });
for (const file of ["favicon.png", "sitemap.xml", "robots.txt"]) {
  await cp(join(root, file), join(output, file));
}
await emit("index.html", "index.html");
await emit("404.html", "404.html");

const pages = [
  ["", "index.html"],
  ...["about", "contact", "services", "insights", "from-instagram"].map(slug => [slug, `pages/${slug}.html`]),
  ["book", "pages/booking.html"],
  ["instagram", "pages/from-instagram.html"],
  ...services.map(service => [`services/${service.id}`, "pages/service.html"]),
  ...articles.map(article => [`insights/${article.slug}`, "pages/article.html"]),
  ...legal.map(policy => [`legal/${policy.id}`, "pages/legal.html"]),
];
for (const lang of ["en", "fa"]) {
  for (const [route, template] of pages) {
    await emit(template, join(lang, route, "index.html"), lang);
  }
}
console.log(`Built GitHub Pages site at ${output} for ${basePath}/`);
