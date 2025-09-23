import { useParams, Link } from 'react-router-dom'
import Header from '../../Components/Header'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import FixedInstagram from '../../Components/FixedInstagram'
import BackstageCarousel from '../../Components/BackstageCarousel'
import { mockWorks } from '../../services/mockWorks'

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const work = mockWorks.find(w => w.slug === slug)

  if (!work) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">Lavoro non trovato</div>
          <Link className="underline" to="/">Torna alla Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Media principale */}
      <section className="pt-16">
        <div className="max-w-8xl mx-auto py-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 px-4">{work.title}</h1>
          <div className="aspect-video rounded overflow-hidden bg-black">
            {work.youtubeVideoUrl ? (
              <iframe
                src={work.youtubeVideoUrl + "?rel=0"}
                title={work.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture controls"
                allowFullScreen
                className="w-full h-full"
              />
            ) : work.coverVideoUrl || work.trailerUrl ? (
              <video
                src={work.coverVideoUrl || work.trailerUrl}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img src={work.thumbnailUrl} className="w-full h-full object-cover" />
            )}
          </div>
        </div>
      </section>

      {/* Descrizione e crew */}
      <section>
        <div className="max-w-8xl mx-auto px-4 pb-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-semibold mb-2">Descrizione</h2>
            <p className="text-white/80 leading-relaxed">{work.description}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Crew</h3>
            <ul className="space-y-1 text-white/80">
              {work.crew.map((c, idx) => (
                <li key={idx}>{c.role}: {c.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Backstage */}
      <section>
        <div className="px-4 pb-12">
          <h3 className="max-w-8xl mx-auto font-semibold mb-6 text-xl md:text-2xl">Foto dal set</h3>
          <BackstageCarousel 
            images={work.backstageImages}
            videos={work.backstageVideos || []}
          />
        </div>
      </section>

      <Contact />
      <Footer />
      <FixedInstagram />
    </div>
  )
}


