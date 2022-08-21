import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HomeApi from "api/HomeApi";

export const useHome = () => {
  const { data } = useQuery(
    ["home-data", "trending"],
    HomeApi.getListMovieTrending,
    {
        refetchOnWindowFocus: false
    }
  );

  return { data };
};
