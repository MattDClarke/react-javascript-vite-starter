import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^react-dom$/, replacement: "react-dom/profiling" },
      { find: "scheduler/tracing", replacement: "scheduler/tracing-profiling" },
    ],
  },
  esbuild: {
    minifyIdentifiers: false,
    keepNames: true,
  },
});
