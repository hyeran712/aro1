const fs = require('node:fs');
const pkg = require('../package.json');

// Netlify supplies URL for the site's domain, including a configured custom domain.
const site = new URL(process.env.ARO_SITE_URL || process.env.URL || pkg.homepage);
if (!['https:', 'http:'].includes(site.protocol)) throw new Error('Invalid site URL');
const base = site.href.replace(/\/$/, '');
const escaped = base.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const html = fs.readFileSync('build/index.html', 'utf8').replaceAll('__ARO_SITE_URL__', escaped);
fs.writeFileSync('build/index.html', html);
fs.writeFileSync('build/404.html', html);
console.log(`Share preview configured for ${base}`);
