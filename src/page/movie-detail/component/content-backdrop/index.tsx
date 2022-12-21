import { FastAverageColor } from "fast-average-color";
import { MovieDetail } from "model/movie";
import { useEffect } from "react";
import { MobileContentBackdrop } from "./styled";

interface IProps {
  movieDetail?: MovieDetail;
}

const ContentBackDrop = ({ movieDetail }: IProps) => {
  console.log("+++ movieDetail", movieDetail);

  useEffect(() => {
    const root: HTMLElement | null = document.querySelector(":root");
    root?.style.setProperty("--bg-content-backdrop", "white");
    if (movieDetail?.poster_path) {
      const fac = new FastAverageColor();
      fac
        .getColorAsync(
          `https://image.tmdb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`
        )
        .then((color) => {
          root?.style.setProperty("--bg-content-backdrop", String(color.hex));
        })
        .catch((e) => {
          // Do Something
        });
    }
  }, [movieDetail]);
  return <MobileContentBackdrop></MobileContentBackdrop>;
};

export default ContentBackDrop;
