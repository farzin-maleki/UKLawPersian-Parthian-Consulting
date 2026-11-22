import { rememberLanguage } from "../modules/language.js";

function initServicesDropdown(group) {
  const toggle = group.querySelector(".services-toggle");
  const panel = group.querySelector(".service-links");
  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  if (group.closest(".desktop-nav")) {
    group.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") setOpen(true);
    });
    group.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse" && !panel.contains(document.activeElement)) setOpen(false);
    });
  }
  group.addEventListener("focusout", (event) => {
    if (!group.contains(event.relatedTarget)) setOpen(false);
  });
  document.addEventListener("pointerdown", (event) => {
    if (!group.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || panel.hidden) return;
    event.preventDefault();
    if (group.contains(document.activeElement)) toggle.focus();
    setOpen(false);
  });
  group.closest("dialog")?.addEventListener("close", () => setOpen(false));
  window.matchMedia("(min-width: 1200px)").addEventListener("change", () => setOpen(false));
  window.addEventListener("pageshow", () => setOpen(false));
}

export function initNavigation() {
  document.querySelectorAll(".services-dropdown").forEach(initServicesDropdown);
  const dialog = document.querySelector("#mobile-menu");
  const toggle = document.querySelector(".mobile-menu-toggle");
  const close = () => dialog?.close();
  toggle?.addEventListener("click", () => {
    dialog.showModal();
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  });
  dialog?.querySelector("[data-close-menu]")?.addEventListener("click", close);
  dialog?.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      )
        close();
    }
  });
  dialog?.addEventListener("close", () => {
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    toggle.focus({ preventScroll: true });
  });
  window.matchMedia("(min-width: 1200px)").addEventListener("change", (e) => {
    if (e.matches && dialog?.open) close();
  });
  document
    .querySelectorAll("[data-language]")
    .forEach((link) =>
      link.addEventListener("click", () =>
        rememberLanguage(link.dataset.language),
      ),
    );
}
