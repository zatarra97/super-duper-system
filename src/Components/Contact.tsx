export default function Contact() {
  return (
    <section id="contact" className="max-w-8xl mx-auto px-4 pt-10 pb-16">
      <h2 className="section-title">Contatti</h2>
      <div className="grid md:grid-cols-2 gap-8 justify-center mt-5">
        
        <div className="">
          <p className="text-2xl md:text-[40px] font-basic-bold font-semibold  text-white mt-2 text-left">
            Raccontaci la tua idea!
          </p>

          <p className="font-basic-light text-white/90 md:text-xl text-lg leading-10 mt-7 text-left md:text-left">
            <a className="hover:underline hover:text-white" href="mailto:info@bekboard.it">info@bekboard.it</a><br/>

            <a className="hover:underline hover:text-white" href="mailto:collab@bekboard.it">collab@bekboard.it</a><br/><br/>

            <a className="hover:underline hover:text-white" href="tel:+393274730600">+39 327 473 0600</a><br/><br/>
            <span>INSTAGRAM</span><br/>
            <a className="hover:underline hover:text-white" href="https://www.instagram.com/bekboardstudio?igsh=YmYwajd4bmlieWp6&utm_source=qr" target="_blank" rel="noopener noreferrer">@Bekboard</a>
            <br/><br/>
            <span>YOUTUBE</span><br/>
            <a className="hover:underline hover:text-white" href="www.youtube.com/@BekboardStudio" target="_blank" rel="noopener noreferrer">@Bekboard</a>
          </p>
        </div>

        <div className="justify-center md:pt-40 md:text-xl text-lg max-w-[580px] ml-auto">
          <p className="font-basic-light text-white/90 md:leading-11 leading-8 md:text-right">
          <span className="md:text-6xl text-4xl font-basic-italic">Psss!</span> Lavori nel settore dell'audiovisivo? <br/>Che tu viva di cavi aggrovigliati, luci smarmellate, trucchi sbavanti o export notturni, scrivici a <a className="font-tomarik-introvert text-primary hover:underline" href="mailto:collab@bekboard.it">collab@bekboard.it!</a>
          <br /><br />
          Siamo sempre alla ricerca di nuove figure professionali valide con cui collaborare, perché alla fine si sa che in realtà i cavi non si aggrovigliano mai da soli.
          </p>
        </div>
      </div>
    </section>
  )
}
