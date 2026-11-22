/* Deferred so the loading screen can appear while the page modules are still loading. */
(() => {
  const root = document.documentElement;
  const main = document.getElementById("main-content");
  const persian = root.lang === "fa";
  const message = persian ? "در حال بارگذاری صفحه…" : "Loading page…";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const overlay = document.createElement("div");
  overlay.className = "page-loader";
  overlay.hidden = true;
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = /* HTML */ `
    <div class="page-loader-content">
      <img src="/src/assets/logos/parthian-emblem.webp" alt="" width="144" height="144" />
      <span class="page-loader-progress"></span>
      <p></p>
    </div>
  `;
  overlay.querySelector("p").textContent = message;

  const status = document.createElement("div");
  status.className = "visually-hidden";
  status.setAttribute("role", "status");
  document.body.append(overlay, status);

  let showTimer;
  let recoveryTimer;
  let exitAnimation;

  function clearWait() {
    window.clearTimeout(showTimer);
    window.clearTimeout(recoveryTimer);
    status.textContent = "";
  }

  function hide() {
    clearWait();
    overlay.hidden = true;
    exitAnimation?.cancel();
    exitAnimation = undefined;
  }

  function showCardsOnScroll() {
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const cards = main.querySelectorAll(
      ".service-card, .article-card, .price-card:not(.booking-option), .value-card, .step, .cta-panel",
    );
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("motion-reveal");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });

    for (const card of cards) observer.observe(card);
  }

  function finishLoading() {
    clearWait();
    if (root.dataset.ready) showCardsOnScroll();

    if (overlay.hidden || reducedMotion.matches || !root.dataset.ready || !overlay.animate) {
      hide();
      return;
    }

    exitAnimation = overlay.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 160,
      easing: "ease-out",
      fill: "forwards",
    });
    exitAnimation.onfinish = hide;
  }

  function showWhenSlow({ initial = false } = {}) {
    hide();
    // Fast pages need no interruption. Recover if a navigation is cancelled or never resolves.
    const elapsed = initial ? performance.now() : 0;
    showTimer = window.setTimeout(() => {
      overlay.hidden = false;
      status.textContent = message;
    }, Math.max(0, 150 - elapsed));
    recoveryTimer = window.setTimeout(initial ? showStartupError : hide, 10000);
  }

  function showStartupError() {
    if (!main.hasAttribute("aria-busy")) return;
    hide();
    main.removeAttribute("aria-busy");
    delete root.dataset.pageLoading;

    const notice = document.createElement("section");
    notice.className = "page-fallback";
    notice.setAttribute("role", "alert");
    const heading = document.createElement("h1");
    heading.textContent = persian ? "صفحه بارگذاری نشد" : "The page could not be loaded";
    const instruction = document.createElement("p");
    instruction.textContent = persian
      ? "لطفاً صفحه را دوباره بارگذاری کنید."
      : "Please refresh the page and try again.";
    notice.append(heading, instruction);
    main.replaceChildren(notice);
  }

  if (!root.dataset.ready) {
    main.setAttribute("aria-busy", "true");
    showWhenSlow({ initial: true });
    document.querySelector('script[src="/src/js/main.js"]')
      ?.addEventListener("error", showStartupError, { once: true });
  }

  document.addEventListener("uklp:page-ready", finishLoading, { once: true });
  window.addEventListener("pagehide", hide);
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) hide();
  });

  document.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const link = event.target instanceof Element && event.target.closest("a[href]");
    if (!link || link.hasAttribute("download")) return;
    const target = link.getAttribute("target");
    if (target && target.toLowerCase() !== "_self") return;

    const destination = new URL(link.href);
    if (
      destination.origin !== location.origin ||
      !/^\/(?:en|fa)(?:\/|$)/.test(destination.pathname)
    )
      return;
    link.closest("dialog[open]")?.close();
    if (destination.pathname === location.pathname && destination.search === location.search)
      return;
    showWhenSlow();
  });
})();
