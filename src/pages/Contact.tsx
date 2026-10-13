import { useState } from "react";
import type { FormEvent } from "react";
import { siteConfig, whatsappLink } from "../site";
import { buildWaText, contactPage } from "../texts/contactPage";
import { SectionHead } from "../ui/components";

export default function Contact() {
  const t = contactPage;
  const m = t.messages;
  const waDefault = whatsappLink();
  const [status, setStatus] = useState<{ kind: "err" | "ok"; text: string } | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const privacy = data.get("privacy") === "on";

    if (name.length < 2) return setStatus({ kind: "err", text: m.nameRequired });
    if (!contact || (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) && contact.replace(/\D/g, "").length < 9))
      return setStatus({ kind: "err", text: m.contactInvalid });
    if (message.length < 10) return setStatus({ kind: "err", text: m.messageShort });
    if (!privacy) return setStatus({ kind: "err", text: m.privacyRequired });

    const text = buildWaText(name, business, service, message);
    const wa = whatsappLink(text);
    if (wa) {
      window.open(wa, "_blank", "noopener");
      setStatus({ kind: "ok", text: m.successWa });
    } else {
      const mail = `mailto:${siteConfig.email}?subject=${encodeURIComponent(m.mailSubjectPrefix + name)}&body=${encodeURIComponent(text + "\n" + m.contactLinePrefix + contact)}`;
      window.location.href = mail;
      setStatus({ kind: "ok", text: m.successMail });
    }
    form.reset();
  };

  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div>
            <SectionHead eyebrow={t.head.eyebrow} title={t.head.title} lead={t.head.lead} />
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr", marginTop: "2.5rem" }}>
            <div>
              <div className="card">
                <h3>
                  <i className={`ti ${t.quick.icon}`} aria-hidden="true"></i> {t.quick.title}
                </h3>
                <p>
                  {t.quick.emailLabel}{" "}
                  <a href={`mailto:${siteConfig.email}`} className="ltr" style={{ color: "var(--brand)" }}>
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <a
                    id="waDirect"
                    className="btn btn-primary btn-sm"
                    href={waDefault ?? "/contact/"}
                    target={waDefault ? "_blank" : undefined}
                    rel={waDefault ? "noopener noreferrer" : undefined}
                  >
                    <i className={`ti ${t.quick.waIcon}`} aria-hidden="true"></i> {t.quick.waCta}
                  </a>
                </p>
                <p className="ltr" style={{ color: "var(--muted)", fontSize: ".9rem" }}>
                  {t.quick.phoneDisplay}
                </p>
              </div>
            </div>
            <div>
              <form id="contactForm" className="form-card" noValidate aria-label={t.form.aria} onSubmit={onSubmit}>
                <div className="form-grid form-grid-2">
                  <div>
                    <label htmlFor="name">{t.form.nameLabel}</label>
                    <input id="name" name="name" required autoComplete="name" placeholder={t.form.namePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="business">{t.form.businessLabel}</label>
                    <input
                      id="business"
                      name="business"
                      autoComplete="organization"
                      placeholder={t.form.businessPlaceholder}
                    />
                  </div>
                </div>
                <div className="form-grid form-grid-2" style={{ marginTop: "1.25rem" }}>
                  <div>
                    <label htmlFor="contact">{t.form.contactLabel}</label>
                    <input
                      id="contact"
                      name="contact"
                      required
                      autoComplete="email"
                      className="ltr"
                      style={{ textAlign: "left" }}
                      placeholder={t.form.contactPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="service">{t.form.serviceLabel}</label>
                    <select id="service" name="service" defaultValue={t.form.serviceOptions[0]}>
                      {t.form.serviceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: "1.25rem" }}>
                  <label htmlFor="message">{t.form.messageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={10}
                    placeholder={t.form.messagePlaceholder}
                  ></textarea>
                </div>
                <div style={{ marginTop: "1.25rem", display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    style={{ width: "1.25rem", height: "1.25rem", marginTop: ".3rem", accentColor: "#ff7628" }}
                  />
                  <label htmlFor="privacy" style={{ fontWeight: 400, fontSize: ".9rem", color: "var(--text-dim)" }}>
                    {t.form.privacyLabel}
                  </label>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: "1.5rem", width: "100%" }}>
                  <i className={`ti ${t.form.submitIcon}`} aria-hidden="true"></i> {t.form.submit}
                </button>
                <div id="formStatus" aria-live="polite">
                  {status ? (
                    status.kind === "err" ? (
                      <p className="notice err" role="alert">
                        {status.text}
                      </p>
                    ) : (
                      <p className="notice ok" role="status">
                        {status.text}
                      </p>
                    )
                  ) : null}
                </div>
                <p style={{ color: "var(--muted)", fontSize: ".8rem", marginTop: "1rem" }}>{t.form.note}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
