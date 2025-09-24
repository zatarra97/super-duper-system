import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import Contact from '../../Components/Contact'
import FixedInstagram from '../../Components/FixedInstagram'
import ClientsCarousel from '../../Components/ClientsCarousel'
import { mockWorks } from '../../services/mockWorks'
import { WorkCategory } from '../../types/work'
import Footer from '../../Components/Footer'
import showreelHorizontal from '../../Images/Showreel_horizontal.mp4'
import showreelVertical from '../../Images/Showreel_vertical.mp4'
import scrollIcon from '../../Images/scroll.gif'

// Import delle immagini SVG per i filtri
import tuttiIcon from '../../Images/lavori/Tutti.svg'
import tuttiHoverIcon from '../../Images/lavori/Tutti_hover.svg'
import brandedIcon from '../../Images/lavori/Branded.svg'
import brandedHoverIcon from '../../Images/lavori/Branded_hover.svg'
import musicVideoIcon from '../../Images/lavori/Music Video.svg'
import musicVideoHoverIcon from '../../Images/lavori/Music Video_hover.svg'
import eventiIcon from '../../Images/lavori/Eventi.svg'
import eventiHoverIcon from '../../Images/lavori/Eventi_hover.svg'
import altriIcon from '../../Images/lavori/Altri.svg'
import altriHoverIcon from '../../Images/lavori/Altri_hover.svg'
import altriProgettiIcon from '../../Images/lavori/Altri_progetti.svg'
import altriProgettiHoverIcon from '../../Images/lavori/Altri_progetti_hover.svg'
import inostriLavoriImg from '../../Images/lavori/i_nostri_lavori.svg'
import chiSiamoImg from '../../Images/chi_siamo/chi_siamo.svg'

const categories: Array<'Tutti' | WorkCategory> = ['Tutti', 'Branded', 'Music Video', 'Eventi', 'Altri']

// Mappa delle categorie alle loro immagini SVG
const categoryIcons: Record<'Tutti' | 'Branded' | 'Music Video' | 'Eventi' | 'Altri', string> = {
  'Tutti': tuttiIcon,
  'Branded': brandedIcon,
  'Music Video': musicVideoIcon,
  'Eventi': eventiIcon,
  'Altri': altriIcon
}

// Mappa delle categorie alle loro immagini hover SVG
const categoryHoverIcons: Record<'Tutti' | 'Branded' | 'Music Video' | 'Eventi' | 'Altri', string> = {
  'Tutti': tuttiHoverIcon,
  'Branded': brandedHoverIcon,
  'Music Video': musicVideoHoverIcon,
  'Eventi': eventiHoverIcon,
  'Altri': altriHoverIcon
}

// Mappa delle classi personalizzate per le immagini hover
const categoryHoverClasses: Record<'Tutti' | 'Branded' | 'Music Video' | 'Eventi' | 'Altri', string> = {
  'Tutti': 'min-w-[65px] -mt-3 -ml-3 md:min-w-[90px] md:-mt-4.5 md:-ml-4',
  'Branded': 'min-w-[85px] -mt-4 -ml-3 md:min-w-[120px] md:-mt-6 md:-ml-3',
  'Music Video': 'min-w-[120px] -mt-5 -ml-3 md:min-w-[160px] md:-mt-7 md:-ml-2',
  'Eventi': 'min-w-[70px] -mt-3.5 -ml-3 md:min-w-[95px] md:-mt-4.5 md:-ml-3',
  'Altri': 'min-w-[65px] -mt-3 -ml-4 md:min-w-[85px] md:-mt-3.5 md:-ml-4'
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'Tutti' | WorkCategory>('Tutti')
  const [showAll, setShowAll] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoveredAltriProgetti, setHoveredAltriProgetti] = useState(false)

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
      <section id="works" className="max-w-8xl mx-auto px-4 pt-8 sm:pt-12 md:pt-16 pb-16 mt-10 mb-3">
        <img src={inostriLavoriImg} alt="I nostri lavori" className="text-center mx-auto h-10 md:h-14" />

        {/* Filtri */}
        <div className="flex flex-wrap gap-12 mb-8 justify-center mt-7">
          {categories.map(c => {
            const isSelected = selectedCategory === c
            const isHovered = hoveredCategory === c
            const shouldShowHover = isSelected || isHovered
            
            return (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                onMouseEnter={() => setHoveredCategory(c)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`p-3 transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <div className="relative">
                  {/* Immagine hover come sfondo */}
                  <img 
                    src={categoryHoverIcons[c as keyof typeof categoryHoverIcons]}
                    alt={c}
                    className={`absolute top-0 left-0 w-auto transition-all duration-300 z-0 ${
                      categoryHoverClasses[c as keyof typeof categoryHoverClasses]
                    } ${
                      shouldShowHover ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {/* Immagine originale */}
                  <img 
                    src={categoryIcons[c as keyof typeof categoryIcons]}
                    alt={c}
                    className="h-4 md:h-6 w-auto transition-all duration-300 relative z-10"
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Griglia lavori */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
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
              onMouseEnter={() => setHoveredAltriProgetti(true)}
              onMouseLeave={() => setHoveredAltriProgetti(false)}
              className="transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <img 
                src={hoveredAltriProgetti ? altriProgettiHoverIcon : altriProgettiIcon}
                alt="Altri progetti"
                className="h-8 md:h-10 w-auto transition-all duration-300"
              />
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
          <img src={chiSiamoImg} alt="I nostri lavori" className="text-center mx-auto h-10 md:h-14" />
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

      {/* CLIENTS CAROUSEL */}
      <ClientsCarousel />

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
