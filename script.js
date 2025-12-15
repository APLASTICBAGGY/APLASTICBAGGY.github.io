/**
 * Minimal JS (progressive enhancement)
 * - Adds a `.js` class for CSS to enable the mobile nav toggle
 * - Toggles mobile navigation open/closed
 * - Updates footer year
 */
(() => {
  // Mark the page as JS-enabled (used by CSS to collapse nav on small screens)
  document.documentElement.classList.add("js");

  const toggleBtn = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  const body = document.body;

  if (toggleBtn && nav) {
    const closeMenu = () => {
      body.classList.remove("nav-is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      body.classList.add("nav-is-open");
      toggleBtn.setAttribute("aria-expanded", "true");
    };

    toggleBtn.addEventListener("click", () => {
      const isOpen = body.classList.contains("nav-is-open");
      if (isOpen) closeMenu();
      else openMenu();
    });

    // Close the menu after clicking a nav link (useful on small screens)
    nav.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;
      closeMenu();
    });

    // Escape key closes the menu
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  // Footer year helper
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
