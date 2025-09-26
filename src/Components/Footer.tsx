import { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import CookiePolicyModal from "./CookiePolicyModal";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [cookieOpen, setCookieOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-white/10 text-center">
        <div className="max-w-8xl mx-auto px-4 py-8 text-sm text-white/70 text-center">
          <div>© {new Date().getFullYear()} <span className="font-bold capitalize">{import.meta.env.VITE_APP_NAME}</span>. Tutti i diritti riservati. <br/> Disegnato da <a className="underline" href="https://www.studio.it" target="_blank" rel="noopener noreferrer">Gianfilippo Pisicchio</a> e sviluppato da <a className="underline" href="https://www.linkedin.com/in/emmanuele-carlone-356b57211/" target="_blank" rel="noopener noreferrer">Emmanuele Carlone.</a></div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <div 
              onClick={() => setPrivacyOpen(true)}
              className="underline cursor-pointer inline-block"
            >
              Privacy Policy
            </div>
            <span className="text-white/40">|</span>
            <div 
              onClick={() => setCookieOpen(true)}
              className="underline cursor-pointer inline-block"
            >
              Cookie Policy
            </div>
          </div>
        </div>
      </footer>
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookiePolicyModal open={cookieOpen} onClose={() => setCookieOpen(false)} />

    </>
  )
}