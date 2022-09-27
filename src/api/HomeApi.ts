import { ListRespone } from "model/common";
import { Movie } from "model/movie";
import axiosClient from "./AxiosClient";

const HomeApi = {
  /**
   * GET list movie trending
   * @returns 
   */
  getListMovieTrending(): Promise<ListRespone<Movie>> {
    return axiosClient.get("trending/movie/week");
  },

  /**
   * GET list movie popular
   * @returns 
   */
  getListMoviePopuplar(): Promise<ListRespone<Movie>> {
    return axiosClient.get("/movie/popular")
  }
};

export default HomeApi;
