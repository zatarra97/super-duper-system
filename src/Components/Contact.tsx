export default function Contact() {
  return (
    <section id="contact" className="max-w-8xl mx-auto px-4 py-16">
      <h3 className="text-xl md:text-3xl font-bold mb-8">Raccontaci la tua idea</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="">
          <p className="text-white/80 text-base md:text-lg">
            <strong>Scrivici a</strong><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="mailto:hello@studio.fake">hello@studio.fake</a><br/><br/>
            <strong>Oppure chiamaci:</strong><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="tel:+3900000000">+39 000 000 000</a><br/><br/>
            <strong>Seguici su:</strong><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
            <a className="underline font-semibold hover:text-white transition-colors" href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </p>
        </div>
        <div>
          <p className="text-white/80 leading-relaxed max-w-lg">
            Psss! Lavori nel settore dell'audiovisivo? Che tu viva di cavi aggrovigliati, luci smarmellate, trucchi sbavanti o export notturni, scrivici! Siamo sempre alla ricerca di nuove figure professionali valide con cui collaborare, perché alla fine si sa che in realtà i cavi non si aggrovigliano mai da soli.
          </p>
        </div>
      </div>
    </section>
  )
}
