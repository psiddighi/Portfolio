// Script to copy .nojekyll file to dist directory
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create empty .nojekyll file in dist directory
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

console.log('.nojekyll file created in dist directory');