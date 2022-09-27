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

const useMoviePopularQuery = (queryKey: string[]) =>
  useQuery(queryKey, HomeApi.getListMoviePopuplar);

export const UseHome = () => {
  // Call function query list movie trending week
  const movieTrendingResponse = useMovieTrendingQuery(
    Constant.QUERY_KEY.HOME.TRENDING_TODAY
  );
  
  // Call function query list movie popular
  const moviePopularResponse = useMoviePopularQuery(
    Constant.QUERY_KEY.HOME.MOVIE_POPULAR
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
      console.log("+++ quyy", randomMovie.backdrop_path);
      return randomMovie.backdrop_path;
    }
    return "";
  };

  return {
    listMovieTrending: movieTrendingResponse?.data?.results || [],
    listMoviePopular: moviePopularResponse?.data?.results || [],
    getBannerMovieTrending,
  };
};

export default UseHome;
