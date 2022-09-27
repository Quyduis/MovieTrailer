interface IConstants {
  PUBLIC_URL: string;
  MAIN_COLOR: string;
  ACCESS_TOKEN: string;
  IMAGE_PATH_ORIGINAL: string;
  IMAGE_PATH_W500: string;
  IMAGE_PATH_W220: string;
  STYLED: {
    BORDER_RADIUS_POSTER: string;
    COLOR_GRAY: string;
  };
  QUERY_KEY: {
    HOME: {
      TRENDING_TODAY: string[];
    };
  };
}

const Constant: IConstants = {
  PUBLIC_URL: process.env.PUBLIC_URL,
  MAIN_COLOR: "#032541",
  ACCESS_TOKEN:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjM2Y2Y0ZTM2YTQ3MDM1MjcwMWMzZTVlZDVhODQwNiIsInN1YiI6IjYwNDI1M2E1MWM2MzI5MDAyZTUxOGQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bAbUmb3eU_aerGTbb5yoL0vVmmZCERwyG4KRWFBIfr4",
  IMAGE_PATH_ORIGINAL: "https://image.tmdb.org/t/p/original",
  IMAGE_PATH_W500: "https://image.tmdb.org/t/p/w500",
  IMAGE_PATH_W220: "https://www.themoviedb.org/t/p/w220_and_h330_face",
  STYLED: {
    BORDER_RADIUS_POSTER: "8px",
    COLOR_GRAY: "rgba(0,0,0,0.6)",
  },
  QUERY_KEY: {
    HOME: {
      TRENDING_TODAY: ["HOME", "TRENDING-TODAY"],
    },
  },
};

export default Constant;
