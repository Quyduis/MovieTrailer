import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HomeApi from "api/HomeApi";
import Constant from "util/Constants";

/**
 * Query get list movie trending week
 * @param queryKey
 * @returns Query
 */
const useMovieTrendingQuery = (queryKey: string[]) =>
  useQuery(queryKey, HomeApi.getListMovieTrending);

/**
 * Query get list movie popular
 * @param queryKey
 * @returns Query
 */
const useMoviePopularQuery = (queryKey: string[]) =>
  useQuery(queryKey, HomeApi.getListMoviePopuplar);

/**
 * Query get list movie top rated
 * @param queryKey
 * @returns
 */
const useMovieTopratedQuery = (queryKey: string[]) =>
  useQuery(queryKey, HomeApi.getListMovieTopRated);

export const UseHome = () => {
  const [imageHover, setImageHover] = useState<string>("");
  // Call function query list movie trending week
  const movieTrendingResponse = useMovieTrendingQuery(
    Constant.QUERY_KEY.HOME.TRENDING_TODAY
  );

  // Call function query list movie popular
  const moviePopularResponse = useMoviePopularQuery(
    Constant.QUERY_KEY.HOME.MOVIE_POPULAR
  );

  // Call function query list movie top rated
  const movieTopRatedResponse = useMovieTopratedQuery(
    Constant.QUERY_KEY.HOME.MOVIE_TOP_RATED
  );

  /**
   * Get Image banner
   * @returns url banner image
   */
  const getBannerMovieTrending = () => {
    const listMovieTrending = movieTrendingResponse?.data?.results;
    // Get random banner image from  list movie trending
    if (Array.isArray(listMovieTrending)) {
      // Get random index from 0 to length of listMovieTrending
      const randomIndex = Math.floor(Math.random() * listMovieTrending.length);
      // Get random movie
      const randomMovie = listMovieTrending[randomIndex];
      return randomMovie.backdrop_path;
    }
    return "";
  };  

  /**
   * Handle hover to movie item top rated
   * @param imageUrl 
   */
  const handleHoverMovieTopRated = (imageUrl: string) => {
    setImageHover(`${Constant.IMAGE_PATH_W1920_H427}/${imageUrl}`);
  };

  return {
    listMovieTrending: movieTrendingResponse?.data?.results || [],
    listMoviePopular: moviePopularResponse?.data?.results || [],
    listMovieToprated: movieTopRatedResponse?.data?.results || [],
    getBannerMovieTrending,
    handleHoverMovieTopRated,
    imageHover,
  };
};

export default UseHome;
