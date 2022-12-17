import { FastAverageColor } from "fast-average-color";
import { useEffect } from "react";

const MovieDetailPage = () => {
  useEffect(() => {
    const fac = new FastAverageColor();
    fac
      .getColorAsync(
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/94xxm5701CzOdJdUEdIuwqZaowx.jpg"
      )
      .then((color) => {
        console.log("+++ color", color);
      })
      .catch((e) => {
        console.log('+++ err', e);
      });
  }, []);
  return <div>Detail</div>;
};

export default MovieDetailPage;
