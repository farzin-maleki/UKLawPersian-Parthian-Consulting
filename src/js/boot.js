/* Runs before styles and content paint; no dependencies or third-party requests. */
(() => {
  const basePath = document.documentElement.dataset.basePath || "";
  const pathname = location.pathname.slice(basePath.length) || "/";
  const segment = pathname.split("/")[1];
  let language = segment === "fa" ? "fa" : "en";
  if (pathname === "/" || pathname === "/index.html") {
    try {
      if (localStorage.getItem("uklp-language") === "fa") language = "fa";
    } catch {}
    location.replace(
      `${basePath}/${language}/${location.search}${location.hash}`,
    );
  }
  if (/^\/(en|fa)\/instagram\/(?:index\.html)?$/.test(pathname)) {
    location.replace(
      `${basePath}/${language}/from-instagram/${location.search}${location.hash}`,
    );
  }
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  document.documentElement.dataset.pageLoading = "";
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = `${basePath}/src/assets/vendor/bootstrap${language === "fa" ? ".rtl" : ""}.min.css`;
  document.head.append(stylesheet);
})();
