import { services } from "../texts";
import { servicesPage } from "../texts/servicesPage";
import { Badge, Card, CheckList, IconBadge, SectionHead } from "../ui/components";

export default function Services() {
  const t = servicesPage;
  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div>
            <SectionHead eyebrow={t.head.eyebrow} title={t.head.title} lead={t.head.lead} />
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
            {services.map((s, i) => (
              <Card key={s.slug}>
                <p className="ltr" style={{ color: "var(--brand)", fontWeight: 800, margin: 0 }}>
                  0{i + 1}
                </p>
                <span style={{ marginTop: ".6rem", display: "inline-block" }}>
                  <IconBadge icon={s.icon} />
                </span>
                <h3 style={{ fontSize: "1.5rem" }}>{s.title}</h3>
                <p>{s.short}</p>
                <p style={{ fontSize: ".92rem" }}>
                  <strong>{t.problemLabel}</strong>
                  {s.problem}
                </p>
                <p style={{ fontSize: ".92rem" }}>
                  <strong>{t.suitableLabel}</strong>
                  {s.suitable}
                </p>
                <h4 style={{ margin: "1rem 0 .4rem" }}>{t.deliverTitle}</h4>
                <CheckList items={s.deliverables} />
                <div style={{ marginTop: "1rem", display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
                  {s.workflow.map((step) => (
                    <Badge key={step}>{step}</Badge>
                  ))}
                </div>
                <a className="btn btn-secondary btn-sm" style={{ marginTop: "1.2rem" }} href="/contact/">
                  {t.ctaPrefix}
                  {s.title}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div>
            <SectionHead eyebrow={t.transparency.eyebrow} title={t.transparency.title} />
          </div>
          <div className="grid grid-3">
            {t.transparency.items.map((item) => (
              <Card key={item}>
                <i className="ti ti-check" aria-hidden="true"></i>
                <p>{item}</p>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a className="btn btn-primary" href="/contact/">
              {t.transparency.cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
