import { fullProcess } from "../texts";
import { processPage } from "../texts/processPage";
import { Card, CheckList, SectionHead } from "../ui/components";

export default function Process() {
  const t = processPage;
  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div>
            <SectionHead eyebrow={t.head.eyebrow} title={t.head.title} lead={t.head.lead} />
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr", marginTop: "2.5rem" }}>
            {fullProcess.map((s) => (
              <Card key={s.n}>
                <h3>
                  <span className="ltr" style={{ color: "var(--brand)" }}>
                    {s.n}
                  </span>{" "}
                  — {s.title}
                </h3>
                <p>{s.text}</p>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: "1.25rem" }}>
            <Card>
              <h3>{t.noteCard.title}</h3>
              <CheckList items={t.noteCard.items} />
            </Card>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a className="btn btn-primary" href="/contact/">
              {t.cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
