import { useState, useEffect } from 'react'

// Import dei loghi dei clienti
import berlinClassicLogo from '../Images/clients/berlin_classic.png'
import collePetritoLogo from '../Images/clients/colle_petrito.png'
import comuneMinervinoLogo from '../Images/clients/comune_minervino.png'
import edilVerdeLogo from '../Images/clients/edil_verde.png'

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
  }
]

export default function ClientsCarousel() {
  const [isMobile, setIsMobile] = useState(false)

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
  const visibleClients = isMobile ? 2.5 : 4

  return (
    <section className="bg-gradient-to-b from-zinc-800/40 to-zinc-900/60 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Si sono già affidati a noi
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-transparent mx-auto"></div>
        </div>
        
        <div className="mx-auto">
          {/* Carosello con scorrimento continuo */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 md:gap-12 lg:gap-16 animate-scroll-infinite">
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`}
                  className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 flex-shrink-0"
                  style={{ width: `${100 / visibleClients}%` }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className={`max-h-22 md:max-h-24 lg:max-h-28 xl:max-h-32 w-auto object-contain transition-opacity duration-300 ${
                      client.id === 'berlin-classic' ? 'filter brightness-0 invert' : ''
                    }`}
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
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 12s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
