export default function Contact() {
  return (
    <section id="contact" className="max-w-8xl mx-auto px-4 pt-10 pb-16">
      <h2 className="section-title">Contatti</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="">
          <p className="text-white/80 text-base md:text-lg">
            <strong>Scrivici a</strong><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="mailto:info@bekboard.it">info@bekboard.it</a><br/><br/>
            <strong>Email per professionisti:</strong><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="mailto:collab@bekboard.it">collab@bekboard.it</a><br/><br/>
            <strong>Oppure chiamaci:</strong><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="tel:+393274730600">+39 327 473 0600</a><br/><br/>
            <strong>Seguici su:</strong><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="https://www.instagram.com/bekboardstudio?igsh=YmYwajd4bmlieWp6&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="www.youtube.com/@BekboardStudio" target="_blank" rel="noopener noreferrer">YouTube</a>
          </p>
        </div>
        <div>
          <p className="text-white/80 leading-relaxed max-w-lg">
          Psss! Lavori nel settore dell’audiovisivo? Che tu viva di cavi aggrovigliati, luci smarmellate, trucchi sbavanti o export notturni, scrivici a <a className="underline font-semibold hover:text-white transition-colors" href="mailto:collab@bekboard.it">collab@bekboard.it</a>! 
          <br /><br />
          Siamo sempre alla ricerca di nuove figure professionali valide con cui collaborare, perché alla fine si sa che in realtà i cavi non si aggrovigliano mai da soli.
          </p>
        </div>
      </div>
    </section>
  )
}
