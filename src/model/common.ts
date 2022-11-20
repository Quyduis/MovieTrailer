export interface ListRespone<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
  [key: string]: any;
}

export interface Media {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
