
interface ShowreelModalProps {
  open: boolean
  onClose: () => void
}

export default function ShowreelModal({ open, onClose }: ShowreelModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded overflow-hidden shadow-xl">
        <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay controls className="w-full h-full object-cover" />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-black rounded px-3 py-1"
        >
          Chiudi
        </button>
      </div>
    </div>
  )
}


