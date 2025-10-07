import React from 'react'
import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description?: string
  canonical?: string
  image?: string
  noindex?: boolean
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>
}

// Componente riutilizzabile per gestire meta tag, Open Graph, Twitter cards e JSON-LD
export default function SEO({ title, description, canonical, image, noindex, jsonLd }: SEOProps) {
  const siteName = 'Bekboard Studio'
  const siteUrl = 'https://bekboard.it'
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : '')

  const ogImage = image || `${siteUrl}/logo.png`

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}    
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD strutturato */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}


