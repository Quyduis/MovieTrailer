import { Media } from "./common";

export interface TV extends Media {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}
