import { useState } from "react";
import PrivacyModal from "./PrivacyModal";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-white/10 text-center">
        <div className="max-w-8xl mx-auto px-4 py-8 text-sm text-white/70 text-center">
          <div>© {new Date().getFullYear()} <span className="font-bold capitalize">{import.meta.env.VITE_APP_NAME}</span>. Tutti i diritti riservati. <br/> Disegnato da <a className="underline" href="https://www.studio.it" target="_blank" rel="noopener noreferrer">Gianfilippo Pisicchio</a> e sviluppato da <a className="underline" href="https://www.linkedin.com/in/emmanuele-carlone-356b57211/" target="_blank" rel="noopener noreferrer">Emmanuele Carlone.</a></div>
          <div 
            onClick={() => setPrivacyOpen(true)}
            className="underline cursor-pointer mt-8 block"
          >
            Privacy Policy
          </div>
        </div>
      </footer>
      
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  )
}