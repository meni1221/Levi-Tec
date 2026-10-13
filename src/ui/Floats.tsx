import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "../site";
import { common } from "../texts/common";
import type { A11yOption } from "../texts/common";
import { useA11y } from "./useA11y";

export default function Floats() {
  const t = common.floats;
  const wa = whatsappLink();
  const { modes, toggleMode, fontStep, resetA11y } = useA11y();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) firstBtnRef.current?.focus();
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.setAttribute("aria-expanded", "false");
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  const renderOption = (o: A11yOption, i: number) => {
    const ref = i === 0 ? firstBtnRef : undefined;
    if (o.kind === "font" && o.dir !== undefined) {
      const dir = o.dir;
      return (
        <button key={o.label} ref={ref} type="button" className="opt" data-font={dir} onClick={() => fontStep(dir)}>
          <i className={`ti ${o.icon}`} aria-hidden="true"></i> {o.label}
        </button>
      );
    }
    if (o.kind === "mode") {
      const key = o.key ?? "";
      return (
        <button
          key={o.label}
          ref={ref}
          type="button"
          className="opt"
          data-a11y={key}
          aria-pressed={!!modes[key]}
          onClick={() => toggleMode(key)}
        >
          <i className={`ti ${o.icon}`} aria-hidden="true"></i> {o.label}
        </button>
      );
    }
    return (
      <button key={o.label} ref={ref} type="button" className="opt" data-reset="1" onClick={resetA11y}>
        <i className={`ti ${o.icon}`} aria-hidden="true"></i> {o.label}
      </button>
    );
  };

  return (
    <>
      <div className="float-stack">
        <button
          ref={toggleRef}
          type="button"
          className="float-btn a11y"
          id="a11yToggle"
          aria-expanded={open}
          aria-controls="a11yPanel"
          aria-label={t.a11yButton}
          onClick={() => setOpen((o) => !o)}
        >
          <i className="ti ti-accessible" aria-hidden="true"></i>
        </button>
        {wa ? (
          <a className="float-btn wa" href={wa} target="_blank" rel="noopener noreferrer" aria-label={t.waButton}>
            <i className="ti ti-brand-whatsapp" aria-hidden="true"></i>
          </a>
        ) : (
          <a className="float-btn wa" href="/contact/" aria-label={t.contactButton}>
            <i className="ti ti-brand-whatsapp" aria-hidden="true"></i>
          </a>
        )}
      </div>
      <div
        className={`a11y-panel${open ? " open" : ""}`}
        id="a11yPanel"
        role="dialog"
        aria-label={t.panelLabel}
      >
        <h2>
          <i className="ti ti-accessible" aria-hidden="true"></i> {t.panelTitle}
        </h2>
        {common.a11yOptions.map(renderOption)}
      </div>
    </>
  );
}
