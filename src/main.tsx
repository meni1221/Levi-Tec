import { StrictMode } from "react";
import type { ComponentType } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./ui/Footer";
import Floats from "./ui/Floats";
import Header from "./ui/Header";
import { common } from "./texts/common";
import About from "./pages/About";
import Accessibility from "./pages/Accessibility";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Process from "./pages/Process";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

const PAGES: Record<string, { active: string; Page: ComponentType }> = {
  home: { active: "index", Page: Home },
  services: { active: "services", Page: Services },
  projects: { active: "projects", Page: Projects },
  about: { active: "about", Page: About },
  process: { active: "process", Page: Process },
  contact: { active: "contact", Page: Contact },
  accessibility: { active: "", Page: Accessibility },
  privacy: { active: "", Page: Privacy },
  notfound: { active: "", Page: NotFound },
};

const rootEl = document.getElementById("root");
if (rootEl) {
  const key = rootEl.dataset.page ?? "home";
  const { active, Page } = PAGES[key] ?? PAGES.notfound;

  const skip = document.querySelector(".skip-link");
  if (skip && !skip.textContent?.trim()) skip.textContent = common.skipLink;

  createRoot(rootEl).render(
    <StrictMode>
      <Header active={active} />
      <Page />
      <Footer />
      <Floats />
    </StrictMode>,
  );
}
