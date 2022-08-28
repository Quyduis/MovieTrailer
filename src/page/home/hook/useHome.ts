import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HomeApi from "api/HomeApi";

export const useHome = () => {
  const [enable, setEnable] = useState(false);
  const { data: response } = useQuery(
    ["home-data", "trending"],
    HomeApi.getListMovieTrending,
    {
      refetchOnWindowFocus: false,
      //   staleTime: 10000,
    //   enabled: !!enable,
    }
  );

  console.log('+++ quyy', response);
  

  const test = () => {
    setEnable(!enable);
  };

  return { listMovieTrending: response?.data?.results, test };
};
