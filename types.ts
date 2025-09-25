
export interface NavLink {
  name: Page;
  path: string;
}

// FIX: Add 'Galeri' to the Page type to include the gallery page in navigation.
export type Page = 'Home' | 'Tentang' | 'Jurusan' | 'Fasilitas' | 'Galeri' | 'Daftar';

export interface Major {
  id: string;
  name: string;
  fullName: string;
  description: string;
  imageUrl: string;
}

export interface Facility {
  name: string;
  description: string;
  imageUrl: string;
}

export interface GalleryImage {
  src: string;
  description: string;
}
