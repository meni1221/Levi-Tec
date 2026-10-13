export function badge(t: string): string {
  return `<span class="badge">${t}</span>`;
}

export function iconBadge(icon: string): string {
  return `<span class="icon-badge"><i class="ti ${icon}" aria-hidden="true"></i></span>`;
}

export function checkList(items: string[]): string {
  return `<ul>${items.map((p) => `<li><i class="ti ti-check" aria-hidden="true"></i>${p}</li>`).join("")}</ul>`;
}

export function stackList(items: string[]): string {
  return `<div class="ltr stack" style="direction:ltr;text-align:left">${items.map((s) => `<span>${s}</span>`).join("")}</div>`;
}

export function sectionHead(eyebrow: string, title: string, lead?: string): string {
  return `<p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ""}`;
}

export function card(inner: string): string {
  return `<div class="card">${inner}</div>`;
}

export function linkCard(href: string, label: string, inner: string): string {
  return `<a class="card card-link" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${inner}</a>`;
}
