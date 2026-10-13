import { initPage } from "../shared";
import { services } from "../texts";
import { servicesPage } from "../texts/servicesPage";
import { badge, card, checkList, iconBadge, sectionHead } from "../ui/components";

const t = servicesPage;

document.querySelector("#servicesHead")!.innerHTML = sectionHead(t.head.eyebrow, t.head.title, t.head.lead);

document.querySelector("#servicesList")!.innerHTML = services
  .map(
    (s, i) =>
      card(`
        <p class="ltr" style="color:var(--brand);font-weight:800;margin:0">0${i + 1}</p>
        <span style="margin-top:.6rem;display:inline-block">${iconBadge(s.icon)}</span>
        <h3 style="font-size:1.5rem">${s.title}</h3>
        <p>${s.short}</p>
        <p style="font-size:.92rem"><strong>${t.problemLabel}</strong>${s.problem}</p>
        <p style="font-size:.92rem"><strong>${t.suitableLabel}</strong>${s.suitable}</p>
        <h4 style="margin:1rem 0 .4rem">${t.deliverTitle}</h4>
        ${checkList(s.deliverables)}
        <div style="margin-top:1rem;display:flex;gap:.4rem;flex-wrap:wrap">${s.workflow.map(badge).join("")}</div>
        <a class="btn btn-secondary btn-sm" style="margin-top:1.2rem" href="/contact/">${t.ctaPrefix}${s.title}</a>
      `)
  )
  .join("");

document.querySelector("#servicesTransparencyHead")!.innerHTML =
  sectionHead(t.transparency.eyebrow, t.transparency.title);
document.querySelector("#servicesTransparency")!.innerHTML = t.transparency.items
  .map((item) => card(`<i class="ti ti-check" aria-hidden="true"></i><p>${item}</p>`))
  .join("");
document.querySelector("#servicesCta")!.innerHTML =
  `<a class="btn btn-primary" href="/contact/">${t.transparency.cta}</a>`;

initPage("services");
