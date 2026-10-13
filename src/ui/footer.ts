import { siteConfig, whatsappLink } from "../site";
import { common } from "../texts/common";

export function mountFooter(): void {
  const footerSlot = document.querySelector("[data-mount='footer']");
  if (footerSlot) {
    const wa = whatsappLink();
    footerSlot.innerHTML = `
    <footer>
      <div class="container footer-grid">
        <div>
          <p style="font-size:1.25rem;font-weight:800;margin:0"><span class="ltr">Levi-Tec</span></p>
          <p style="color:var(--text-dim)">${siteConfig.tagline}</p>
          <p style="color:var(--muted);font-size:.9rem">${common.footerAbout}</p>
        </div>
        <nav aria-label="${common.footerNavAria}">
          <p style="font-weight:700">${common.footerNavTitle}</p>
          <ul>
            ${siteConfig.nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
            ${common.footerLegal.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
          </ul>
        </nav>
        <div>
          <p style="font-weight:700">${common.footerContactTitle}</p>
          <p>${common.footerEmailLabel} <a href="mailto:${siteConfig.email}" class="ltr">${siteConfig.email}</a></p>
          <p>${
            wa
              ? `<a href="${wa}" target="_blank" rel="noopener noreferrer" style="color:var(--brand)">${common.footerWa}</a>`
              : `<a href="/contact/" style="color:var(--brand)">${common.footerContactForm}</a>`
          }</p>
        </div>
      </div>
      <div style="border-top:1px solid var(--line)">
        <div class="container footer-bottom">
          <span>${common.footerRights(new Date().getFullYear())}</span>
          <span>${common.footerBuilt}</span>
        </div>
      </div>
    </footer>`;
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}
