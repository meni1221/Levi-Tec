import { aboutPage } from "../texts/aboutPage";
import { Card, CheckList, SectionHead } from "../ui/components";

export default function About() {
  const t = aboutPage;
  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div>
            <SectionHead eyebrow={t.head.eyebrow} title={t.head.title} lead={t.head.lead} />
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr", marginTop: "2.5rem" }}>
            <Card>
              <span className="logo-mark" style={{ width: "5rem", height: "5rem", fontSize: "2rem" }} aria-hidden="true">
                {t.mark}
              </span>
              <h3 style={{ fontSize: "1.4rem" }}>{t.name}</h3>
              <p style={{ color: "var(--muted)" }}>{t.role}</p>
              <p className="ltr" style={{ fontSize: ".85rem", color: "var(--muted)" }}>
                {t.stack}
              </p>
              <p>{t.profile}</p>
            </Card>
            <Card>
              <h3>
                <i className={`ti ${t.approach.icon}`} aria-hidden="true"></i> {t.approach.title}
              </h3>
              <CheckList items={t.approach.items} />
            </Card>
            <Card>
              <h3>
                <i className={`ti ${t.value.icon}`} aria-hidden="true"></i> {t.value.title}
              </h3>
              <p>{t.value.text}</p>
            </Card>
            <Card>
              <h3>
                <i className={`ti ${t.honesty.icon}`} aria-hidden="true"></i> {t.honesty.title}
              </h3>
              <p style={{ fontSize: ".92rem" }}>{t.honesty.text}</p>
            </Card>
          </div>
          <div style={{ marginTop: "2rem", display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="/contact/">
              {t.primaryCta}
            </a>
            <a className="btn btn-secondary" href="/process/">
              {t.secondaryCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
