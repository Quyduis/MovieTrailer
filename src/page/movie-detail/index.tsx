
import { FastAverageColor } from "fast-average-color";
import { useEffect, useRef } from "react";

const MovieDetailPage = () => {
  const posterRef = useRef<any>();
  //   useEffect(() => {
  //     const fac = new FastAverageColor();
  //     // fac
  //     //   .getColorAsync(posterRef.current)
  //     //   .then((color) => {
  //     //     console.log("+++ color", color);
  //     //   })
  //     //   .catch((e) => {
  //     //     console.log("+++ err", e);
  //     //   });
  //     const container = document.querySelector("#test");

  //     // console.log("+++ color", fac.getColor(container!!.querySelector("img")));

  //     const colorThief = new ColorThief();
  //     const img = container!!.querySelector("img");
  //     // img?.setAttribute("crossOrigin", "");
  //     img!!.onload = () => {
  //         console.log("+++ img onload", img);
  //     }
  //     img!!.src =
  //       "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mLbFg0u2DPYuB5CILzwWk3kdI8b.jpg";
  //     img?.setAttribute("crossOrigin", "");

  //     fac
  //       .getColorAsync(img)
  //       .then((color) => {
  //         console.log("+++ fast avg", color);
  //       })
  //       .catch((e) => {
  //         console.log("+++ error", e);
  //       });

  //     // console.log('+++ colorThief.getPalette(img);', colorThief.getColor(img));
  //   }, [posterRef.current]);

  const handleOnLoadImg = () => {
    const container = document.querySelector("#test");
    const img = container!!.querySelector("img");
    // img?.setAttribute("crossOrigin", "");
    console.log("+++ loaded", img);
    img!!.crossOrigin = "Anonymous";
    const fac = new FastAverageColor();
    const color = fac.getColor(img);
    console.log("+++ color", color);
  };

  return (
    <div id="test">
      <img
        onLoad={handleOnLoadImg}
        id="poster"
        ref={posterRef}
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mLbFg0u2DPYuB5CILzwWk3kdI8b.jpg"
        alt=""
        // crossOrigin="anonymous"
      />
    </div>
  );
};

export default MovieDetailPage;
