import { siteConfig } from "../site";
import { common } from "../texts/common";

export function mountHeader(active: string): void {
  const skip = document.querySelector(".skip-link");
  if (skip && !skip.textContent?.trim()) skip.textContent = common.skipLink;
  const headerSlot = document.querySelector("[data-mount='header']");
  if (!headerSlot) return;
  const links = siteConfig.nav
    .map((n) => `<a href="${n.href}" ${n.match === active ? 'aria-current="page"' : ""}>${n.label}</a>`)
    .join("");
  headerSlot.innerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a href="/" class="logo" aria-label="${common.logoAria}">
          <span class="logo-mark" aria-hidden="true">L</span>
          <span class="ltr">Levi-Tec</span>
        </a>
        <nav class="nav-desktop" aria-label="${common.navAria}">${links}</nav>
        <a href="/contact/" class="btn btn-primary btn-sm header-cta">${common.headerCta}</a>
        <button type="button" class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mobileMenu" aria-label="${common.menuOpen}">
          <i class="ti ti-menu-2" aria-hidden="true"></i>
        </button>
      </div>
      <nav class="nav-mobile" id="mobileMenu" aria-label="${common.mobileNavAria}">
        ${links}
        <a href="/contact/" class="btn btn-primary" style="margin-top:.75rem">${common.headerCta}</a>
      </nav>
    </header>`;
  const btn = headerSlot.querySelector<HTMLButtonElement>("#menuBtn");
  const menu = headerSlot.querySelector("#mobileMenu");
  btn?.addEventListener("click", () => {
    const open = menu?.classList.toggle("open") ?? false;
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? common.menuClose : common.menuOpen);
    const icon = btn.querySelector("i.ti");
    if (icon) {
      icon.classList.toggle("ti-menu-2", !open);
      icon.classList.toggle("ti-x", open);
    }
  });
  menu?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn?.setAttribute("aria-expanded", "false");
      btn?.setAttribute("aria-label", common.menuOpen);
      const icon = btn?.querySelector("i.ti");
      if (icon) {
        icon.classList.add("ti-menu-2");
        icon.classList.remove("ti-x");
      }
    })
  );
}
