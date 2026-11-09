import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root,
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(root, "src")
    },
    dedupe: ["react", "react-dom"]
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  },
  build: {
    outDir: path.resolve(root, "dist"),
    emptyOutDir: true
  },
  preview: {
    host: "0.0.0.0",
    port: 4173
  }
});
