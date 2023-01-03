import { Certification, CircleProgress, Text } from "component";
import { FastAverageColor } from "fast-average-color";
import { MovieDetail } from "model/movie";
import moment from "moment";
import { useEffect, useMemo } from "react";
import Constant from "util/Constants";
import { MobileContent, MobileContentBackdrop } from "./styled";
import _isEmpty from "lodash/isEmpty";

interface IProps {
  movieDetail?: MovieDetail;
}

const ContentBackDrop = ({ movieDetail }: IProps) => {
  console.log("+++ movieDetail", movieDetail);

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
              [255, 255, 255, 255], // white
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
  }, [movieDetail]);

  /**
   * Render production country
   * @returns country
   */
  const renderProductionCountry = () => {
    if (
      _isEmpty(movieDetail?.production_countries) ||
      !movieDetail?.production_countries
    ) {
      return "";
    }
    return movieDetail?.production_countries[0]?.iso_3166_1 || "";
  };

  const renderRuntime = () => {
    if (movieDetail?.runtime) {
      const hour = Math.trunc(movieDetail?.runtime / 60);
      const minute = movieDetail?.runtime % 60;

      return `${hour}h ${minute}m`;
    }
    return "0m";
  };
  return (
    //   Movile Content
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
      {/* Over View */}
      <div className="over-view">
        <Text className="content-text movie-title" size="medium" weight="bold">
          Overview
        </Text>
      </div>
    </MobileContent>
  );
};

export default ContentBackDrop;
