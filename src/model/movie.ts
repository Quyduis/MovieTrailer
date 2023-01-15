import { Media } from "./common";

export interface Movie extends Media {
  adult: boolean;
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongToCollection;
  budget: number;
  genres?: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductCompany[];
  production_countries?: ProductCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: Video;
  credits: Credit;
  keywords: Keywords;
  external_ids: ExternalId;
}

export interface BelongToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Video {
  results: VideoResult[];
}

export interface VideoResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface Credit {
  cast: CreaditPerson[];
  crew: CreaditPerson[];
}

export interface CreaditPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
  character?: string;
}

export interface CoreTeam {
  full_name: string;
  jobs: string;
}

export interface Keywords {
  keywords: KeywordsItem[];
}

export interface KeywordsItem {
  id: number;
  name: string;
}

export interface ExternalId {
  facebook_id: string;
  imdb_id: string;
  instagram_id: string;
  twitter_id: string;
  wikidata_id: string;
}
