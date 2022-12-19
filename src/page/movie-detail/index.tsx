import axiosClient from "api/AxiosClient";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useRef, useState } from "react";

const MovieDetailPage = () => {
  const posterRef = useRef<any>();
  const [image, setImage] = useState("");
  useEffect(() => {
    toDataURL(
      "https://image.tmdb.org/t/p/w220_and_h330_face/wKagJQQTViFNFNarcVp8xOSXIbh.jpg"
    );
  }, []);

  const handleOnLoadImg = () => {
    const container = document.querySelector("#test");
    const img = container!!.querySelector("img");
    // img?.setAttribute("crossOrigin", "");
    console.log("+++ loaded", img);
    // img!!.crossOrigin = "Anonymous";
    const fac = new FastAverageColor();
    const color = fac.getColor(img);
    console.log("+++ color", color);

    // fac
    //   .getColorAsync(
    //     "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mLbFg0u2DPYuB5CILzwWk3kdI8b.jpg"
    //   )
    //   .then((color) => {
    //     // container.style.backgroundColor = color.rgba;
    //     // container.style.color = color.isDark ? '#fff' : '#000';

    //     console.log("Average color", color);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  function toDataURL(url: string) {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => setImage(String(reader.result));
        // console.log("+++ blob", reader.result)
        // reader.onerror = error => reject(error);

        return URL.createObjectURL(blob);
      });
  }

  return (
    <div id="test">
      <img
        // style={{ visibility: "hidden" }}
        onLoad={handleOnLoadImg}
        id="poster"
        ref={posterRef}
        src={image}
        alt=""
        // crossOrigin="anonymous"
      />
    </div>
  );
};

export default MovieDetailPage;
