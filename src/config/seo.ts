export type SiteSeoConfig = {
  siteName: string
  siteUrl: string
  defaultTitle: string
  defaultDescription: string
  defaultImage: string
}

export const siteSeoConfig: SiteSeoConfig = {
  siteName: import.meta.env.VITE_APP_NAME || 'Bekboard Studio',
  siteUrl: (import.meta as any).env.VITE_SITE_URL || 'https://bekboard.it',
  defaultTitle: 'Bekboard Studio – Produzione Video Professionale | Branded Content & Videoclip',
  defaultDescription:
    'Bekboard Studio - Produzione video professionale: branded content, videoclip musicali, documentari e spot pubblicitari. Trasformiamo idee in storie che funzionano.',
  defaultImage: `${(import.meta as any).env.VITE_SITE_URL || 'https://bekboard.it'}/logo.png`,
}


