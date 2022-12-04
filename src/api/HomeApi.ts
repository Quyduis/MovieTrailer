import { ListRespone } from "model/common";
import { Movie } from "model/movie";
import { TV } from "model/tv";
import axiosClient from "./AxiosClient";

const HomeApi = {
  /**
   * GET list movie trending
   * @returns 
   */
  getListMovieTrending(type: string): Promise<ListRespone<Movie>> {
    return axiosClient.get(`/trending/movie/${type}`);
  },

  /**
   * GET list movie popular
   * @returns 
   */
  getListMoviePopuplar(type: string): Promise<ListRespone<Movie>> {
    return axiosClient.get(`/${type}/popular`)
  },

  /**
   * GET list movie top rated
   * @returns 
   */
  getListMovieTopRated(type: string): Promise<ListRespone<Movie>> {
    return axiosClient.get(`/${type}/top_rated`)
  }
};

export default HomeApi;
