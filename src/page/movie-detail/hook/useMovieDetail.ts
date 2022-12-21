import { useQuery } from "@tanstack/react-query";
import DetailMovieApi from "api/DetaiMovieApi";
import { useLocation } from "react-router-dom";
import Constant from "util/Constants";

/**
 * Query get details of movie
 * @param queryKey
 * @param id
 * @returns Query
 */
const useMovieDetailMovie = (queryKey: string[], id: number) =>
  useQuery([...queryKey, id], () => DetailMovieApi.getMovieDetailInfo(id), {
    enabled: typeof id !== "undefined",
    staleTime: 300000, // stale time 5 minutes
  });

const UseMovieDetail = () => {
  const state = useLocation().state as { movieId: number };

  // Call function query details of movie
  const movieDetailResponse = useMovieDetailMovie(
    Constant.QUERY_KEY.DETAIL.MOVIE,
    state.movieId
  );

  return {
    movieDetaildData: movieDetailResponse?.data,
  };
};

export default UseMovieDetail;
