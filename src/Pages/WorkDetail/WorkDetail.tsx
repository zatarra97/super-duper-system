import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../../Components/Header'
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
      <Header onMenuToggle={() => {}} onOpenInstagram={() => window.open('https://instagram.com','_blank')} />

      {/* Media principale */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">{work.title}</h1>
          <div className="aspect-video rounded overflow-hidden bg-black">
            {work.coverVideoUrl || work.trailerUrl ? (
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
        <div className="max-w-6xl mx-auto px-4 pb-8 grid md:grid-cols-3 gap-8">
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
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <h3 className="font-semibold mb-4">Backstage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {work.backstageImages.map((src, i) => (
              <img key={i} className="rounded object-cover w-full h-56" src={src} />
            ))}
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contact" className="bg-zinc-900/60">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
          <h3 className="text-xl md:text-3xl font-bold">Raccontaci la tua idea</h3>
          <p className="text-white/80">Scrivici a <a className="underline" href="mailto:hello@studio.fake">hello@studio.fake</a> — <a className="underline" href="tel:+3900000000">+39 000 000 000</a></p>
        </div>
      </section>
    </div>
  )
}


