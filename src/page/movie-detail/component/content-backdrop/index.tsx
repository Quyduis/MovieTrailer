import { Certification, CircleProgress, Text } from "component";
import { FastAverageColor } from "fast-average-color";
import { MovieDetail } from "model/movie";
import moment from "moment";
import { useEffect, useMemo } from "react";
import Constant from "util/Constants";
import { MobileContent, MobileContentBackdrop } from "./styled";
import _isEmpty from "lodash/isEmpty";
import _groupby from "lodash/groupBy";

interface IProps {
  movieDetail?: MovieDetail;
  renderProductionCountry: () => string;
  renderRuntime: () => string;
  renderMovieCategory: () => string;
}

const ContentBackDrop = ({
  movieDetail,
  renderMovieCategory,
  renderProductionCountry,
  renderRuntime,
}: IProps) => {
  console.log("+++ movieDetail", movieDetail?.credits?.crew);

  const score: number = useMemo(() => {
    if (movieDetail?.vote_average) {
      return Math.ceil(movieDetail?.vote_average * 10);
    }
    return 0;
  }, [movieDetail?.vote_average]);

  useEffect(() => {
    // Get root element
    const root: HTMLElement | null = document.querySelector(":root");
    // Set default value css variable
    root?.style.setProperty("--bg-content-backdrop", "white");
    root?.style.setProperty("--txt-backdrop", "black");
    if (movieDetail?.poster_path) {
      const fac = new FastAverageColor();
      // Get average color from poster path
      fac
        .getColorAsync(
          `https://image.tmdb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`,
          {
            ignoredColor: [
              [255, 248, 220], // white
              [0, 0, 0, 255], // black
            ],
          }
        )
        .then((color) => {
          // Set average value css variable
          root?.style.setProperty("--bg-content-backdrop", String(color.hex));
          root?.style.setProperty(
            "--txt-backdrop",
            `${color.isDark ? "white" : "black"}`
          );
        })
        .catch((e) => {
          // Do Something
        });
    }

    const coreTeam = movieDetail?.credits?.crew?.filter(
      (crew) => crew?.known_for_department === "Directing"
    );
    console.log("+++ coreTeam", _groupby(coreTeam, "id"));
  }, [movieDetail]);

  return (
    // Movile Content (Small Screen)
    <MobileContent>
      {/* Backdrop Image */}
      <MobileContentBackdrop
        backdropImage={`${Constant.IMAGE_PATH_W1000_h450}${movieDetail?.backdrop_path}`}
      >
        <div className="backdrop-gradient">
          {/* Backdrop Poster */}
          <img
            className="backdrop-poster"
            src={`${Constant.IMAGE_PATH_W220}${movieDetail?.poster_path}`}
            alt="poster"
          />
        </div>
      </MobileContentBackdrop>

      <div className="movie-title-container">
        {/* Movie Title */}
        <Text className="content-text movie-title" size="medium" weight="bold">
          {`${movieDetail?.title}`}
        </Text>

        {/* Movie Release Year */}
        <Text className="content-text movie-release-date" size="tiny">
          {`(${moment(movieDetail?.release_date).format("YYYY")})`}
        </Text>
      </div>

      <div className="second-header-container">
        {/* Score */}
        <div className="second-header-child">
          <CircleProgress score={score} />
          <Text className="content-text" size="medium">
            User Score
          </Text>
        </div>
        {/* Trailer */}
        <div className="second-header-child">
          <img
            className="icon-play"
            src={`${Constant.PUBLIC_URL}/assets/play_image.svg`}
            alt="play"
          />
          <Text className="content-text" size="tiny">
            Play Trailer
          </Text>
        </div>
      </div>
      {/* Genre */}
      <div className="genre-container">
        <div className="info">
          <Certification />
          <Text className="content-text" size="tiny">
            {`${moment(movieDetail?.release_date).format(
              "DD/MM/YYYY"
            )} (${renderProductionCountry()})`}
          </Text>
          <div className="dot" />
          <Text className="content-text" size="tiny">
            {renderRuntime()}
          </Text>
        </div>

        <div className="category">
          <Text className="content-text" size="tiny">
            {renderMovieCategory()}
          </Text>
        </div>
      </div>
      {/* Over View */}
      <div className="overview-container">
        <Text className="content-text movie-title" size="medium" weight="bold">
          Overview
        </Text>
        <Text className="content-text" size="tiny">
          {movieDetail?.overview || ""}
        </Text>
      </div>
    </MobileContent>
  );
};

export default ContentBackDrop;
