/* Runs before styles and content paint; no dependencies or third-party requests. */
(() => {
  const segment = location.pathname.split("/")[1];
  let language = segment === "fa" ? "fa" : "en";
  if (location.pathname === "/" || location.pathname === "/index.html") {
    try {
      if (localStorage.getItem("uklp-language") === "fa") language = "fa";
    } catch {}
    location.replace(`/${language}/${location.search}${location.hash}`);
  }
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  document.documentElement.dataset.pageLoading = "";
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = `/src/assets/vendor/bootstrap${language === "fa" ? ".rtl" : ""}.min.css`;
  document.head.append(stylesheet);
})();
