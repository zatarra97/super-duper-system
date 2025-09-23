import { WorkItem } from '../types/work';

// Import delle immagini reali per docu_faro
import docuFaroCover from '../Images/works/docu_faro/copertina.png';
import docuFaroBackstage1 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.36.12.png';
import docuFaroBackstage2 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.36.35.png';
import docuFaroBackstage3 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.37.48.png';
import docuFaroBackstage4 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.39.48.png';
import docuFaroBackstage5 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.42.38.png';
import docuFaroBackstage6 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.43.06.png';
import docuFaroBackstage7 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.43.31.png';
import docuFaroBackstage8 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.43.57.png';
import docuFaroBackstage9 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.44.54.png';
import docuFaroBackstage10 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.45.09.png';
import docuFaroBackstage11 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.45.23.png';
import docuFaroBackstage12 from '../Images/works/docu_faro/Screenshot 2025-09-15 alle 16.45.41.png';

// Import delle immagini reali per als_luise_die
import alsLuiseCover from '../Images/works/als_luise_die/copertina.png';

// Import delle immagini reali per colle_petrito
import collePetritoCover from '../Images/works/colle_petrito/copertina.png';
import collePetritoBackstage1 from '../Images/works/colle_petrito/Screenshot 2025-09-15 alle 17.01.18.png';
import collePetritoBackstage2 from '../Images/works/colle_petrito/Screenshot 2025-09-15 alle 17.01.30.png';
import collePetritoBackstage3 from '../Images/works/colle_petrito/Screenshot 2025-09-15 alle 17.01.45.png';
import collePetritoBackstage4 from '../Images/works/colle_petrito/Screenshot 2025-09-15 alle 17.02.35.png';
import collePetritoBackstage5 from '../Images/works/colle_petrito/Screenshot 2025-09-15 alle 17.02.51.png';
import collePetritoBackstage6 from '../Images/works/colle_petrito/Screenshot 2025-09-15 alle 17.03.17.png';
import collePetritoBackstage7 from '../Images/works/colle_petrito/Screenshot 2025-09-15 alle 17.04.02.png';

// Import delle immagini reali per il_balcone_delle_puglie
import balconePuglieCover from '../Images/works/il_balcone_delle_puglie/copertina.png';
import balconePuglieBackstage1 from '../Images/works/il_balcone_delle_puglie/Screenshot 2025-09-15 alle 16.56.05.png';
import balconePuglieBackstage2 from '../Images/works/il_balcone_delle_puglie/Screenshot 2025-09-15 alle 16.56.35.png';
import balconePuglieBackstage3 from '../Images/works/il_balcone_delle_puglie/Screenshot 2025-09-15 alle 16.56.45.png';
import balconePuglieBackstage4 from '../Images/works/il_balcone_delle_puglie/Screenshot 2025-09-15 alle 16.58.11.png';
import balconePuglieBackstage5 from '../Images/works/il_balcone_delle_puglie/Screenshot 2025-09-15 alle 16.58.48.png';
import balconePuglieBackstage6 from '../Images/works/il_balcone_delle_puglie/Screenshot 2025-09-15 alle 16.58.59.png';
import balconePuglieBackstage7 from '../Images/works/il_balcone_delle_puglie/Screenshot 2025-09-15 alle 16.59.09.png';
import balconePuglieBackstage8 from '../Images/works/il_balcone_delle_puglie/Screenshot 2025-09-15 alle 16.59.34.png';

// Import delle immagini reali per dream_with_me
import dreamWithMeCover from '../Images/works/dream_with_me/copertina.png';

// Import delle immagini reali per passacaglia
import passacagliaCover from '../Images/works/passacaglia/copertina.png';

// Import delle immagini reali per segovia
import segoviaCover from '../Images/works/segovia/copertina.png';

// Import delle immagini reali per sevillana
import sevillanaCover from '../Images/works/sevillana/copertina.png';

// Import delle immagini reali per marmaid
import marmaidCover from '../Images/works/marmaid/copertina.png';
import marmaidBackstage1 from '../Images/works/marmaid/IMG_6233.JPG';
import marmaidBackstage2 from '../Images/works/marmaid/IMG_6235.JPG';
import marmaidBackstage3 from '../Images/works/marmaid/IMG_6249.JPG';
import marmaidBackstage4 from '../Images/works/marmaid/IMG_6288.JPG';
import marmaidBackstage5 from '../Images/works/marmaid/IMG_6376.JPG';
import marmaidBackstage6 from '../Images/works/marmaid/IMG_6416.JPG';
import marmaidBackstage7 from '../Images/works/marmaid/IMG_8096.jpg';
import marmaidBackstage8 from '../Images/works/marmaid/IMG_8137.jpg';
import marmaidBackstage9 from '../Images/works/marmaid/IMG_8190.jpg';
import marmaidBackstage10 from '../Images/works/marmaid/IMG_8242.jpg';

// Immagini e video placeholder per lavori senza cartella specifica
const IMG = (w: number, h: number) => `https://picsum.photos/${w}/${h}?random=${Math.floor(Math.random()*10000)}`;
const VIDEO = 'https://www.w3schools.com/html/mov_bbb.mp4';

export const mockWorks: WorkItem[] = [
  // Commercial
  {
    id: 'w1',
    slug: 'cantina-colle-petrito-xii',
    title: 'Cantina Colle Petrito: XII - Dodicesimo',
    shortDesc: 'Commercial',
    category: 'Branded',
    thumbnailUrl: collePetritoCover,
    coverVideoUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/yzak_OmhUJI',
    description: 'Commercial per Cantina Colle Petrito che celebra il dodicesimo anniversario.',
    crew: [
      { role: 'Cliente', name: 'Cantina Colle Petrito' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [
      collePetritoCover,
      collePetritoBackstage1,
      collePetritoBackstage2,
      collePetritoBackstage3,
      collePetritoBackstage4,
      collePetritoBackstage5,
      collePetritoBackstage6,
      collePetritoBackstage7,
    ],
  },
  {
    id: 'w2',
    slug: 'luce-di-memoria-faro-minervino',
    title: 'Luce di memoria: restauro del Faro di Minervino Murge',
    shortDesc: 'Docufilm commerciale',
    category: 'Branded',
    thumbnailUrl: docuFaroCover,
    coverVideoUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/OWUICnad1mg',
    description: 'Docufilm commerciale sul restauro del Faro di Minervino Murge.',
    crew: [
      { role: 'Cliente', name: 'EdilVerde SRL' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto da', name: 'Pietro Giocondo e Gioacchino Bruno' },
      { role: 'Diretto da', name: 'Pietro Giocondo' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Ass. fotografia', name: 'Angelo Preziusi' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [
      docuFaroBackstage1,
      docuFaroBackstage2,
      docuFaroBackstage3,
      docuFaroBackstage4,
      docuFaroBackstage5,
      docuFaroBackstage6,
      docuFaroBackstage7,
      docuFaroBackstage8,
      docuFaroBackstage9,
      docuFaroBackstage10,
      docuFaroBackstage11,
      docuFaroBackstage12,
    ],
  },
  {
    id: 'w3',
    slug: 'minervino-murge-balcone-puglie',
    title: 'Minervino Murge: il balcone delle Puglie',
    shortDesc: 'Commercial',
    category: 'Branded',
    thumbnailUrl: balconePuglieCover,
    coverVideoUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/m5akb4C_q4E',
    description: 'Commercial per il Comune di Minervino Murge che mostra la bellezza del territorio.',
    crew: [
      { role: 'Cliente', name: 'Comune di Minervino Murge' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto da', name: 'Pietro Giocondo' },
      { role: 'Diretto da', name: 'Pietro Giocondo' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Ass. fotografia', name: 'Angelo Preziusi' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [
      balconePuglieCover,
      balconePuglieBackstage1,
      balconePuglieBackstage2,
      balconePuglieBackstage3,
      balconePuglieBackstage4,
      balconePuglieBackstage5,
      balconePuglieBackstage6,
      balconePuglieBackstage7,
      balconePuglieBackstage8,
    ],
  },

  // Music Videos
  {
    id: 'w4',
    slug: 'nicolo-balducci-anna-paradiso-als-luise',
    title: 'Nicolò Balducci & Anna Paradiso - Als Luise die Briefe… W. A. Mozart',
    shortDesc: 'Music video',
    category: 'Music Video',
    thumbnailUrl: alsLuiseCover,
    trailerUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/_bTTqsEO9eA',
    description: 'Videoclip musicale con Nicolò Balducci e Anna Paradiso per BIS Records.',
    crew: [
      { role: 'Con', name: 'Nicolò Balducci, Anna Paradiso, Francesca Giuliano' },
      { role: 'Client', name: 'BIS Records' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto da', name: 'Gioacchino Bruno' },
      { role: 'Diretto da', name: 'Gioacchino Bruno' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Ass. fotografia', name: 'Angelo Preziusi' },
      { role: 'Make Up & Hair Stylist', name: 'Enza Gravina' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [alsLuiseCover],
  },
  {
    id: 'w5',
    slug: 'nicolo-balducci-anna-paradiso-mermaids-song',
    title: 'Nicolò Balducci & Anna Paradiso - The Mermaid\'s Song, Haydn',
    shortDesc: 'Music video',
    category: 'Music Video',
    thumbnailUrl: marmaidCover,
    trailerUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/TCzjQGkDkEM',
    description: 'Videoclip musicale con atmosfere marine per BIS Records.',
    crew: [
      { role: 'Con', name: 'Nicolò Balducci, Francesco Volpe, Mariacristina Santomauro' },
      { role: 'Client', name: 'BIS Records' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto da', name: 'Gioacchino Bruno' },
      { role: 'Diretto da', name: 'Gioacchino Bruno' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Ass. fotografia', name: 'Angelo Preziusi' },
      { role: 'Body Painter & Make Up', name: 'Serenza Castrovilli' },
      { role: 'Costume Supervisor & Hair Stylist', name: 'Francesca Giuliano' },
      { role: 'Mermaid Hair Stylist', name: 'Beatrice Cicchelli' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [
      marmaidCover,
      marmaidBackstage1,
      marmaidBackstage2,
      marmaidBackstage3,
      marmaidBackstage4,
      marmaidBackstage5,
      marmaidBackstage6,
      marmaidBackstage7,
      marmaidBackstage8,
      marmaidBackstage9,
      marmaidBackstage10,
    ],
  },
  {
    id: 'w6',
    slug: 'carlotta-dalia-pagina-romantica',
    title: 'Carlotta Dalia - Carlos Pedrell: Página Romántica',
    shortDesc: 'Music video',
    category: 'Music Video',
    thumbnailUrl: IMG(800, 500),
    trailerUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/EUsHzrd5uJw',
    description: 'Videoclip musicale con Carlotta Dalia per Berlin Classics.',
    crew: [
      { role: 'Con', name: 'Carlotta Dalia' },
      { role: 'Client', name: 'Berlin Classics' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto e diretto da', name: 'Gioacchino Bruno e Pietro Giocondo' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [IMG(1200, 800), IMG(1200, 800), IMG(1200, 800), IMG(1200, 800), IMG(1200, 800), IMG(1200, 800)],
  },
  {
    id: 'w7',
    slug: 'carlotta-dalia-fantasia-sevillana',
    title: 'Carlotta Dalia - Joaquin Turina: Fantasia Sevillana',
    shortDesc: 'Music video',
    category: 'Music Video',
    thumbnailUrl: sevillanaCover,
    trailerUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/qXsjmzU6ZbM',
    description: 'Videoclip musicale con Carlotta Dalia per Berlin Classics.',
    crew: [
      { role: 'Con', name: 'Carlotta Dalia' },
      { role: 'Client', name: 'Berlin Classics' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto e diretto da', name: 'Gioacchino Bruno e Pietro Giocondo' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [sevillanaCover],
  },
  {
    id: 'w8',
    slug: 'carlotta-dalia-anecdotas-segovia',
    title: 'Carlotta Dalia - Andrés Segovia: 5 Anecdotas: 1. Allegretto',
    shortDesc: 'Music video',
    category: 'Music Video',
    thumbnailUrl: segoviaCover,
    trailerUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/3u_yb6TbSaM',
    description: 'Videoclip musicale con Carlotta Dalia per Berlin Classics.',
    crew: [
      { role: 'Con', name: 'Carlotta Dalia' },
      { role: 'Client', name: 'Berlin Classics' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto e diretto da', name: 'Gioacchino Bruno e Pietro Giocondo' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [segoviaCover],
  },
  {
    id: 'w9',
    slug: 'carlotta-dalia-nicolo-balducci-passacaglia',
    title: 'Carlotta Dalia & Nicolò Balducci perform "Passacaglia della Vita" by Stefano Landi',
    shortDesc: 'Music video',
    category: 'Music Video',
    thumbnailUrl: passacagliaCover,
    trailerUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/1BaNKs978cI',
    description: 'Videoclip musicale con Carlotta Dalia e Nicolò Balducci.',
    crew: [
      { role: 'Con', name: 'Carlotta Dalia e Nicolò Balducci' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto e diretto da', name: 'Gioacchino Bruno e Pietro Giocondo' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Ass. fotografia', name: 'Angelo Preziusi' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [passacagliaCover],
  },
  {
    id: 'w10',
    slug: 'carlotta-dalia-nicolo-balducci-dream-with-me',
    title: 'Carlotta Dalia & Nicolò Balducci perform "Dream With Me" by Leonard Bernstein',
    shortDesc: 'Music video',
    category: 'Music Video',
    thumbnailUrl: dreamWithMeCover,
    trailerUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/h0J2fFIAudk',
    description: 'Videoclip musicale con Carlotta Dalia e Nicolò Balducci.',
    crew: [
      { role: 'Con', name: 'Carlotta Dalia e Nicolò Balducci' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto e diretto da', name: 'Gioacchino Bruno e Pietro Giocondo' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Ass. fotografia', name: 'Angelo Preziusi' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
    ],
    backstageImages: [dreamWithMeCover],
  },

  // Cortometraggio
  {
    id: 'w11',
    slug: 'hai-riso-cortometraggio',
    title: 'Hai riso?',
    shortDesc: 'Cortometraggio',
    category: 'Altri',
    thumbnailUrl: IMG(800, 500),
    coverVideoUrl: VIDEO,
    youtubeVideoUrl: 'https://www.youtube.com/embed/SnBrmkG99Lk',
    description: 'Cortometraggio con Giuliana Stancarone e Francesco Volpe.',
    crew: [
      { role: 'Con', name: 'Giuliana Stancarone, Francesco Volpe' },
      { role: 'Produzione', name: 'Bekboard Studio' },
      { role: 'Scritto da', name: 'Gioacchino Bruno e Giuseppe Cassano' },
      { role: 'Diretto da', name: 'Giuseppe Cassano' },
      { role: 'Aiuto regia', name: 'Gioacchino Bruno' },
      { role: 'Fotografia', name: 'Pietro Giocondo' },
      { role: 'Musica originale', name: 'Vincenzo Carbotta' },
      { role: 'Makeup Artist', name: 'Alice Perchinelli' },
      { role: 'Costume supervisor & Hair Stylist', name: 'Pamela Gasparro' },
      { role: 'Runner', name: 'Emmanuele Carlone' },
      { role: 'Montaggio', name: 'Pietro Giocondo' },
      { role: 'Backstage', name: 'Rebecca Superbo' },
    ],
    backstageImages: [IMG(1200, 800), IMG(1200, 800), IMG(1200, 800), IMG(1200, 800)],
  },
];


