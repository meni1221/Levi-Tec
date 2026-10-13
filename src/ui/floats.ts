import { whatsappLink } from "../site";
import { common } from "../texts/common";
import type { A11yOption } from "../texts/common";
import { applyA11y, wireA11yPanel } from "./a11y";

function renderOption(o: A11yOption): string {
  if (o.kind === "font" && o.dir !== undefined) {
    return `<button type="button" class="opt" data-font="${o.dir}"><i class="ti ${o.icon}" aria-hidden="true"></i> ${o.label}</button>`;
  }
  if (o.kind === "mode") {
    return `<button type="button" class="opt" data-a11y="${o.key ?? ""}" aria-pressed="false"><i class="ti ${o.icon}" aria-hidden="true"></i> ${o.label}</button>`;
  }
  return `<button type="button" class="opt" data-reset="1"><i class="ti ${o.icon}" aria-hidden="true"></i> ${o.label}</button>`;
}

export function mountFloats(): void {
  if (document.querySelector(".float-stack")) return;
  const t = common.floats;
  const wa = whatsappLink();
  const stack = document.createElement("div");
  stack.className = "float-stack";
  stack.innerHTML = `
    <button type="button" class="float-btn a11y" id="a11yToggle" aria-expanded="false" aria-controls="a11yPanel" aria-label="${t.a11yButton}">
      <i class="ti ti-accessible" aria-hidden="true"></i>
    </button>
    ${
      wa
        ? `<a class="float-btn wa" href="${wa}" target="_blank" rel="noopener noreferrer" aria-label="${t.waButton}"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i></a>`
        : `<a class="float-btn wa" href="/contact/" aria-label="${t.contactButton}"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i></a>`
    }`;
  document.body.appendChild(stack);

  const panel = document.createElement("div");
  panel.className = "a11y-panel";
  panel.id = "a11yPanel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", t.panelLabel);
  panel.innerHTML = `
    <h2><i class="ti ti-accessible" aria-hidden="true"></i> ${t.panelTitle}</h2>
    ${common.a11yOptions.map(renderOption).join("")}
  `;
  document.body.appendChild(panel);

  const toggle = stack.querySelector<HTMLButtonElement>("#a11yToggle");
  toggle?.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    if (open) panel.querySelector<HTMLButtonElement>("button")?.focus();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("open")) {
      panel.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.focus();
    }
  });
  wireA11yPanel(panel);
  applyA11y();
}
