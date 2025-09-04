import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ filename: 'dist/bundle-analysis.html', open: true }),],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  ssr: {
    noExternal: ['react-router-dom', 'react-helmet-async']
  }
});
