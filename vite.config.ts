import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ filename: "dist/bundle-analysis.html", open: false }),
  ],

  optimizeDeps: {
    exclude: ["lucide-react"],
  },

  server: {
    host: true,              // accept external hosts
    port: 7001,              // MUST match PM2 + Nginx
    allowedHosts: true       // allow all hosts
  },

  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },

  ssr: {
    noExternal: ["react-router-dom", "react-helmet-async"],
  },
});
