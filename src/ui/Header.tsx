import { useState } from "react";
import { siteConfig } from "../site";
import { common } from "../texts/common";

export default function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const links = siteConfig.nav.map((n) =>
    n.match === active ? (
      <a key={n.href} href={n.href} aria-current="page">
        {n.label}
      </a>
    ) : (
      <a key={n.href} href={n.href}>
        {n.label}
      </a>
    ),
  );
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label={common.logoAria}>
          <span className="logo-mark" aria-hidden="true">
            L
          </span>
          <span className="ltr">Levi-Tec</span>
        </a>
        <nav className="nav-desktop" aria-label={common.navAria}>
          {links}
        </nav>
        <a href="/contact/" className="btn btn-primary btn-sm header-cta">
          {common.headerCta}
        </a>
        <button
          type="button"
          className="menu-btn"
          id="menuBtn"
          aria-expanded={open}
          aria-controls="mobileMenu"
          aria-label={open ? common.menuClose : common.menuOpen}
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`ti ${open ? "ti-x" : "ti-menu-2"}`} aria-hidden="true"></i>
        </button>
      </div>
      <nav className={`nav-mobile${open ? " open" : ""}`} id="mobileMenu" aria-label={common.mobileNavAria}>
        {siteConfig.nav.map((n) =>
          n.match === active ? (
            <a key={n.href} href={n.href} aria-current="page" onClick={close}>
              {n.label}
            </a>
          ) : (
            <a key={n.href} href={n.href} onClick={close}>
              {n.label}
            </a>
          ),
        )}
        <a href="/contact/" className="btn btn-primary" style={{ marginTop: ".75rem" }} onClick={close}>
          {common.headerCta}
        </a>
      </nav>
    </header>
  );
}
