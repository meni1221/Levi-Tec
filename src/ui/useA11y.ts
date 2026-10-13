import { useCallback, useEffect, useState } from "react";

const A11Y_KEY = "levitec-a11y";
const FONT_KEY = "levitec-font";

const MODES: Array<[string, string]> = [
  ["contrast", "a11y-contrast"],
  ["grayscale", "a11y-grayscale"],
  ["links", "a11y-links"],
  ["readable", "a11y-readable"],
  ["noanim", "a11y-no-anim"],
];

function readModes(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(A11Y_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function readFont(): number {
  return Number(localStorage.getItem(FONT_KEY) ?? "0");
}

export function useA11y() {
  const [modes, setModes] = useState<Record<string, boolean>>(readModes);
  const [font, setFont] = useState<number>(readFont);

  useEffect(() => {
    const root = document.documentElement;
    for (const [key, cls] of MODES) {
      root.classList.toggle(cls, !!modes[key]);
    }
    root.classList.toggle("a11y-font-1", font === 1);
    root.classList.toggle("a11y-font-2", font >= 2);
    document.querySelectorAll("[data-a11y]").forEach((b) => {
      const key = (b as HTMLElement).dataset.a11y ?? "";
      b.setAttribute("aria-pressed", String(!!modes[key]));
    });
  }, [modes, font]);

  const toggleMode = useCallback((key: string) => {
    setModes((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem(A11Y_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const fontStep = useCallback((dir: 1 | -1) => {
    setFont((prev) => {
      const next = Math.min(2, Math.max(0, prev + dir));
      localStorage.setItem(FONT_KEY, String(next));
      return next;
    });
  }, []);

  const resetA11y = useCallback(() => {
    localStorage.removeItem(A11Y_KEY);
    localStorage.removeItem(FONT_KEY);
    setModes({});
    setFont(0);
  }, []);

  return { modes, font, toggleMode, fontStep, resetA11y };
}
