export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  description: string;
  year: number;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}