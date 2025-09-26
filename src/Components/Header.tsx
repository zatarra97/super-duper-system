import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useScrollPosition } from '../hooks/useScrollPosition'
import logo from '../Images/logo.svg'
import burgerIcon from '../Images/burgerIcon.svg'
import headerHoverShort from '../Images/header_hover_short.svg'
import headerHoverLong from '../Images/header_hover_long.svg'

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const scrollY = useScrollPosition()

  // Calcola se l'header deve avere lo sfondo
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const calculateBackground = () => {
      // Se siamo nella pagina di dettaglio lavori, l'header non è fisso
      if (location.pathname !== '/') {
        setShowBackground(false)
        return
      }
      
      // Calcola l'altezza del video hero (40dvh su mobile, 88vh su desktop)
      const isMobile = window.innerWidth < 768
      const heroHeight = isMobile ? window.innerHeight * 0.4 : window.innerHeight * 0.88
      
      // Mostra lo sfondo solo quando abbiamo scrollato oltre il video hero
      setShowBackground(scrollY > heroHeight - 100) // 100px di margine per transizione più fluida
    }

    calculateBackground()
  }, [scrollY, location.pathname])

  // Ricalcola quando cambia la dimensione della finestra
  useEffect(() => {
    const handleResize = () => {
      // Forza il re-render quando cambia la dimensione della finestra
      setMenuOpen(prev => prev)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavigation = (section: string) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      // Se siamo già sulla homepage, scrolla alla sezione con offset
      const element = document.getElementById(section)
      if (element) {
        const elementPosition = element.offsetTop
        const offsetPosition = elementPosition - 100 // 40px di margine dall'alto
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // Se siamo su un'altra pagina, naviga alla homepage con hash
      window.location.href = `/#${section}`
    }
  }

  // Effetto per gestire lo scroll quando si arriva con hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.substring(1) // Rimuove il #
      if (hash && location.pathname === '/') {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const elementPosition = element.offsetTop
            const offsetPosition = elementPosition - 100 // 40px di margine dall'alto
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100) // Piccolo delay per assicurarsi che la pagina sia caricata
      }
    }

    // Gestisce il caso quando si arriva direttamente con hash
    handleHashScroll()

    // Gestisce il caso quando l'hash cambia
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [location.pathname])


  useEffect(() => {
    if (menuOpen) {
      // Blocca lo scroll solo su mobile (quando il menu mobile è visibile)
      const isMobile = window.innerWidth < 768 // md breakpoint
      if (isMobile) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <div className={`${location.pathname === '/' ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 ${
        showBackground ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="pointer-events-auto">
            <div className="text-white font-bold tracking-widest text-2xl md:pt-10 md:pl-8 rounded capitalize">
              <img
                src={logo}
                alt="Bekboard Studio"
                className={`h-18 md:${showBackground ? 'h-[100px] md:-mt-8' : 'h-[110px]'} transition-all duration-300`}
              />
            </div>
          </Link>

          <div className="flex items-center gap-x-4 pointer-events-auto">
            {/* Menu items desktop - nascosti di default */}
            <div className={`hidden md:flex items-center space-x-16 pr-16 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-x-0' + (showBackground ? ' mt-0' : ' mt-7') : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
              <div className="relative group">
              <img src={headerHoverShort} alt="" className="absolute -inset-4 opacity-0  group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" style={{minWidth:"130px", marginLeft:"2px", marginTop:"-8px"}} />
                <button 
                  onClick={() => handleNavigation('works')}
                  className="relative whitespace-nowrap cursor-pointer z-10 hover:opacity-80 transition-opacity"
                >
                  <p className="header-option">LAVORI</p>
                </button>
              </div>
              <div className="relative group">
                <img src={headerHoverLong} alt="" className="absolute -inset-4 opacity-0  group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" style={{minWidth:"250px", marginLeft:"2px", marginTop:"-19px"}} />
                <button 
                  onClick={() => handleNavigation('about')}
                  className="relative whitespace-nowrap cursor-pointer z-10 transition-opacity"
                >
                  <p className="header-option">Cosa facciamo</p>
                </button>
              </div>
              <div className="relative group">
              <img src={headerHoverLong} alt="" className="absolute -inset-4 opacity-0  group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out" style={{minWidth:"172px", marginLeft:"-6px", marginTop:"-2px"}} />
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="relative whitespace-nowrap cursor-pointer z-10 hover:opacity-80 transition-opacity"
                >
                  <p className="header-option">CONTATTI</p>
                </button>
              </div>
            </div>
            
            <button
              aria-label="Menu"
              className="text-white md:px-8 rounded transition-all duration-300 cursor-pointer"
              onClick={() => setMenuOpen(v => !v)}
            >
              <img src={burgerIcon} className={`${showBackground ? "h-5 md:h-[25px] -mt-2 md:mt-0" : "h-5 md:h-[35px] md:mt-6 -mt-2"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu responsive */}
      {menuOpen && (
        <>
          {/* Overlay per mobile */}
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden animate-[fadeIn_0.3s_ease-out]" onClick={() => setMenuOpen(false)} />
          
          {/* Menu mobile - full screen con animazione */}
          <div className="fixed inset-0 bg-black z-50 md:hidden flex flex-col animate-[slideInFromRight_0.3s_ease-out]">
            <div className="flex justify-between items-center p-4">
              <div className="text-white font-bold tracking-widest text-lg capitalize">
                <img src={logo} alt="Bekboard Studio" className="h-18 md:h-[110px]" />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-14 text-2xl">
              <button 
                onClick={() => handleNavigation('works')}
                className="cursor-pointer"
              >
                <p className="header-option">LAVORI</p>
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="cursor-pointer"
              >
                <p className="header-option text-4xl">Cosa facciamo</p>
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="cursor-pointer"
              >
                <p className="header-option">CONTATTI</p>
              </button>
            </div>
          </div>

        </>
      )}

      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}


