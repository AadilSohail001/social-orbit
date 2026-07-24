import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      test: /\.(png|jpe?g|webp|avif)$/i,
      png: { quality: 80, compressionLevel: 9, palette: true },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 60 },
      includePublic: true,
      logStats: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react-router")) return "vendor";
          if (id.includes("node_modules/framer-motion")) return "motion";
        },
      },
    },
    target: "es2020",
    cssMinify: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ["framer-motion"],
  },
});