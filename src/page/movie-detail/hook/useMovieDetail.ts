import { useQuery } from "@tanstack/react-query";
import DetailMovieApi from "api/DetaiMovieApi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Constant from "util/Constants";
import _isEmpty from "lodash/isEmpty";
import { MovieDetail } from "model/movie";

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
  const [movieDetailData, setMovieDetailData] = useState<MovieDetail>();

  // Call function query details of movie
  const movieDetailResponse = useMovieDetailMovie(
    Constant.QUERY_KEY.DETAIL.MOVIE,
    state.movieId
  );

  useEffect(() => {
    if (movieDetailResponse?.data) {
      setMovieDetailData(movieDetailResponse?.data);
    }
  }, [movieDetailResponse?.data]);

  /**
   * Render production country
   * @returns country
   */
  const renderProductionCountry = () => {
    if (
      _isEmpty(movieDetailData?.production_countries) ||
      !movieDetailData?.production_countries
    ) {
      return "";
    }
    return movieDetailData?.production_countries[0]?.iso_3166_1 || "";
  };

  /**
   * Render movie runtime
   * @returns
   */
  const renderRuntime = () => {
    if (movieDetailData?.runtime) {
      const hour = Math.trunc(movieDetailData?.runtime / 60);
      const minute = movieDetailData?.runtime % 60;

      return `${hour}h ${minute}m`;
    }
    return "0m";
  };

  /**
   * Render movie category
   * @returns
   */
  const renderMovieCategory = () => {
    if (movieDetailData?.genres && !_isEmpty(movieDetailData?.genres)) {
      const category =
        movieDetailData?.genres
          ?.map((category) => category?.name)
          ?.toString() || "";
      return category?.replaceAll(",", ", ");
    }

    return "";
  };

  return {
    movieDetailData,
    renderProductionCountry,
    renderRuntime,
    renderMovieCategory,
  };
};

export default UseMovieDetail;
