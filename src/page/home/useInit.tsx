import { useQuery } from "@tanstack/react-query";
import HomeApi from "api/HomeApi";
import { useEffect, useState } from "react";
import Constant from "util/Constants";
import _isEmpty from "lodash/isEmpty";
import { Movie } from "model/movie";

interface IMediaType {
  popularType: string;
  topRatedType: string;
  trendingType: string;
}

/**
 * Query get list movie trending week
 * @param queryKey
 * @returns Query
 */
const useMovieTrendingQuery = (queryKey: string[], type: string) =>
  useQuery([...queryKey, type], () => HomeApi.getListMovieTrending(type));

const UseInit = () => {
  const [bannerMovieTrending, setBannerMovieTrending] = useState<Movie>();
  const [mediaType, setMediaType] = useState<IMediaType>({
    popularType: "movie",
    topRatedType: "movie",
    trendingType: "day",
  });

  // Call function query list movie trending week
  const movieTrendingResponse = useMovieTrendingQuery(
    Constant.QUERY_KEY.HOME.TRENDING_TODAY,
    mediaType.trendingType
  );

  /**
   * Get Image banner
   */
  useEffect(() => {
    
    const listMovieTrending = movieTrendingResponse?.data?.results;
    // Get random banner image from  list movie trending
    if (Array.isArray(listMovieTrending) && !_isEmpty(listMovieTrending)) {
      // Get random index from 0 to length of listMovieTrending
      const randomIndex = Math.floor(Math.random() * listMovieTrending.length);
      // Get random movie
      const randomMovie = listMovieTrending[randomIndex];
      setBannerMovieTrending(randomMovie);
    }
  }, [movieTrendingResponse?.data?.results]);

  return {
    bannerMovieTrending,
  };
};

export default UseInit;
