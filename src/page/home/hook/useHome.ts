import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HomeApi from "api/HomeApi";
import Constant from "util/Constants";
import _isEmpty from "lodash/isEmpty";
import DetailMovieApi from "api/DetaiMovieApi";

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

/**
 * Query get list movie popular
 * @param queryKey
 * @returns Query
 */
const useMoviePopularQuery = (queryKey: string[], type: string) =>
  useQuery([...queryKey, type], () => HomeApi.getListMoviePopuplar(type));

/**
 * Query get list movie top rated
 * @param queryKey
 * @returns Query
 */
const useMovieTopratedQuery = (queryKey: string[], type: string) =>
  useQuery([...queryKey, type], () => HomeApi.getListMovieTopRated(type));

/**
 *
 * @param querykey Query get trailer movie top rated
 * @param id
 * @returns Query
 */
const useMovieTopRatedPreview = (querykey: string[], id?: number) => {
  return useQuery(
    [...querykey, id],
    () => DetailMovieApi.getMovieDetailInfo(id),
    {
      enabled: typeof id !== "undefined",
      select: (movieDetailData) =>
        movieDetailData?.videos?.results.find(
          (item) => item?.type === "Trailer"
        )?.key,
    }
  );
};

export const UseHome = () => {
  const [imageHover, setImageHover] = useState<string>("");
  const [bannerMovieTrending, setBannerMovieTrending] = useState<string>("");
  const [mediaType, setMediaType] = useState<IMediaType>({
    popularType: "movie",
    topRatedType: "movie",
    trendingType: "day",
  });
  const [isShowModalPreviewTrailer, setShowPreviewTrailer] = useState(false);
  const [movieId, setMovieId] = useState<number | undefined>(undefined);
  // Call function query list movie trending week
  const movieTrendingResponse = useMovieTrendingQuery(
    Constant.QUERY_KEY.HOME.TRENDING_TODAY,
    mediaType.trendingType
  );

  // Call function query list movie popular
  const moviePopularResponse = useMoviePopularQuery(
    Constant.QUERY_KEY.HOME.MOVIE_POPULAR,
    mediaType.popularType
  );

  // Call function query list movie top rated
  const movieTopRatedResponse = useMovieTopratedQuery(
    Constant.QUERY_KEY.HOME.MOVIE_TOP_RATED,
    mediaType.topRatedType
  );
  // Call function query top rated movie preview (Select Key)
  let topRatedPreviewResponseSelectKey = useMovieTopRatedPreview(
    Constant.QUERY_KEY.HOME.MOVIE_TOP_RATED_PREVIEW,
    movieId
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
      setBannerMovieTrending(randomMovie.backdrop_path);
    }
  }, [movieTrendingResponse?.data?.results]);

  /**
   * Handle hover to movie item top rated
   * @param imageUrl
   */
  const handleHoverMovieTopRated = (imageUrl: string) => {
    setImageHover(`${Constant.IMAGE_PATH_W1920_H427}/${imageUrl}`);
  };

  /**
   * Handle click switch media type
   * @param value
   * @param mediaType
   */
  const handleClickSwitchButton = (value: string, mediaType: string) => {
    // Check media type user change
    switch (mediaType) {
      case Constant.MEDIA_TYPE.POPULAR:
        setMediaType((oldData) => ({ ...oldData, popularType: value }));
        break;
      case Constant.MEDIA_TYPE.TOP_RATED:
        setMediaType((oldData) => ({ ...oldData, topRatedType: value }));
        break;
      default:
        setMediaType((oldData) => ({ ...oldData, trendingType: value }));
    }
  };

  /**
   * Handle Click Item Top Rated
   */
  const handleClickItemTopRated = (id: number) => {
    setMovieId(id);
    setShowPreviewTrailer(true);
  };

  const handleCloseModalPreviewTrailer = () => {
    setShowPreviewTrailer(false);
  };

  return {
    listMovieTrending: movieTrendingResponse?.data?.results || [],
    listMoviePopular: moviePopularResponse?.data?.results || [],
    listMovieToprated: movieTopRatedResponse?.data?.results || [],
    topRatedPreviewKey: topRatedPreviewResponseSelectKey?.data || "",
    bannerMovieTrending,
    handleHoverMovieTopRated,
    imageHover,
    handleClickSwitchButton,
    handleClickItemTopRated,
    isShowModalPreviewTrailer,
    handleCloseModalPreviewTrailer,
  };
};

export default UseHome;
