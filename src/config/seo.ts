export type SiteSeoConfig = {
  siteName: string
  siteUrl: string
  defaultTitle: string
  defaultDescription: string
  defaultImage: string
}

export const siteSeoConfig: SiteSeoConfig = {
  siteName: import.meta.env.VITE_APP_NAME || 'Bekboard Studio',
  siteUrl: (import.meta as any).env.VITE_SITE_URL || '',
  defaultTitle: 'Bekboard Studio – Produzione video, branded content e videoclip',
  defaultDescription:
    'Studio di produzione video: branded content, videoclip musicali, documentari e spot. Trasformiamo idee in storie che funzionano.',
  defaultImage: `${(import.meta as any).env.VITE_SITE_URL || ''}/logo.png`,
}


