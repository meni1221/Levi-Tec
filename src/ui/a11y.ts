const A11Y_KEY = "levitec-a11y";
const FONT_KEY = "levitec-font";

function readModes(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(A11Y_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function applyA11y(): void {
  const root = document.documentElement;
  const saved = readModes();
  const modes: Array<[string, string]> = [
    ["contrast", "a11y-contrast"],
    ["grayscale", "a11y-grayscale"],
    ["links", "a11y-links"],
    ["readable", "a11y-readable"],
    ["noanim", "a11y-no-anim"],
  ];
  for (const [key, cls] of modes) {
    root.classList.toggle(cls, !!saved[key]);
    document.querySelectorAll(`[data-a11y="${key}"]`).forEach((b) => {
      b.setAttribute("aria-pressed", String(!!saved[key]));
    });
  }
  const font = Number(localStorage.getItem(FONT_KEY) ?? "0");
  root.classList.toggle("a11y-font-1", font === 1);
  root.classList.toggle("a11y-font-2", font >= 2);
}

export function toggleMode(key: string): void {
  const saved = readModes();
  saved[key] = !saved[key];
  localStorage.setItem(A11Y_KEY, JSON.stringify(saved));
  applyA11y();
}

export function fontStep(dir: 1 | -1): void {
  const font = Number(localStorage.getItem(FONT_KEY) ?? "0");
  localStorage.setItem(FONT_KEY, String(Math.min(2, Math.max(0, font + dir))));
  applyA11y();
}

export function resetA11y(): void {
  localStorage.removeItem(A11Y_KEY);
  localStorage.removeItem(FONT_KEY);
  applyA11y();
}

export function wireA11yPanel(panel: HTMLElement): void {
  panel.querySelectorAll<HTMLButtonElement>("[data-a11y]").forEach((b) => {
    b.addEventListener("click", () => toggleMode(b.dataset.a11y ?? ""));
  });
  panel.querySelectorAll<HTMLButtonElement>("[data-font]").forEach((b) => {
    b.addEventListener("click", () => fontStep(Number(b.dataset.font) === 1 ? 1 : -1));
  });
  panel.querySelector("[data-reset]")?.addEventListener("click", resetA11y);
}
