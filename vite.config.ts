import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    visualizer({ filename: "dist/bundle-analysis.html", open: false }),
  ],

  optimizeDeps: {
    include: ["lucide-react"],
  },

  server: {
    host: true,              // accept external hosts
    port: 7001,              // MUST match PM2 + Nginx
    allowedHosts: true       // allow all hosts
  },

  build: {
    rollupOptions: {
      input: isSsrBuild ? undefined : {
        main: "./index.html",
      },
      output: isSsrBuild ? {} : {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'vendor-ui': ['framer-motion', 'lucide-react', 'react-icons'],
          'vendor-data': ['@supabase/supabase-js', '@tanstack/react-query', 'axios'],
        },
      },
    },
  },

  ssr: {
    noExternal: ["react-router-dom", "react-helmet-async"],
  },
}));
