import { initPage } from "../shared";
import { siteConfig, whatsappLink } from "../site";
import { buildWaText, contactPage } from "../texts/contactPage";
import { sectionHead } from "../ui/components";

const t = contactPage;

initPage("contact");

document.querySelector("#contactHead")!.innerHTML = sectionHead(t.head.eyebrow, t.head.title, t.head.lead);

document.querySelector("#contactQuick")!.innerHTML = `
  <div class="card">
    <h3><i class="ti ${t.quick.icon}" aria-hidden="true"></i> ${t.quick.title}</h3>
    <p>${t.quick.emailLabel} <a href="mailto:${siteConfig.email}" class="ltr" style="color:var(--brand)">${siteConfig.email}</a></p>
    <p><a id="waDirect" class="btn btn-primary btn-sm" href="/contact/"><i class="ti ${t.quick.waIcon}" aria-hidden="true"></i> ${t.quick.waCta}</a></p>
    <p class="ltr" style="color:var(--muted);font-size:.9rem">${t.quick.phoneDisplay}</p>
  </div>`;

document.querySelector("#contactFormWrap")!.innerHTML = `
  <form id="contactForm" class="form-card" novalidate aria-label="${t.form.aria}">
    <div class="form-grid form-grid-2">
      <div>
        <label for="name">${t.form.nameLabel}</label>
        <input id="name" name="name" required autocomplete="name" placeholder="${t.form.namePlaceholder}" />
      </div>
      <div>
        <label for="business">${t.form.businessLabel}</label>
        <input id="business" name="business" autocomplete="organization" placeholder="${t.form.businessPlaceholder}" />
      </div>
    </div>
    <div class="form-grid form-grid-2" style="margin-top:1.25rem">
      <div>
        <label for="contact">${t.form.contactLabel}</label>
        <input id="contact" name="contact" required autocomplete="email" class="ltr" style="text-align:left" placeholder="${t.form.contactPlaceholder}" />
      </div>
      <div>
        <label for="service">${t.form.serviceLabel}</label>
        <select id="service" name="service">
          ${t.form.serviceOptions.map((o) => `<option>${o}</option>`).join("")}
        </select>
      </div>
    </div>
    <div style="margin-top:1.25rem">
      <label for="message">${t.form.messageLabel}</label>
      <textarea id="message" name="message" required rows="5" minlength="10" placeholder="${t.form.messagePlaceholder}"></textarea>
    </div>
    <div style="margin-top:1.25rem;display:flex;gap:.75rem;align-items:flex-start">
      <input id="privacy" name="privacy" type="checkbox" required style="width:1.25rem;height:1.25rem;margin-top:.3rem;accent-color:#ff7628" />
      <label for="privacy" style="font-weight:400;font-size:.9rem;color:var(--text-dim)">${t.form.privacyLabel}</label>
    </div>
    <button type="submit" class="btn btn-primary" style="margin-top:1.5rem;width:100%">
      <i class="ti ${t.form.submitIcon}" aria-hidden="true"></i> ${t.form.submit}
    </button>
    <div id="formStatus" aria-live="polite"></div>
    <p style="color:var(--muted);font-size:.8rem;margin-top:1rem">${t.form.note}</p>
  </form>`;

const form = document.querySelector<HTMLFormElement>("#contactForm");
const status = document.querySelector("#formStatus");
const m = t.messages;

const waDirect = document.querySelector<HTMLAnchorElement>("#waDirect");
const waDefault = whatsappLink();
if (waDirect && waDefault) {
  waDirect.href = waDefault;
  waDirect.target = "_blank";
  waDirect.rel = "noopener noreferrer";
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form || !status) return;
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const business = String(data.get("business") ?? "").trim();
  const contact = String(data.get("contact") ?? "").trim();
  const service = String(data.get("service") ?? "");
  const message = String(data.get("message") ?? "").trim();
  const privacy = data.get("privacy") === "on";

  const fail = (msg: string) => {
    status.innerHTML = `<p class="notice err" role="alert">${msg}</p>`;
  };
  if (name.length < 2) return fail(m.nameRequired);
  if (!contact || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) && contact.replace(/\D/g, "").length < 9)
    return fail(m.contactInvalid);
  if (message.length < 10) return fail(m.messageShort);
  if (!privacy) return fail(m.privacyRequired);

  const text = buildWaText(name, business, service, message);
  const wa = whatsappLink(text);
  if (wa) {
    window.open(wa, "_blank", "noopener");
    status.innerHTML = `<p class="notice ok" role="status">${m.successWa}</p>`;
  } else {
    const mail = `mailto:${siteConfig.email}?subject=${encodeURIComponent(m.mailSubjectPrefix + name)}&body=${encodeURIComponent(text + "\n" + m.contactLinePrefix + contact)}`;
    window.location.href = mail;
    status.innerHTML = `<p class="notice ok" role="status">${m.successMail}</p>`;
  }
  form.reset();
});
