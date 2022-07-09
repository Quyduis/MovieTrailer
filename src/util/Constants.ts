interface IConstants {
  PUBLIC_URL: string;
  MAIN_COLOR: string;
  ACCESS_TOKEN: string;
  IMAGE_PATH_ORIGINAL: string
  IMAGE_PATH_W500: string
}

const Constant: IConstants = {
  PUBLIC_URL: process.env.PUBLIC_URL,
  MAIN_COLOR: "#032541",
  ACCESS_TOKEN:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjM2Y2Y0ZTM2YTQ3MDM1MjcwMWMzZTVlZDVhODQwNiIsInN1YiI6IjYwNDI1M2E1MWM2MzI5MDAyZTUxOGQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bAbUmb3eU_aerGTbb5yoL0vVmmZCERwyG4KRWFBIfr4",
  IMAGE_PATH_ORIGINAL: 'https://image.tmdb.org/t/p/original',
  IMAGE_PATH_W500: 'https://image.tmdb.org/t/p/w500'
};

export default Constant;
