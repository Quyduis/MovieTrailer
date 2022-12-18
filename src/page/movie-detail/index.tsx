import { FastAverageColor } from "fast-average-color";
import { useEffect, useRef } from "react";

const MovieDetailPage = () => {
  const posterRef = useRef<any>();
  useEffect(() => {
    const src = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mLbFg0u2DPYuB5CILzwWk3kdI8b.jpg";
    const options = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        // "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
      },
    };

    fetch(src, options)
      .then((res) => {
          console.log('+++ res', res);
          
          return res.blob()
      })
      .then((blob) => {
        console.log('+++ fetch', URL.createObjectURL(blob));
        
      });
  }, [posterRef.current]);

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
      {/* <img
        onLoad={handleOnLoadImg}
        id="poster"
        ref={posterRef}
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mLbFg0u2DPYuB5CILzwWk3kdI8b.jpg"
        alt=""
        // crossOrigin="anonymous"
      /> */}
    </div>
  );
};

export default MovieDetailPage;
