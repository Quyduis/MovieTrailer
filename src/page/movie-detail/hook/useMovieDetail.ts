import { useQuery } from "@tanstack/react-query";
import DetailMovieApi from "api/DetaiMovieApi";
import _groupby from "lodash/groupBy";
import _isEmpty from "lodash/isEmpty";
import { CoreTeam, MovieDetail } from "model/movie";
import { useEffect, useState } from "react";
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
  const [movieDetailData, setMovieDetailData] = useState<MovieDetail>();
  const [isShowModalPreviewTrailer, setShowPreviewTrailer] = useState(false);
  const [isShowViewMoreCast, setShowViewMoreCast] = useState(false);
  const [previewKey, setPreviewKey] = useState("");

  // Call function query details of movie
  const movieDetailResponse = useMovieDetailMovie(
    Constant.QUERY_KEY.DETAIL.MOVIE,
    state.movieId
  );

  useEffect(() => {
    if (movieDetailResponse?.data) {
      setMovieDetailData(movieDetailResponse?.data);
      setShowViewMoreCast(
        movieDetailResponse?.data?.credits?.cast?.length > 10
      );
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

  /**
   * Render List Core Team
   * @returns
   */
  const renderCoreTeam = () => {
    // Get person with directing role
    const coreTeam =
      movieDetailData?.credits?.crew?.filter(
        (crew) => crew?.known_for_department === "Directing"
      ) || [];
    // Group by person
    const coreTeamGroupById = _groupby(coreTeam, "id") || {};
    const coreTeamList: CoreTeam[] = [];

    for (const [key, _value] of Object.entries(coreTeamGroupById)) {
      const fullName =
        coreTeamGroupById[key]?.find((value) => value?.name)?.name || "";
      const jobs = coreTeamGroupById[key]
        ?.map((value) => value?.job)
        ?.toString()
        ?.replaceAll(",", ", ");
      coreTeamList.push({ full_name: fullName, jobs });
    }
    return coreTeamList;
  };

  const handleCloseModalPreviewTrailer = () => {
    setShowPreviewTrailer(false);
  };

  const handleClickTrailer = () => {
    const key =
      movieDetailData?.videos?.results?.find(
        (video) => video?.type === "Trailer"
      )?.key || "";
    if (key) {
      setPreviewKey(key);
      setShowPreviewTrailer(true);
    }
  };

  return {
    movieDetailData,
    renderProductionCountry,
    renderRuntime,
    renderMovieCategory,
    renderCoreTeam,
    isShowModalPreviewTrailer,
    setShowPreviewTrailer,
    handleCloseModalPreviewTrailer,
    previewKey,
    handleClickTrailer,
    isShowViewMoreCast,
    isLoadingMovieDetailData: movieDetailResponse?.isLoading
  };
};

export default UseMovieDetail;
