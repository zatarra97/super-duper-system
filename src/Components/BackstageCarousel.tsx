import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface BackstageCarouselProps {
  images: string[]
  videos?: string[]
}

export default function BackstageCarousel({ images, videos = [] }: BackstageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const allMedia = [...images, ...videos]
  
  const scrollToItem = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const itemWidth = container.offsetWidth / 3 // Mostra 3 elementi alla volta su desktop
      container.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      })
    }
    setCurrentIndex(index)
  }
  
  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % allMedia.length
    scrollToItem(nextIndex)
  }
  
  const prevItem = () => {
    const prevIndex = currentIndex === 0 ? allMedia.length - 1 : currentIndex - 1
    scrollToItem(prevIndex)
  }

  return (
    <div className="relative w-full px-4 md:px-8 lg:px-12 xl:px-14 z-20 bg-black">
      {/* Pulsanti di navigazione */}
      <button
        onClick={prevItem}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Media precedente"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      
      <button
        onClick={nextItem}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Media successiva"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Carosello che si estende da margine a margine */}
      <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allMedia.map((media, index) => {
            const isVideo = videos.includes(media)
            
            return (
              <div 
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 snap-center"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black group">
                  {isVideo ? (
                    <video
                      src={media}
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={media}
                      alt={`Backstage ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Indicatori di posizione */}
      {/*allMedia.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {allMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToItem(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Vai al media ${index + 1}`}
            />
          ))}
        </div>
      )}*/}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
