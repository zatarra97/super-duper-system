import { useEffect } from 'react'

interface PrivacyModalProps {
  open: boolean
  onClose: () => void
}

export default function PrivacyModal({ open, onClose }: PrivacyModalProps) {
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

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black border border-white/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl md:text-2xl font-bold">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded cursor-pointer"
          >
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4 text-white/80">
          <p>Questo sito non raccoglie dati personali tramite form o strumenti di registrazione.</p>
          <p>Non vengono utilizzati cookie di profilazione o di terze parti a fini di marketing.</p>
          <p>Eventuali dati personali inviati volontariamente dagli utenti tramite email saranno utilizzati esclusivamente per rispondere alle richieste e non saranno comunicati a terzi.</p>
          <p>Il sito utilizza solo cookie tecnici, necessari al corretto funzionamento delle pagine.</p>
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
