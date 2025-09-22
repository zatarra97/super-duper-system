import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import Contact from '../../Components/Contact'
import FixedInstagram from '../../Components/FixedInstagram'
import { mockWorks } from '../../services/mockWorks'
import { WorkCategory } from '../../types/work'
import Footer from '../../Components/Footer'
import showreelHorizontal from '../../Images/Showreel_horizontal.mp4'
import showreelVertical from '../../Images/Showreel_vertical.mp4'
import scrollIcon from '../../Images/scroll.gif'

const categories: Array<'Tutti' | WorkCategory> = ['Tutti', 'Branded', 'Music Video', 'Altri']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'Tutti' | WorkCategory>('Tutti')
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(() => {
    if (selectedCategory === 'Tutti') return mockWorks
    return mockWorks.filter(w => w.category === selectedCategory)
  }, [selectedCategory])

  const displayedWorks = useMemo(() => {
    return showAll ? filtered : filtered.slice(0, 6)
  }, [filtered, showAll])

  return (
    <div className="bg-black text-white">
      {/* Animazione di apertura semplice */}
      <div className="fixed inset-0 bg-black z-40 animate-[fadeout_1.2s_ease-out_forwards]" style={{animationDelay:'0.4s'}} />

      {/* Header fisso */}
      <Header />

      {/* HERO con video di sfondo */}
      <section className="relative h-[40dvh] md:h-[88vh] min-h-screen overflow-hidden mobile-video-container">
        {/* Video orizzontale per desktop */}
        <video 
          className="absolute inset-0 w-full h-full object-cover hidden md:block" 
          src={showreelHorizontal} 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        {/* Video verticale per mobile */}
        <video 
          className="absolute inset-0 w-full h-full object-cover block md:hidden" 
          src={showreelVertical} 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="absolute inset-0 bg-black/20 sm:bg-gradient-to-t " />
        
        {/* Icona di scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <img 
            src={scrollIcon} 
            alt="Scroll down" 
            className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-50"
          />
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="max-w-8xl mx-auto px-4 pt-8 sm:pt-12 md:pt-16 pb-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {displayedWorks.map((w) => (
            <Link 
              key={w.id} 
              to={`/work/${w.slug}`} 
              className="group relative rounded overflow-hidden animate-fadeInUp"
            >
              <img src={w.thumbnailUrl} alt={w.title} className="w-full h-56 object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-lg font-semibold mb-2 text-white/90 group-hover:text-white transition-colors">{w.title}</h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{w.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pulsante Espandi */}
        {filtered.length > 6 && !showAll && (
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Altri progetti
            </button>
          </div>
        )}

        {/* Pulsante Riduci */}
        {showAll && filtered.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-2 text-white/70 hover:text-white border-b border-white/30 hover:border-white/60 transition-all duration-300 cursor-pointer"
            >
              Mostra meno
            </button>
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gradient-to-b from-zinc-900/60 to-zinc-800/40 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-8xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Chi siamo
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-transparent mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-white/90 leading-relaxed space-y-8 text-lg md:text-xl">
              <div className="relative">
                <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Facciamo video.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Trasformiamo idee confuse in video professionali seguendo l'intero processo, dall'idea iniziale fino all'ultimo frame in post-produzione: niente catene di montaggio, nessun passaparola, solo noi (e voi).
                </p>
              </div>
              
              <div className="">
                <div className=""></div>
                <p className="text-white/80 leading-relaxed">
                  Siamo concreti, professionali e flessibili. Ogni progetto è diverso dall'altro ma la passione e l'attenzione ai dettagli sono sempre le stesse.
                </p>
              </div>
              
              <div className="">
                <p className="text-white/80 leading-relaxed">
                  Branded content? Ci siamo. Video per i social che non sembrino fatti col cellulare del cugino? Anche. Videoclip musicali, eventi live, documentari aziendali, cortometraggi pubblicitari? Facciamo pure quelli.
                </p>
              </div>
              
              <div className="">
                <p className="text-white/80 leading-relaxed">
                  Prendiamo le vostre idee e ne facciamo storie che emozionano e funzionano, senza stress (più o meno).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* FOOTER con privacy */}
      <Footer />

      <FixedInstagram />

      <style>{`
        @keyframes fadeout{to{opacity:0;visibility:hidden}}
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
          opacity: 0;
        }
        
        /* Soluzione per viewport mobile dinamico */
        @media (max-width: 768px) {
          .mobile-video-container {
            height: 100dvh;
            height: 100vh; /* fallback per browser che non supportano dvh */
          }
        }
      `}</style>
    </div>
  )
}
