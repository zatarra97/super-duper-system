import instagramIcon from '../Images/instagram.svg'
import youtubeIcon from '../Images/youtube.svg'

export default function FixedInstagram() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/bekboardstudio?igsh=YmYwajd4bmlieWp6&utm_source=qr', '_blank')
  }

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@bekboardstudio', '_blank')
  }

  return (
    <div className="fixed bottom-8 right-4 md:right-11 z-40 flex flex-row md:gap-3 gap-1 md:mr-2">
      {/* Instagram */}
      <button
        onClick={handleInstagramClick}
        className="bg-transparent hover:scale-110 transition-all duration-300 group cursor-pointer"
        aria-label="Seguici su Instagram"
      >
        <img 
          src={instagramIcon} 
          alt="Instagram" 
          className="md:w-[44px] md:h-[45px] w-[34px] h-[35px] object-contain transition-all duration-300"
        />
        <div className="absolute -top-12 right-0 bg-black/80 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Seguici su Instagram
        </div>
      </button>

      {/* YouTube */}
      <button
        onClick={handleYouTubeClick}
        className="bg-transparent hover:scale-110 transition-all duration-300 group cursor-pointer"
        aria-label="Seguici su YouTube"
      >
        <img 
          src={youtubeIcon} 
          alt="YouTube" 
          className="md:w-[44px] md:h-[45px] w-[34px] h-[35px] object-contain transition-all duration-300"
        />
        <div className="absolute -top-12 right-0 bg-black/80 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Seguici su YouTube
        </div>
      </button>
    </div>
  )
}
