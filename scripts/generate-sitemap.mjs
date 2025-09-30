import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Semplice generatore di sitemap: estrae gli slug da src/services/mockWorks.ts e crea public/sitemap.xml
// Nota: usa una regex robusta per pattern slug: '...'

const projectRoot = resolve(process.cwd())
const siteUrl = process.env.VITE_SITE_URL || ''

if (!siteUrl) {
  console.warn('[sitemap] VITE_SITE_URL non impostata. Imposta VITE_SITE_URL per sitemap/canonical corretti.')
}

const mockWorksPath = resolve(projectRoot, 'src', 'services', 'mockWorks.ts')
const publicDir = resolve(projectRoot, 'public')
const sitemapPath = resolve(publicDir, 'sitemap.xml')

const src = readFileSync(mockWorksPath, 'utf8')
const slugRegex = /slug:\s*'([^']+)'/g
const slugs = []
let match
while ((match = slugRegex.exec(src)) !== null) {
  slugs.push(match[1])
}

const urls = [
  '',
  ...slugs.map((s) => `work/${s}`)
]

const now = new Date().toISOString()

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    const loc = siteUrl ? `${siteUrl}/${u}`.replace(/\/+/g, '/') : `/${u}`
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u === '' ? '1.0' : '0.6'}</priority>\n  </url>`
  })
  .join('\n')}
</urlset>`

if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true })
}

writeFileSync(sitemapPath, xml)
console.log(`[sitemap] Generata sitemap con ${urls.length} URL in ${sitemapPath}`)


