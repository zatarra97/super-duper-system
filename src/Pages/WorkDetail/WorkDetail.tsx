import { useParams, Link } from 'react-router-dom'
import Header from '../../Components/Header'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import FixedInstagram from '../../Components/FixedInstagram'
import BackstageCarousel from '../../Components/BackstageCarousel'
import { mockWorks } from '../../services/mockWorks'
import SEO from '../../Components/SEO'
import { siteSeoConfig } from '../../config/seo'

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
      <SEO 
        title={`${work.title} – ${siteSeoConfig.siteName}`}
        description={work.description || work.shortDesc}
        image={work.thumbnailUrl}
        canonical={`${siteSeoConfig.siteUrl}/work/${work.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: work.title,
          description: work.description || work.shortDesc,
          thumbnailUrl: work.thumbnailUrl,
          uploadDate: new Date().toISOString(),
          ...(work.youtubeVideoUrl && { embedUrl: work.youtubeVideoUrl }),
          ...(work.coverVideoUrl && { contentUrl: work.coverVideoUrl }),
          ...(work.trailerUrl && !work.coverVideoUrl && { contentUrl: work.trailerUrl }),
          publisher: {
            '@type': 'Organization',
            name: siteSeoConfig.siteName,
            logo: {
              '@type': 'ImageObject',
              url: siteSeoConfig.defaultImage
            }
          }
        }}
      />
      <Header />

      {/* Media principale */}
      <section className="pt-24 md:pt-32">
        <div className="max-w-8xl mx-auto pb-8">
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
          <div className="px-4 lg:px-0">
            <h1 className="text-2xl md:text-[40px] font-basic-bold font-semibold  text-white uppercase">{work.title}</h1>
            <h1 className="text-sm md:text-lg font-basic-bold font-semibold mb-6 uppercase md:-mt-2">{work.shortDesc}</h1>
          </div>
        </div>
      </section>

      {/* Descrizione e crew */}
      <section>
        <div className="max-w-8xl mx-auto px-4 lg:px-0">
          <div>
            <ul className="space-y-6">
              {work.crew.map((c, idx) => (
                <li key={idx} className="flex items-baseline gap-2">
                  <span className="crew-role text-white/60 font-basic-light taxt-lg md:text-xl leading-none">{c.role}:</span>
                  <span className="crew-name text-white uppercase font-tomarik-introvert leading-none">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Backstage */}
      <section>
        <div className="px-4 pt-8">
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


