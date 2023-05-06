import { useQuery } from "@tanstack/react-query";
import HomeApi from "api/HomeApi";
import { useState } from "react";
import Constant from "util/Constants";

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

  return {};
};

export default UseInit;
