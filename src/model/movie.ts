import { Media } from "./common";

export interface Movie extends Media {
  adult: boolean;
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
}
