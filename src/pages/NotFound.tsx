import { notFound } from "../texts/notFound";

export default function NotFound() {
  return (
    <main className="container" style={{ padding: "6rem 1.25rem", textAlign: "center" }} id="main">
      <p className="ltr" style={{ color: "var(--brand)", fontWeight: 800 }}>
        {notFound.code}
      </p>
      <h1>{notFound.title}</h1>
      <p style={{ color: "var(--text-dim)" }}>{notFound.sub}</p>
      <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
        <a className="btn btn-primary" href="/">
          {notFound.homeCta}
        </a>
        <a className="btn btn-secondary" href="/contact/">
          {notFound.contactCta}
        </a>
      </div>
    </main>
  );
}
