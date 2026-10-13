import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        services: "services/index.html",
        projects: "projects/index.html",
        about: "about/index.html",
        process: "process/index.html",
        contact: "contact/index.html",
        accessibility: "accessibility/index.html",
        privacy: "privacy/index.html",
        notfound: "404.html",
      },
    },
  },
});
