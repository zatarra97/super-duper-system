import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import ShowreelModal from '../../Components/ShowreelModal'
import { mockWorks } from '../../services/mockWorks'
import { WorkCategory } from '../../types/work'

const categories: Array<'tutti' | WorkCategory> = ['tutti', 'Branded', 'Music Video', 'Eventi', 'Altri']

export default function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'tutti' | WorkCategory>('tutti')

  const filtered = useMemo(() => {
    if (selectedCategory === 'tutti') return mockWorks
    return mockWorks.filter(w => w.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="bg-black text-white">
      {/* Animazione di apertura semplice */}
      <div className="fixed inset-0 bg-black z-40 animate-[fadeout_1.2s_ease-out_forwards]" style={{animationDelay:'0.4s'}} />

      {/* Header fisso */}
      <Header onOpenInstagram={() => window.open('https://instagram.com', '_blank')} />

      {/* HERO con video di sfondo */}
      <section className="relative h-[20vh] sm:h-[40vh] md:h-[88vh] min-h-[150px] sm:min-h-[300px] md:min-h-[520px] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-contain sm:object-cover mt-16 sm:mt-20 md:mt-0" src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay loop muted />
        <div className="absolute inset-0 bg-black/20 sm:bg-gradient-to-t sm:from-black/70 sm:to-black/10" />

        <div className="relative z-10 h-full flex items-start justify-center md:items-center md:justify-center pt-4 sm:pt-6 md:pt-0 pb-8 sm:pb-12 md:pb-0">
          <button 
            onClick={() => setShowreelOpen(true)} 
            className="hidden sm:block group relative px-8 md:px-12 py-4 md:py-6 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 text-sm md:text-lg tracking-wider"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              SHOWREEL
            </span>
          </button>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="max-w-7xl mx-auto px-4 pt-8 sm:pt-12 md:pt-16 pb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">I nostri lavori</h2>

        {/* Filtri */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded border ${selectedCategory === c ? 'bg-white text-black' : 'border-white/40 hover:bg-white/10'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Griglia lavori */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(w => (
            <Link key={w.id} to={`/work/${w.slug}`} className="group relative rounded overflow-hidden">
              <img src={w.thumbnailUrl} alt={w.title} className="w-full h-56 object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 text-lg font-semibold">{w.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-3xl font-bold mb-4">Chi siamo</h3>
            <p className="text-white/80 leading-relaxed">
              Siamo uno studio creativo che segue l’intero processo: sviluppo idea, pre-produzione, produzione e post.
              Realizziamo videoclip, commercial e digital content con cura artigianale e visione contemporanea.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded">Vision: storie che restano.</div>
              <div className="p-4 bg-white/5 rounded">Mission: qualità, ritmo e verità.</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Team</h4>
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/150?img=${i}`} className="w-14 h-14 rounded-full object-cover"/>
                  <div>
                    <div className="font-medium">Nome Cognome</div>
                    <div className="text-white/70 text-sm">Ruolo</div>
                  </div>
                </div>
              ))}
            </div>
            <h4 className="font-semibold mt-8 mb-4">Clienti</h4>
            <div className="flex flex-wrap gap-4 opacity-80">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="px-3 py-2 bg-white/5 rounded">Logo {i}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-xl md:text-3xl font-bold mb-4">Raccontaci la tua idea</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <p className="text-white/80">Scrivici a <a className="underline" href="mailto:hello@studio.fake">hello@studio.fake</a><br/>Oppure chiamaci: <a className="underline" href="tel:+3900000000">+39 000 000 000</a></p>
          <div className="bg-white/5 rounded p-4">Niente form: contattaci via email o telefono.</div>
        </div>
      </section>

      {/* FOOTER con privacy */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-white/70 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Studio. Tutti i diritti riservati.</div>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </footer>

      <ShowreelModal open={showreelOpen} onClose={() => setShowreelOpen(false)} />

      <style>{`@keyframes fadeout{to{opacity:0;visibility:hidden}}`}</style>
    </div>
  )
}


