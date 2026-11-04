// Script to copy .nojekyll file to dist directory
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');
const distAssetsDir = path.resolve(distDir, 'assets');
const rootAssetsDir = path.resolve(__dirname, 'assets');
const rootIndexPath = path.resolve(__dirname, 'index.html');
const publicDir = path.resolve(__dirname, 'public');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create empty .nojekyll file in dist directory
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
fs.copyFileSync(rootIndexPath, path.join(distDir, 'index.html'));

// GitHub Pages is currently serving this repository from main/root.
// Keep root assets in sync so the production root index can load the built app.
if (fs.existsSync(distAssetsDir)) {
  fs.rmSync(rootAssetsDir, { recursive: true, force: true });
  fs.cpSync(distAssetsDir, rootAssetsDir, { recursive: true });
}

if (fs.existsSync(publicDir)) {
  for (const entry of fs.readdirSync(publicDir)) {
    const source = path.join(publicDir, entry);
    const destination = path.join(__dirname, entry);

    fs.rmSync(destination, { recursive: true, force: true });
    fs.cpSync(source, destination, { recursive: true });
  }
}

console.log('.nojekyll file created in dist directory and root files synced');
