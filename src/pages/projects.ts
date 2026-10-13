import { initPage } from "../shared";
import { projects } from "../texts";
import { projectsPage } from "../texts/projectsPage";
import { badge, card, checkList, iconBadge, linkCard, sectionHead, stackList } from "../ui/components";

const t = projectsPage;

document.querySelector("#projectsHead")!.innerHTML = sectionHead(t.head.eyebrow, t.head.title, t.head.lead);

document.querySelector("#projectsList")!.innerHTML = projects
  .map((p) => {
    const inner = `
        ${iconBadge(p.icon)}
        <div style="margin-top:.8rem;display:flex;gap:.4rem;flex-wrap:wrap">${badge(p.category)}${badge(t.liveBadge)}</div>
        <h3 style="font-size:1.4rem">${p.title}</h3>
        <p>${p.summary}</p>
        <p style="font-size:.92rem"><strong>${t.problemLabel}</strong>${p.problem}</p>
        <p style="font-size:.92rem"><strong>${t.solutionLabel}</strong>${p.solution}</p>
        <h4 style="margin:1rem 0 .4rem">${t.featuresTitle}</h4>
        ${checkList(p.features)}
        ${stackList(p.stack)}
        <span class="text-link">${t.liveLink} <i class="ti ti-arrow-left" aria-hidden="true"></i></span>`;
    return p.liveUrl ? linkCard(p.liveUrl, `${p.title} — ${t.liveLink}`, inner) : card(inner);
  })
  .join("");

document.querySelector("#projectsNote")!.innerHTML =
  card(`<p style="font-size:.9rem">${t.note}</p>`);
document.querySelector("#projectsCtas")!.innerHTML = `
  <a class="btn btn-primary" href="/contact/">${t.primaryCta}</a>
  <a class="btn btn-secondary" href="/">${t.secondaryCta}</a>`;

initPage("projects");
