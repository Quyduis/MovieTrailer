import { MovieDetail } from "model/movie";
import axiosClient from "./AxiosClient";

const DetailMovieApi = {
    /**
     * Get Detail
     * @param id 
     * @returns 
     */
  getMovieDetailInfo(id?: number): Promise<MovieDetail> {
    return axiosClient.get(`movie/${id}?append_to_response=videos,credits`);
  },
};

export default DetailMovieApi;
