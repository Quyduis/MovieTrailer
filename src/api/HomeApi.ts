import { ListRespone } from "model/common";
import { MovieTrending } from "model/movie-trending";
import axiosClient from "./AxiosClient";

const HomeApi = {
  getListMovieTrending(): Promise<ListRespone<MovieTrending>> {
    return axiosClient.get("trending/movie/week");
  },
};

export default HomeApi;
