import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/style-symphony-sandbox-main/",
  // Ensure proper MIME types for TypeScript files
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
    manifest: true,
    sourcemap: true,
    // Copy the .nojekyll file to the output directory
    emptyOutDir: true,
    // Ensure all TypeScript files are processed as JavaScript
    // This prevents MIME type issues with GitHub Pages
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        assetFileNames: ({ name }) => {
          // Keep images in the Portfolio directory to match the references in the code
          if (name?.includes('og-image') || name?.includes('.png') || name?.includes('.jpg') || name?.includes('.jpeg') || name?.includes('.svg') || name?.includes('.gif') || name?.includes('.JPG')) {
            // Check if the file is in the Portfolio directory
            if (name?.includes('Portfolio/')) {
              // Don't add hash to Portfolio files to preserve exact filenames with spaces
              // Ensure the path is preserved exactly as is, including spaces
              const fileName = name.split('/').pop();
              return `Portfolio/${fileName}`;
            }
            return 'assets/images/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  }
}));
