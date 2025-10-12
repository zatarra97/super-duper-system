import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import SEO from '../../Components/SEO'
import { siteSeoConfig } from '../../config/seo'
import Contact from '../../Components/Contact'
import FixedInstagram from '../../Components/FixedInstagram'
import ClientsCarousel from '../../Components/ClientsCarousel'
import { mockWorks } from '../../services/mockWorks'
import { WorkCategory } from '../../types/work'
import Footer from '../../Components/Footer'
import showreelHorizontal from '../../Images/Showreel_horizontal.mp4'
import showreelVertical from '../../Images/Showreel_vertical.mp4'
import scrollIcon from '../../Images/scroll.gif'
import animationVideo from '../../Images/Animation.mp4'
import PatternCosaFacciamo from '../../Images/Pattern_cosa_facciamo.svg'

// Mostra l'intro solo alla prima visita finché la SPA resta caricata
let hasIntroPlayedForCurrentLoad = false

// Import delle immagini SVG per i filtri
// import base icons non più utilizzate
import tuttiHoverIcon from '../../Images/lavori/Tutti_hover.svg'
import brandedHoverIcon from '../../Images/lavori/Branded_hover.svg'
import musicVideoHoverIcon from '../../Images/lavori/Music Video_hover.svg'
import eventiHoverIcon from '../../Images/lavori/Eventi_hover.svg'
import altriHoverIcon from '../../Images/lavori/Altri_hover.svg'

const categories: Array<'Tutti' | WorkCategory> = ['Tutti', 'Branded', 'Music Video', 'Eventi', 'Altri']

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
  'Tutti': 'min-w-[65px] -mt-2 -ml-3 md:min-w-[80px] md:-mt-2.5 md:-ml-4',
  'Branded': 'min-w-[85px] -mt-2.5 -ml-3 md:min-w-[100px] md:-mt-3.5 md:-ml-3',
  'Music Video': 'min-w-[110px] -mt-3.5 -ml-3 md:min-w-[135px] md:-mt-4.5 md:-ml-3.5',
  'Eventi': 'min-w-[70px] -mt-2 -ml-3 md:min-w-[80px] md:-mt-2.5 md:-ml-3',
  'Altri': 'min-w-[65px] -mt-1.5 -ml-4 md:min-w-[75px] md:-mt-2 md:-ml-4'
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'Tutti' | WorkCategory>('Tutti')
  const [showAll, setShowAll] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  // stato hover su "Altri progetti" non più necessario
  const [introActive, setIntroActive] = useState(!hasIntroPlayedForCurrentLoad)
  const [fadeOutIntro, setFadeOutIntro] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Nasconde il banner Cookiebot durante l'animazione, poi lo mostra
  useEffect(() => {
    const setCookiebotVisibility = (visible: boolean) => {
      const dialog = document.getElementById('CybotCookiebotDialog') as HTMLElement | null
      if (dialog) {
        dialog.style.display = visible ? '' : 'none'
      }
    }

    if (introActive) {
      setCookiebotVisibility(false)
      const observer = new MutationObserver(() => setCookiebotVisibility(false))
      observer.observe(document.body, { childList: true, subtree: true })
      return () => {
        observer.disconnect()
        setCookiebotVisibility(true)
      }
    } else {
      setCookiebotVisibility(true)
    }
  }, [introActive])

  const endIntro = () => {
    setFadeOutIntro(true)
    hasIntroPlayedForCurrentLoad = true
    setTimeout(() => setIntroActive(false), 800)
  }

  // Se si esce dalla Home, segnamo comunque l'intro come vista per questa sessione SPA
  useEffect(() => {
    return () => {
      hasIntroPlayedForCurrentLoad = true
    }
  }, [])

  const filtered = useMemo(() => {
    if (selectedCategory === 'Tutti') return mockWorks
    return mockWorks.filter(w => w.category === selectedCategory)
  }, [selectedCategory])

  const displayedWorks = useMemo(() => {
    return showAll ? filtered : filtered.slice(0, 6)
  }, [filtered, showAll])

  return (
    <div className="bg-black text-white">
      <SEO 
        title={siteSeoConfig.defaultTitle}
        description={siteSeoConfig.defaultDescription}
        image={siteSeoConfig.defaultImage}
        canonical={siteSeoConfig.siteUrl}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteSeoConfig.siteName,
            url: siteSeoConfig.siteUrl,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteSeoConfig.siteUrl}/?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Bekboard Studio',
            url: siteSeoConfig.siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: siteSeoConfig.defaultImage,
              width: 512,
              height: 512
            },
            description: 'Bekboard Studio - Produzione video professionale: branded content, videoclip musicali, documentari e spot pubblicitari.',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'Italian'
            }
          }
        ]}
      />
      {/* Animazione di apertura full-screen con dissolvenza finale */}
      {introActive && (
        <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center ${fadeOutIntro ? 'animate-[fadeout_0.8s_ease-out_forwards]' : ''}`}>
          <video
            ref={videoRef}
            className="min-w-full md:min-w-72 md:max-w-72 object-cover intro-zoom"
            src={animationVideo}
            autoPlay
            muted
            playsInline
            onEnded={endIntro}
          />
        </div>
      )}

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
      <section id="works" className="max-w-8xl mx-auto px-4 pt-8 sm:pt-12 md:pt-16 md:pb-16 pb-10 mt-10 mb-3">
        <h2 className="section-title">I nostri lavori</h2>

        {/* Filtri */}
        <div className="flex flex-wrap md:gap-12 gap-x-5  mb-8 justify-center md:mt-7 mt-2">
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
                    className={`absolute top-0 left-0 w-auto transition-all duration-300 z-10 ${
                      categoryHoverClasses[c as keyof typeof categoryHoverClasses]
                    } ${
                      shouldShowHover ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {/* Immagine originale */}
                  <p className="font-tomarik text-xl md:text-2xl relative z-30">{c}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Griglia lavori */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:mt-10 -mt-4">
          {displayedWorks.map((w) => (
            <Link 
              key={w.id} 
              to={`/work/${w.slug}`} 
              className="group relative rounded overflow-hidden animate-fadeInUp"
            >
              <img src={w.thumbnailUrl} alt={w.title} className="w-full h-56 object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-[400px] mx-auto">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors font-basic-light text-white/90 leading-relaxed">{w.title}</h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors font-basic-light">{w.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pulsante Espandi */}
        {filtered.length > 6 && !showAll && (
          <div className="md:mt-12 mt-5 flex flex-col items-center">
            <button
              onClick={() => setShowAll(true)}
              className="transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <p className="font-tomarik text-lg md:text-xl hover:text-primary">Altri progetti</p>
            </button>
          </div>
        )}

        {/* Pulsante Riduci */}
        {showAll && filtered.length > 6 && (
          <div className="md:mt-8 mt-5 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-2 cursor-pointer"
            >
              
              <p className="font-tomarik text-lg md:text-xl hover:text-primary">Mostra meno</p>
            </button>
          </div>
        )}
      </section>

      {/* ABOUT / Cosa facciamo */}
      <section id="about" className=" relative overflow-visible">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        {/* Pattern decorativo in basso a destra, solo desktop */}
        <img
          src={PatternCosaFacciamo}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute bottom-10 lg:-bottom-2 xl:-bottom-30 left-0 md:left-2 lg:left-0 w-[360px] lg:w-[420px] xl:w-[500px] z-0 pointer-events-none select-none"
        />
        
        <div className="max-w-8xl mx-auto px-4 md:pt-5 pb-20 relative z-10">
          <div className="text-center mb-6">
            <h2 className="section-title">Cosa facciamo</h2>
          </div>
          
          <div className="max-w-8xl mx-auto h-full flex flex-col justify-between">
            {/* Sezione Alto Sinistra */}
            <div className="leading-relaxed text-lg md:text-xl md:w-1/2 max-w-[630px]">
              <div className="relative">
                <p className="text-2xl md:text-[40px] font-basic-bold font-semibold  text-white mb-2">
                  Facciamo video.
                </p>
                <p className="font-basic-light text-white/90 md:leading-11 leading-8">
                  Trasformiamo idee confuse in <span className="font-tomarik-introvert text-primary">video professionali</span> seguendo l'intero processo, dall'idea iniziale fino all'ultimo frame in post-produzione: niente catene di montaggio, nessun passaparola, solo noi <span className="font-basic-italic font"><i>(e voi)</i></span>.
                </p>
                <p className="font-basic-light text-white/90 md:leading-11 leading-8">
                  Siamo <span className="font-tomarik-introvert text-primary">concreti, professionali e flessibili.</span><br/> Ogni progetto è diverso dall'altro ma la passione e l'attenzione ai dettagli sono sempre le stesse.
                </p>
              </div>
            </div>

            {/* Sezione Basso Destra */}
            <div className="text-white/90 leading-relaxed text-lg md:text-xl md:w-1/2 ml-auto md:mt-auto md:text-right mt-10 max-w-[650px]">
                <p className="font-basic-light text-white/90 md:leading-11 leading-8">
                    <span className="font-tomarik-introvert text-primary">Branded content?</span> Ci siamo. <span className="font-tomarik-introvert text-primary">Video per i social</span> che non sembrino fatti col cellulare <span className="font-basic-italic">del cugino?</span> Anche. 
                    <br/>
                    <span className="font-tomarik-introvert text-primary">Videoclip musicali, eventi live, documentari aziendali, cortometraggi pubblicitari?</span> Facciamo pure quelli.
                  </p>
                  <p className="font-basic-light text-white/90 md:leading-11 leading-8">
                  Prendiamo le vostre idee e ne facciamo storie che emozionano e funzionano, senza stress <span className="font-basic-italic">(più o meno)</span>.
                </p>
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

        /* Zoom intro video responsive */
        .intro-zoom { transform: scale(1.45); transform-origin: center center; will-change: transform; }
        @media (max-width: 768px) { .intro-zoom { transform: scale(1.15); } }
      `}</style>
    </div>
  )
}
