import { siteConfig } from "../site";
import { privacyPage } from "../texts/legal";
import { Card, CheckList, SectionHead } from "../ui/components";

export default function Privacy() {
  const t = privacyPage;
  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div>
            <SectionHead eyebrow={t.head.eyebrow} title={t.head.title} lead={t.head.lead} />
          </div>
          <div>
            <div style={{ marginTop: "2.5rem" }}>
              <Card>
                <h3>
                  <i className={`ti ${t.collected.icon}`} aria-hidden="true"></i> {t.collected.title}
                </h3>
                <CheckList items={t.collected.items} />
              </Card>
            </div>
            <div style={{ marginTop: "1.25rem" }}>
              <Card>
                <h3>
                  <i className={`ti ${t.contact.icon}`} aria-hidden="true"></i> {t.contact.title}
                </h3>
                <p>
                  {t.contact.emailLabel}{" "}
                  <a href={`mailto:${siteConfig.email}`} className="ltr" style={{ color: "var(--brand)" }}>
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  {t.contact.phoneLabel}{" "}
                  <a href={`tel:+${siteConfig.whatsappNumber}`} className="ltr" style={{ color: "var(--brand)" }}>
                    {t.contact.phoneDisplay}
                  </a>
                </p>
              </Card>
            </div>
            <p style={{ color: "var(--muted)", fontSize: ".85rem", marginTop: "1.5rem" }}>{t.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
