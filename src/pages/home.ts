import { initPage } from "../shared";
import { projects, processSteps } from "../texts";
import { home } from "../texts/home";
import { siteConfig } from "../site";
import { badge, card, checkList, iconBadge, linkCard, sectionHead, stackList } from "../ui/components";

const h = home.hero;

document.querySelector("#homeHero")!.innerHTML = `
  <p class="pill"><span class="dot" aria-hidden="true"></span>${h.pill}</p>
  <h1>${h.titleA}<br /><span class="accent">${h.titleB}</span></h1>
  <p class="hero-sub">${h.sub}</p>
  <div class="hero-cta">
    <a class="btn btn-primary" href="/contact/">${h.primaryCta}</a>
    <a class="btn btn-secondary" href="/projects/">${h.secondaryCta}</a>
  </div>
  <div class="hero-points">
    ${h.points.map((p) => `<div><strong>${p.strong}</strong><span>${p.span}</span></div>`).join("")}
  </div>`;

const pj = home.projects;
document.querySelector("#homeProjectsHead")!.innerHTML = sectionHead(pj.eyebrow, pj.title, pj.lead);
document.querySelector("#homeProjects")!.innerHTML = projects
  .map((p) => {
    const inner = `
        ${iconBadge(p.icon)}
        <div style="margin-top:.8rem;display:flex;gap:.4rem;flex-wrap:wrap">${badge(p.category)}${badge(pj.liveBadge)}</div>
        <h3>${p.title}</h3><p>${p.summary}</p>
        ${stackList(p.stack)}
        <span class="text-link">${pj.siteLink} <i class="ti ti-arrow-left" aria-hidden="true"></i></span>`;
    return p.liveUrl ? linkCard(p.liveUrl, `${p.title} — ${pj.siteLink}`, inner) : card(inner);
  })
  .join("");

const s = home.services;
document.querySelector("#homeServicesHead")!.innerHTML = sectionHead(s.eyebrow, s.title, s.lead);
document.querySelector("#homeServices")!.innerHTML = s.cards
  .map((c) =>
    card(`
      ${iconBadge(c.icon)}
      <h3>${c.title}</h3><p>${c.desc}</p>
      ${checkList(c.points)}
      <a class="text-link" href="/services/">${s.moreLink} <i class="ti ti-arrow-left" aria-hidden="true"></i></a>
    `)
  )
  .join("");

document.querySelector("#homeProjectsCta")!.innerHTML =
  `<a class="btn btn-secondary" href="/projects/">${pj.allLink}</a>`;

const w = home.why;
document.querySelector("#homeWhyHead")!.innerHTML = sectionHead(w.eyebrow, w.title, w.lead);
document.querySelector("#homeWhy")!.innerHTML = w.cards
  .map(
    (c) =>
      `<div class="card" style="background:#fff;border-color:#e2e1dd;color:#16181d">${iconBadge(c.icon)}<h3>${c.title}</h3><p style="color:#3d434e">${c.text}</p></div>`
  )
  .join("");

const pr = home.process;
document.querySelector("#homeProcessHead")!.innerHTML = sectionHead(pr.eyebrow, pr.title, pr.lead);
document.querySelector("#homeProcess")!.innerHTML = processSteps
  .map(
    (st) =>
      card(`
        <span style="display:inline-flex;align-items:center;gap:.5rem;color:var(--brand);font-weight:800"><i class="ti ${st.icon}" aria-hidden="true"></i><span class="ltr">${st.n}</span></span>
        <h3>${st.title}</h3><p>${st.text}</p>
      `)
  )
  .join("");
document.querySelector("#homeProcessCta")!.innerHTML =
  `<a class="btn btn-secondary" href="/process/">${pr.fullLink}</a>`;

const a = home.about;
document.querySelector("#homeAboutHead")!.innerHTML = sectionHead(a.eyebrow, a.title);
document.querySelector("#homeAbout")!.innerHTML = card(`
  <div style="display:flex;gap:1rem;align-items:flex-start">
    <span class="logo-mark" style="width:5rem;height:5rem;font-size:2rem" aria-hidden="true">${a.mark}</span>
    <div><p style="font-weight:800;margin:0">${a.name}</p><p style="color:var(--muted);font-size:.9rem;margin:0">${a.role}</p></div>
  </div>
  <p>${a.p1}</p>
  <p>${a.p2}</p>
  <div style="display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1rem">
    <a class="btn btn-secondary btn-sm" href="/about/">${a.moreLink}</a>
    <a class="text-link" href="/contact/">${a.contactLink} <i class="ti ti-arrow-left" aria-hidden="true"></i></a>
  </div>`);

const c = home.cta;
document.querySelector("#homeCta")!.innerHTML = `
  <div class="cta-band">
    <h2>${c.title}</h2>
    <p style="color:var(--text-dim);max-width:34rem;margin:1rem auto">${c.sub}</p>
    <div style="display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap;margin-top:2rem">
      <a class="btn btn-primary" href="/contact/">${c.primary}</a>
      <a class="btn btn-secondary" href="/services/">${c.secondary}</a>
    </div>
    <p style="color:var(--muted);font-size:.9rem;margin-top:1.25rem">${c.mailPrefix}<a href="mailto:${siteConfig.email}" class="ltr" style="color:var(--brand)">${siteConfig.email}</a></p>
  </div>`;

initPage("index");
