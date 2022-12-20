import axiosClient from "api/AxiosClient";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useRef, useState } from "react";

const MovieDetailPage = () => {
  const posterRef = useRef<any>();
  const [image, setImage] = useState("");
  useEffect(() => {
    // getImageByUrl(
    //   "https://image.tmdb.org/t/p/w220_and_h330_face/wKagJQQTViFNFNarcVp8xOSXIbh.jpg"
    // );

    const fac = new FastAverageColor();

    fac.getColorAsync("https://image.tmdb.org/t/p/w220_and_h330_face/6ZfiG4P7jivJV0wgcNMSiS2Owhh.jpg")
            .then(color => {
                console.log('+++ colorrr', color);
                
            })
            .catch(e => {
                console.log(e);
            });
  }, []);


  return (
    <div id="test">
    </div>
  );
};

export default MovieDetailPage;
