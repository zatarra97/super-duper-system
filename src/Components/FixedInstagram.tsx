import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function FixedInstagram() {
  const handleInstagramClick = () => {
    window.open('https://instagram.com', '_blank')
  }

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed bottom-6 right-6 w-12 h-12 z-40 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group cursor-pointer"
      aria-label="Seguici su Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} className="text-xl text-center items-center justify-center" />
      <div className="absolute -top-12 right-0 bg-black/80 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Seguici su Instagram
      </div>
    </button>
  )
}
