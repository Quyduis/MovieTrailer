import { DeviceSize } from "./DeviceSize";

// interface IConstants {
//   PUBLIC_URL: string;
//   MAIN_COLOR: string;
//   ACCESS_TOKEN: string;
//   IMAGE_PATH_ORIGINAL: string;
//   IMAGE_PATH_W500: string;
//   IMAGE_PATH_W220: string;
//   IMAGE_PATH_W1920_H427: string;
//   IMAGE_PATH_W710_H400: string;
//   IMAGE_PATH_W600_H900_BEST_V2: string;
//   IMAGE_PATH_W1000_h450: string;
//   STYLED: {
//     BORDER_RADIUS_POSTER: string;
//     COLOR_GRAY: string;
//   };
//   QUERY_KEY: {
//     HOME: {
//       TRENDING_TODAY: string[];
//       MOVIE_POPULAR: string[];
//       MOVIE_TOP_RATED: string[];
//       MOVIE_TOP_RATED_PREVIEW: string[];
//     };
//     DETAIL: {
//       MOVIE: string[];
//     };
//   };
//   DATE_FORMAT: string;
//   SCREEN: {
//     SMALL: string;
//     MEDIUM: string;
//     LARGE: string;
//   };
//   MEDIA_TYPE: {
//     POPULAR: string;
//     TOP_RATED: string;
//     TRENDING: string;
//   };
//   TOGGLE_LEFT: string;
//   TOGGLE_RIGHT: string;
// }

const Constant = {
  PUBLIC_URL: process.env.PUBLIC_URL,
  MAIN_COLOR: "#032541",
  ACCESS_TOKEN:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjM2Y2Y0ZTM2YTQ3MDM1MjcwMWMzZTVlZDVhODQwNiIsInN1YiI6IjYwNDI1M2E1MWM2MzI5MDAyZTUxOGQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bAbUmb3eU_aerGTbb5yoL0vVmmZCERwyG4KRWFBIfr4",
  IMAGE_PATH_ORIGINAL: "https://image.tmdb.org/t/p/original",
  IMAGE_PATH_W500: "https://image.tmdb.org/t/p/w500",
  IMAGE_PATH_W220: "https://www.themoviedb.org/t/p/w220_and_h330_face",
  IMAGE_PATH_W1920_H427:
    "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces",
  IMAGE_PATH_W710_H400:
    "https://www.themoviedb.org/t/p/w710_and_h400_multi_faces",
  IMAGE_PATH_W600_H900_BEST_V2:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2",
  IMAGE_PATH_W1000_h450: "https://image.tmdb.org/t/p/w1000_and_h450_multi_faces",
  IMAGE_PATH_W240_h266_FACE: "https://www.themoviedb.org/t/p/w240_and_h266_face",
  STYLED: {
    BORDER_RADIUS_POSTER: "8px",
    COLOR_GRAY: "rgba(0,0,0,0.6)",
  },
  QUERY_KEY: {
    HOME: {
      TRENDING_TODAY: ["HOME", "TRENDING-TODAY"],
      MOVIE_POPULAR: ["HOME", "MOVIE-POPULAR"],
      MOVIE_TOP_RATED: ["HOME", "MOVIE-TOP_RATED"],
      MOVIE_TOP_RATED_PREVIEW: ["HOME", "MOVIE-TOP_RATED_PREVIEW"],
    },
    DETAIL: {
      MOVIE: ["DETAIL", "MOVIE"],
    },
  },
  DATE_FORMAT: "MMM DD, YYYY",
  SCREEN: {
    SMALL: `only screen and (max-width: ${DeviceSize.medium})`,
    MEDIUM: `only screen and (min-width: ${DeviceSize.medium})`,
    LARGE: `only screen and (min-width: ${DeviceSize.large})`,
  },
  MEDIA_TYPE: {
    POPULAR: "popular",
    TOP_RATED: "top_rated",
    TRENDING: "trending",
  },
  TOGGLE_LEFT: "toggle-left",
  TOGGLE_RIGHT: "toggle-right",

  PATH: {
    HOME: "/",
    FAVORITE: "/favorite",
    REMIND: "/remind",
  }
};

export default Constant;
