import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Portfolio/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: ({ name }) => {
          // Keep images in the Portfolio directory to match the references in the code
          if (name?.includes('og-image') || name?.includes('.png') || name?.includes('.jpg') || name?.includes('.jpeg') || name?.includes('.svg') || name?.includes('.gif')) {
            // Check if the file is in the Portfolio directory
            if (name?.includes('Portfolio/')) {
              // Don't add hash to Portfolio files to preserve exact filenames with spaces
              return '[name][extname]';
            }
            return 'assets/images/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  }
}));
