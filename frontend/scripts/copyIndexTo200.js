const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const src = path.join(buildDir, 'index.html');
const dest = path.join(buildDir, '200.html');

if (!fs.existsSync(src)) {
  console.error('build/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

fs.copyFileSync(src, dest);
console.log('200.html created in build directory');
