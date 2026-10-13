import { projects } from "../texts";
import { projectsPage } from "../texts/projectsPage";
import { Badge, Card, CheckList, IconBadge, LinkCard, SectionHead, StackList } from "../ui/components";

export default function Projects() {
  const t = projectsPage;
  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div>
            <SectionHead eyebrow={t.head.eyebrow} title={t.head.title} lead={t.head.lead} />
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
            {projects.map((p) => {
              const inner = (
                <>
                  <IconBadge icon={p.icon} />
                  <div style={{ marginTop: ".8rem", display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
                    <Badge>{p.category}</Badge>
                    <Badge>{t.liveBadge}</Badge>
                  </div>
                  <h3 style={{ fontSize: "1.4rem" }}>{p.title}</h3>
                  <p>{p.summary}</p>
                  <p style={{ fontSize: ".92rem" }}>
                    <strong>{t.problemLabel}</strong>
                    {p.problem}
                  </p>
                  <p style={{ fontSize: ".92rem" }}>
                    <strong>{t.solutionLabel}</strong>
                    {p.solution}
                  </p>
                  <h4 style={{ margin: "1rem 0 .4rem" }}>{t.featuresTitle}</h4>
                  <CheckList items={p.features} />
                  <StackList items={p.stack} />
                  <span className="text-link">
                    {t.liveLink} <i className="ti ti-arrow-left" aria-hidden="true"></i>
                  </span>
                </>
              );
              return p.liveUrl ? (
                <LinkCard key={p.slug} href={p.liveUrl} label={`${p.title} — ${t.liveLink}`}>
                  {inner}
                </LinkCard>
              ) : (
                <Card key={p.slug}>{inner}</Card>
              );
            })}
          </div>
          <div style={{ marginTop: "1.25rem" }}>
            <Card>
              <p style={{ fontSize: ".9rem" }}>{t.note}</p>
            </Card>
          </div>
          <div style={{ marginTop: "2rem", display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="/contact/">
              {t.primaryCta}
            </a>
            <a className="btn btn-secondary" href="/">
              {t.secondaryCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
