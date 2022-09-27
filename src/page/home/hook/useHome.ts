import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HomeApi from "api/HomeApi";
import Constant from "util/Constants";

const useMovieTrendingMovieQuery = (queryKey: string[]) =>
  useQuery(queryKey, HomeApi.getListMovieTrending);

export const UseHome = () => {
  const movieTrendingResponse = useMovieTrendingMovieQuery(
    Constant.QUERY_KEY.HOME.TRENDING_TODAY
  );

  const getBannerMovieTrending = () => {
    const listMovieTrending =
      movieTrendingResponse?.data?.responseData?.results;
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
    listMovieTrending: movieTrendingResponse?.data?.responseData?.results || [],
    getBannerMovieTrending,
  };
};

export default UseHome;
