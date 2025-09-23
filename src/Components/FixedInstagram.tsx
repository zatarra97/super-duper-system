import instagramIcon from '../Images/instagram.svg'

export default function FixedInstagram() {
  const handleInstagramClick = () => {
    window.open('https://instagram.com', '_blank')
  }

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed bottom-8 right-2 md:right-12 z-40 bg-transparent hover:scale-110 transition-all duration-300 group cursor-pointer"
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
  )
}
