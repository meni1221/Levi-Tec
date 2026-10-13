import { projects, processSteps } from "../texts";
import { home } from "../texts/home";
import { siteConfig } from "../site";
import { Badge, Card, CheckList, IconBadge, LinkCard, SectionHead, StackList } from "../ui/components";

export default function Home() {
  const h = home.hero;
  const pj = home.projects;
  const s = home.services;
  const w = home.why;
  const pr = home.process;
  const a = home.about;
  const c = home.cta;
  return (
    <main id="main">
      <div className="container hero" style={{ maxWidth: "56rem" }}>
        <div>
          <p className="pill">
            <span className="dot" aria-hidden="true"></span>
            {h.pill}
          </p>
          <h1>
            {h.titleA}
            <br />
            <span className="accent">{h.titleB}</span>
          </h1>
          <p className="hero-sub">{h.sub}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="/contact/">
              {h.primaryCta}
            </a>
            <a className="btn btn-secondary" href="/projects/">
              {h.secondaryCta}
            </a>
          </div>
          <div className="hero-points">
            {h.points.map((p) => (
              <div key={p.strong}>
                <strong>{p.strong}</strong>
                <span>{p.span}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hr-fade" aria-hidden="true"></div>
      <section className="section">
        <div className="container">
          <div>
            <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
          </div>
          <div className="grid grid-3">
            {s.cards.map((card) => (
              <Card key={card.title}>
                <IconBadge icon={card.icon} />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <CheckList items={card.points} />
                <a className="text-link" href="/services/">
                  {s.moreLink} <i className="ti ti-arrow-left" aria-hidden="true"></i>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div>
            <SectionHead eyebrow={pj.eyebrow} title={pj.title} lead={pj.lead} />
          </div>
          <div className="grid grid-3">
            {projects.map((p) => {
              const inner = (
                <>
                  <IconBadge icon={p.icon} />
                  <div style={{ marginTop: ".8rem", display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
                    <Badge>{p.category}</Badge>
                    <Badge>{pj.liveBadge}</Badge>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <StackList items={p.stack} />
                  <span className="text-link">
                    {pj.siteLink} <i className="ti ti-arrow-left" aria-hidden="true"></i>
                  </span>
                </>
              );
              return p.liveUrl ? (
                <LinkCard key={p.slug} href={p.liveUrl} label={`${p.title} — ${pj.siteLink}`}>
                  {inner}
                </LinkCard>
              ) : (
                <Card key={p.slug}>{inner}</Card>
              );
            })}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a className="btn btn-secondary" href="/projects/">
              {pj.allLink}
            </a>
          </div>
        </div>
      </section>
      <section className="section light">
        <div className="container">
          <div>
            <SectionHead eyebrow={w.eyebrow} title={w.title} lead={w.lead} />
          </div>
          <div className="grid grid-4">
            {w.cards.map((card) => (
              <Card
                key={card.title}
                style={{ background: "#fff", borderColor: "#e2e1dd", color: "#16181d" }}
              >
                <IconBadge icon={card.icon} />
                <h3>{card.title}</h3>
                <p style={{ color: "#3d434e" }}>{card.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div>
            <SectionHead eyebrow={pr.eyebrow} title={pr.title} lead={pr.lead} />
          </div>
          <div className="grid grid-4">
            {processSteps.map((st) => (
              <Card key={st.n}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".5rem",
                    color: "var(--brand)",
                    fontWeight: 800,
                  }}
                >
                  <i className={`ti ${st.icon}`} aria-hidden="true"></i>
                  <span className="ltr">{st.n}</span>
                </span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a className="btn btn-secondary" href="/process/">
              {pr.fullLink}
            </a>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div>
            <SectionHead eyebrow={a.eyebrow} title={a.title} />
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Card>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span className="logo-mark" style={{ width: "5rem", height: "5rem", fontSize: "2rem" }} aria-hidden="true">
                  {a.mark}
                </span>
                <div>
                  <p style={{ fontWeight: 800, margin: 0 }}>{a.name}</p>
                  <p style={{ color: "var(--muted)", fontSize: ".9rem", margin: 0 }}>{a.role}</p>
                </div>
              </div>
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginTop: "1rem" }}>
                <a className="btn btn-secondary btn-sm" href="/about/">
                  {a.moreLink}
                </a>
                <a className="text-link" href="/contact/">
                  {a.contactLink} <i className="ti ti-arrow-left" aria-hidden="true"></i>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <div className="container">
        <div>
          <div className="cta-band">
            <h2>{c.title}</h2>
            <p style={{ color: "var(--text-dim)", maxWidth: "34rem", margin: "1rem auto" }}>{c.sub}</p>
            <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
              <a className="btn btn-primary" href="/contact/">
                {c.primary}
              </a>
              <a className="btn btn-secondary" href="/services/">
                {c.secondary}
              </a>
            </div>
            <p style={{ color: "var(--muted)", fontSize: ".9rem", marginTop: "1.25rem" }}>
              {c.mailPrefix}
              <a href={`mailto:${siteConfig.email}`} className="ltr" style={{ color: "var(--brand)" }}>
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
