import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import __get from "lodash/get";
import Constant from "util/Constants";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${Constant.ACCESS_TOKEN}`,
    
  },
  timeout: 300000,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    
    // Do something before request is sent
    return config;
  },
  (error: any) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response: any) => {
    return {
      ...response?.data,
      status: response?.status,
    };
  },
  (error: any) => {
    const { response = {} } = error;

    if (response.status === 401) {
      // Remove Token
      //   localStorage.removeItem(Constants.ACCESS_TOKEN);
      //   window.location.href = "/login";
    } else if (response.status === 403) {
      // TODO
    } else if (response.status === 500) {
      // TODO
    } else {
      return error.response || error.request || error.message;
    }
  }
);

export const axiosHandler = (service: any) => {
  return new Promise<any>(async (resolve) => {
    const response: AxiosResponse = await service();

    const apiResponse = __get(response, "response", undefined);
    const httpStatus = __get(response, "status", 500);

    // TODO: Change response status
    if (apiResponse === "" || (response && response.status >= 500)) {
      resolve({ isSuccess: false, isInternalServerError: true });
    }

    const payload = __get(response, "data", null);
    const status = __get(response, "statusText", null);

    const data = payload;

    let message = null;

    const isSuccess = httpStatus === 200;
    const isFailure = httpStatus !== 200;

    resolve({
      data,
      status,
      httpStatus,
      message,
      isSuccess,
      isFailure,
      response,
      isInternalServerError: false,
    });
  });
};

export default axiosClient;
