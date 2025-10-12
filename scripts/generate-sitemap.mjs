import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Generatore di sitemap ottimizzato per bekboard.it
// Estrae gli slug da src/services/mockWorks.ts e crea public/sitemap.xml

const projectRoot = resolve(process.cwd())
const siteUrl = 'https://bekboard.it'

console.log(`[sitemap] Generando sitemap per: ${siteUrl}`)

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

// URL principali del sito bekboard.it (solo route esistenti)
const urls = [
  '', // Homepage
  ...slugs.map((s) => `work/${s}`) // Portfolio works
]

const now = new Date().toISOString()

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    const loc = siteUrl ? `${siteUrl}/${u}`.replace(/([^:]\/)\/+/g, '$1').replace(/\/$/, '') : `/${u}`
    const priority = u === '' ? '1.0' : u.includes('work/') ? '0.8' : '0.6'
    const changefreq = u === '' ? 'weekly' : u.includes('work/') ? 'monthly' : 'monthly'
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>`

if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true })
}

writeFileSync(sitemapPath, xml)
console.log(`[sitemap] Generata sitemap con ${urls.length} URL in ${sitemapPath}`)
console.log(`[sitemap] URL inclusi: ${urls.slice(0, 5).join(', ')}${urls.length > 5 ? '...' : ''}`)


