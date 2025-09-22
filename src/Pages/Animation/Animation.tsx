import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import animationVideo from '../../Images/Animation.mp4'

export default function Animation() {
  const [showAnimation, setShowAnimation] = useState(true)
  const [animationEnded, setAnimationEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Simula la durata dell'animazione (puoi regolare questo valore)
    const timer = setTimeout(() => {
      setAnimationEnded(true)
    }, 5000) // 5 secondi di animazione

    return () => clearTimeout(timer)
  }, [])

  const handleAnimationEnd = () => {
    setAnimationEnded(true)
  }

  const handleSkipAnimation = () => {
    setShowAnimation(false)
    setAnimationEnded(true)
  }

  const restartAnimation = () => {
    setAnimationEnded(false)
    setShowAnimation(true)
    // Reset del video per farlo ripartire dall'inizio
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  if (!showAnimation) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Animazione Completata</h1>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors rounded-lg font-semibold"
            >
              Vai alla Homepage
            </Link>
            <button 
              onClick={restartAnimation}
              className="block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-lg font-semibold"
            >
              Riproduci di nuovo
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Video di animazione a tutto schermo */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={animationVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleAnimationEnd}
      />
      
      {/* Overlay con pulsante skip */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleSkipAnimation}
          className="px-4 py-2 bg-black/50 text-white hover:bg-black/70 transition-colors rounded-lg text-sm font-medium"
        >
          Salta animazione
        </button>
      </div>

      {/* Pulsante per tornare alla home */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          to="/"
          className="px-4 py-2 bg-black/50 text-white hover:bg-black/70 transition-colors rounded-lg text-sm font-medium"
        >
          ← Home
        </Link>
      </div>

      {/* Messaggio di fine animazione */}
      {animationEnded && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Animazione Completata</h2>
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors rounded-lg font-semibold"
              >
                Vai alla Homepage
              </Link>
              <button 
                onClick={restartAnimation}
                className="block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-lg font-semibold"
              >
                Riproduci di nuovo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
