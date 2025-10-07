import { useState, useEffect, useMemo, useRef } from 'react'

// Import dei loghi dei clienti
import berlinClassicLogo from '../Images/clients/berlin_classic.png'
import collePetritoLogo from '../Images/clients/colle_petrito.png'
import comuneMinervinoLogo from '../Images/clients/comune_minervino.png'
import edilVerdeLogo from '../Images/clients/edil_verde.png'
import bisLogo from '../Images/clients/bis.png'

interface Client {
  id: string
  name: string
  logo: string
}

const clients: Client[] = [
  {
    id: 'berlin-classic',
    name: 'Berlin Classic',
    logo: berlinClassicLogo
  },
  {
    id: 'colle-petrito',
    name: 'Colle Petrito',
    logo: collePetritoLogo
  },
  {
    id: 'comune-minervino',
    name: 'Comune Minervino',
    logo: comuneMinervinoLogo
  },
  {
    id: 'edil-verde',
    name: 'Edil Verde',
    logo: edilVerdeLogo
  },
  {
    id: 'bis',
    name: 'Bis',
    logo: bisLogo
  }
]

export default function ClientsCarousel() {
  const [isMobile, setIsMobile] = useState(false)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Duplica i clienti per l'effetto infinito
  const duplicatedClients = [...clients, ...clients]
  const visibleClients = isMobile ? 3 : 5
  
  // Su mobile aggiungiamo un ulteriore elemento con il primo logo per una chiusura più fluida
  const extendedClients = useMemo(() => {
    return isMobile ? [...duplicatedClients, clients[0]] : duplicatedClients
  }, [isMobile])

  // Calcola la distanza da percorrere (larghezza della prima sequenza) e imposta durata in base a una velocità costante
  useEffect(() => {
    const updateScrollMetrics = () => {
      const track = trackRef.current
      if (!track) return
      const children = Array.from(track.children) as HTMLElement[]
      if (children.length === 0) return

      const firstIndexAfterFirstLoop = clients.length
      if (!children[firstIndexAfterFirstLoop]) return

      const firstLeft = children[0].offsetLeft
      const boundaryLeft = children[firstIndexAfterFirstLoop].offsetLeft
      const distancePx = Math.max(1, boundaryLeft - firstLeft)

      // Velocità costante in px/s (mobile più veloce)
      const speedPxPerSec = isMobile ? 30 : 60
      const durationSec = Math.max(6, distancePx / speedPxPerSec)

      track.style.setProperty('--scroll-distance', `${distancePx}px`)
      track.style.animationDuration = `${durationSec}s`
    }

    // Aggiorna subito e al resize
    const rAF = requestAnimationFrame(updateScrollMetrics)
    window.addEventListener('resize', updateScrollMetrics)
    return () => {
      cancelAnimationFrame(rAF)
      window.removeEventListener('resize', updateScrollMetrics)
    }
  }, [isMobile])

  return (
    <section className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-4 pt-2 md:pt-10 md:pb-20 pb-7 relative z-10">
        <div className="text-center md:mb-16 mb-5">
        <h2 className="section-subtitle uppercase">si sono già affidati a noi</h2>
        </div>
        
        <div className="mx-auto">
          {/* Carosello con scorrimento continuo */}
          <div className="relative overflow-hidden">
            <div ref={trackRef} className="flex gap-4 md:gap-12 lg:gap-16 animate-scroll-infinite">
              {extendedClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`}
                  className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 flex-shrink-0"
                  style={{ width: `${100 / visibleClients}%` }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-28 xl:max-h-32 w-auto object-contain transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--scroll-distance, 50%)));
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 15s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
        
        /* Smooth transition per evitare glitch */
        .animate-scroll-infinite {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
