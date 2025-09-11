import { WorkItem } from '../types/work';

// Immagini e video placeholder
const IMG = (w: number, h: number) => `https://picsum.photos/${w}/${h}?random=${Math.floor(Math.random()*10000)}`;
const VIDEO = 'https://www.w3schools.com/html/mov_bbb.mp4';

export const mockWorks: WorkItem[] = [
  {
    id: 'w1',
    slug: 'brand-spark',
    title: 'Brand Spark',
    category: 'Branded',
    thumbnailUrl: IMG(800, 500),
    coverVideoUrl: VIDEO,
    description: 'Spot branded energico che racconta la rinascita del brand.',
    crew: [
      { role: 'Regia', name: 'A. Rossi' },
      { role: 'DOP', name: 'B. Verdi' },
      { role: 'Montaggio', name: 'C. Neri' },
    ],
    backstageImages: [IMG(1200, 800), IMG(1200, 800), IMG(1200, 800)],
  },
  {
    id: 'w2',
    slug: 'urban-rhythm',
    title: 'Urban Rhythm',
    category: 'Music Video',
    thumbnailUrl: IMG(800, 500),
    trailerUrl: VIDEO,
    description: 'Videoclip musicale con forti atmosfere urban e dinamiche.',
    crew: [
      { role: 'Regia', name: 'D. Bianchi' },
      { role: 'Color', name: 'E. Gialli' },
    ],
    backstageImages: [IMG(1200, 800), IMG(1200, 800)],
  },
];


