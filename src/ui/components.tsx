import type { CSSProperties, ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}

export function IconBadge({ icon }: { icon: string }) {
  return (
    <span className="icon-badge">
      <i className={`ti ${icon}`} aria-hidden="true"></i>
    </span>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((p) => (
        <li key={p}>
          <i className="ti ti-check" aria-hidden="true"></i>
          {p}
        </li>
      ))}
    </ul>
  );
}

export function StackList({ items }: { items: string[] }) {
  return (
    <div className="ltr stack" style={{ direction: "ltr", textAlign: "left" }}>
      {items.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  );
}

export function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
}

export function LinkCard({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a className="card card-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  );
}
