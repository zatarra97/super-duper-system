import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const handleNavigation = (section: string) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      // Se siamo già sulla homepage, scrolla alla sezione
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
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
            element.scrollIntoView({ behavior: 'smooth' })
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
    const onScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      <div className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-colors ${isScrolled ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="pointer-events-auto">
            <div className="text-white font-bold tracking-widest text-lg bg-black/60 px-3 py-1 rounded capitalize">
              {import.meta.env.VITE_APP_NAME}
            </div>
          </Link>

          <div className="flex items-center gap-4 pointer-events-auto">
            {/* Menu items desktop - nascosti di default */}
            <div className={`hidden md:flex items-center space-x-6 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
              <button 
                onClick={() => handleNavigation('works')}
                className="text-white hover:underline whitespace-nowrap cursor-pointer"
              >
                Lavori
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="text-white hover:underline whitespace-nowrap cursor-pointer"
              >
                Chi siamo
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="text-white hover:underline whitespace-nowrap cursor-pointer"
              >
                Contatti
              </button>
            </div>
            
            <button
              aria-label="Menu"
              className="text-white bg-black/60 hover:bg-black/80 px-3 py-1 rounded transition-all duration-300 cursor-pointer"
              onClick={() => setMenuOpen(v => !v)}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
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
              <div className="text-white font-bold tracking-widest text-lg capitalize">{import.meta.env.VITE_APP_NAME}</div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 text-2xl">
              <button 
                onClick={() => handleNavigation('works')}
                className="text-white hover:underline cursor-pointer"
              >
                Lavori
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="text-white hover:underline cursor-pointer"
              >
                Chi siamo
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="text-white hover:underline cursor-pointer"
              >
                Contatti
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


