import { siteConfig, whatsappLink } from "../site";
import { common } from "../texts/common";

export default function Footer() {
  const wa = whatsappLink();
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <p style={{ fontSize: "1.25rem", fontWeight: 800, margin: 0 }}>
            <span className="ltr">Levi-Tec</span>
          </p>
          <p style={{ color: "var(--text-dim)" }}>{siteConfig.tagline}</p>
          <p style={{ color: "var(--muted)", fontSize: ".9rem" }}>{common.footerAbout}</p>
        </div>
        <nav aria-label={common.footerNavAria}>
          <p style={{ fontWeight: 700 }}>{common.footerNavTitle}</p>
          <ul>
            {siteConfig.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            {common.footerLegal.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p style={{ fontWeight: 700 }}>{common.footerContactTitle}</p>
          <p>
            {common.footerEmailLabel}{" "}
            <a href={`mailto:${siteConfig.email}`} className="ltr">
              {siteConfig.email}
            </a>
          </p>
          <p>
            {wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand)" }}>
                {common.footerWa}
              </a>
            ) : (
              <a href="/contact/" style={{ color: "var(--brand)" }}>
                {common.footerContactForm}
              </a>
            )}
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container footer-bottom">
          <span>{common.footerRights(year)}</span>
          <span>{common.footerBuilt}</span>
        </div>
      </div>
    </footer>
  );
}
