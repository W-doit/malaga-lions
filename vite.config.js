import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import {
  getJsonLd,
  getMetaTagsHtml,
  getLlmsTxt,
  getSitemapXml,
  getRobotsTxt,
} from './src/seo/index.js';

function seoPlugin(siteUrl) {
  return {
    name: 'seo-aeo',
    transformIndexHtml(html) {
      const meta = getMetaTagsHtml(siteUrl);
      const jsonLd = `<script type="application/ld+json">${JSON.stringify(getJsonLd(siteUrl))}</script>`;
      return html.replace('<!-- SEO-INJECT -->', `${meta}\n    ${jsonLd}`);
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/llms.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end(getLlmsTxt(siteUrl));
          return;
        }
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(getSitemapXml(siteUrl));
          return;
        }
        if (req.url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end(getRobotsTxt(siteUrl));
          return;
        }
        next();
      });
    },
    closeBundle() {
      const out = path.resolve('dist');
      fs.writeFileSync(path.join(out, 'llms.txt'), getLlmsTxt(siteUrl));
      fs.writeFileSync(path.join(out, 'sitemap.xml'), getSitemapXml(siteUrl));
      fs.writeFileSync(path.join(out, 'robots.txt'), getRobotsTxt(siteUrl));
      // GitHub Pages: serve the SPA for direct links to /tienda, /contacto, etc.
      fs.copyFileSync(path.join(out, 'index.html'), path.join(out, '404.html'));
      fs.writeFileSync(path.join(out, '.nojekyll'), '');
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '');
  const base = env.VITE_BASE_PATH || '/';

  return {
    base,
    plugins: [react(), seoPlugin(siteUrl)],
  };
});
