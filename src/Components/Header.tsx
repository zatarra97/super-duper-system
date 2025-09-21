import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
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

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              aria-label="Menu"
              className={`text-white bg-black/60 hover:bg-black/80 px-3 py-1 rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
                className="text-white text-2xl"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 text-2xl">
              <a href="#works" className="text-white hover:underline" onClick={() => setMenuOpen(false)}>Lavori</a>
              <a href="#about" className="text-white hover:underline" onClick={() => setMenuOpen(false)}>Chi siamo</a>
              <a href="#contact" className="text-white hover:underline" onClick={() => setMenuOpen(false)}>Contatti</a>
            </div>
          </div>

          {/* Menu desktop - sulla stessa riga dell'icona burger */}
          <div className="hidden md:block fixed top-1.5 right-4 z-50 bg-black/70 backdrop-blur rounded p-4 animate-[slideInFromRightAndLeft_0.3s_ease-out]">
            <div className="flex items-center space-x-6">
              <a href="#works" className="text-white hover:underline whitespace-nowrap" onClick={() => setMenuOpen(false)}>Lavori</a>
              <a href="#about" className="text-white hover:underline whitespace-nowrap" onClick={() => setMenuOpen(false)}>Chi siamo</a>
              <a href="#contact" className="text-white hover:underline whitespace-nowrap" onClick={() => setMenuOpen(false)}>Contatti</a>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faTimes} />
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
        @keyframes slideInFromRightAndLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(-60px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}


