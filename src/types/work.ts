export type WorkCategory = 'Branded' | 'Music Video' | 'Eventi' | 'Altri';

export interface CrewMember {
  role: string;
  name: string;
}

export interface WorkItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: WorkCategory;
  thumbnailUrl: string;
  coverVideoUrl?: string;
  trailerUrl?: string;
  description: string;
  crew: CrewMember[];
  backstageImages: string[];
  backstageVideos?: string[];
}


