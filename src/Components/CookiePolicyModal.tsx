import { useEffect, useRef } from 'react'

interface CookiePolicyModalProps {
  open: boolean
  onClose: () => void
}

export default function CookiePolicyModal({ open, onClose }: CookiePolicyModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Blocca lo scroll quando la modale è aperta
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  // Carica lo script di Cookiebot Cookie Declaration dentro la modale
  useEffect(() => {
    if (!open || !containerRef.current) return

    const existing = document.getElementById('CookieDeclaration')
    if (existing) return

    const cookiebotId = (import.meta as any).env?.VITE_COOKIEBOT_ID || 'c18b5f27-caa2-415c-92fc-ff71559787a3'

    try {
      const script = document.createElement('script')
      script.id = 'CookieDeclaration'
      script.type = 'text/javascript'
      script.async = true
      script.src = `https://consent.cookiebot.com/${cookiebotId}/cd.js`
      containerRef.current.appendChild(script)
    } catch (error) {
      // Log in console per debugging
      // In caso di errori di rete o CSP, la dichiarazione non verrà caricata
      console.error('Errore nel caricamento della Cookie Declaration:', error)
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-black border border-white/20 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl md:text-2xl font-bold">Cookie Policy</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded cursor-pointer"
          >
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content: qui Cookiebot inietterà automaticamente la dichiarazione */}
        <div className="p-6 text-white/80">
          <div ref={containerRef} />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  )
}


