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
        <div className="p-6 space-y-5 text-white/80">
          <div>
            <h3 className="font-semibold text-white mb-2">Titolare del trattamento</h3>
            <p>Bekboard Studio – contatti: <a className="underline" href="mailto:info@bekboard.it">info@bekboard.it</a></p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Dati trattati e finalità</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dati di navigazione e log tecnici, necessari all’erogazione del sito.</li>
              <li>Nessun form di raccolta attivo: contatto solo tramite email o telefono indicati nella pagina.</li>
              <li>Contenuti incorporati da terze parti (YouTube) nelle pagine di dettaglio dei lavori.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Cookie e gestione del consenso</h3>
            <p>Questo sito utilizza Cookiebot come CMP con blocco preventivo. I cookie non tecnici vengono installati solo previo consenso, che puoi modificare o revocare in qualsiasi momento.</p>
            <p>Consulta la sezione “Cookie Policy” per l’elenco completo e i tempi di conservazione dei cookie.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Terze parti</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>YouTube (Google Ireland Ltd.) per l’embed dei video: può impostare cookie di terze parti; base giuridica: consenso.</li>
              <li>CDN esterne per asset (es. Font Awesome, Flowbite): ricevono l’indirizzo IP per la corretta erogazione dei contenuti.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Base giuridica e conservazione</h3>
            <p>Base giuridica: esecuzione di misure precontrattuali/contrattuali per i cookie tecnici; consenso per i cookie non tecnici e servizi terzi. Le durate sono indicate nella “Cookie Policy”.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Diritti dell’interessato</h3>
            <p>Puoi esercitare i diritti di accesso, rettifica, cancellazione, limitazione, opposizione, portabilità e proporre reclamo al Garante per la protezione dei dati personali.</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex flex-wrap gap-3 justify-end">
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
