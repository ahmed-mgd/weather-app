import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/weather-app/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
