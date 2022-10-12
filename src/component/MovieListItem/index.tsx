import { CircleProgress, Text } from "component";
import { Movie } from "model/movie";
import moment from "moment";
import { useMemo } from "react";
import Constant from "util/Constants";
import { CardStyled, ImageMore, ImagePoster, ImageWrapper } from "./styled";

interface Props {
  movieItem: Movie;
}

const MovieListItem = ({ movieItem }: Props) => {
  const score: number = useMemo(() => {
    if (movieItem.vote_average) {
      return Math.ceil(movieItem.vote_average * 10);
    }
    return 0;
  }, [movieItem.vote_average]);



  return (
    <CardStyled>
      {/* Icon more */}
      <ImageMore src={`${Constant.PUBLIC_URL}/assets/more_image.svg`} />
      {/* Progress point */}
      <div className="absolute left-3 top-210px">
        <CircleProgress score={score} />
      </div>

      <div className="flex flex-col">
        {/* Poster */}
        <ImageWrapper>
          <ImagePoster imagePath={movieItem.poster_path}/>
        </ImageWrapper>
        <div className="px-1">
          {/* Title */}
          <Text size="medium" weight="bold">
            {movieItem.title}
          </Text>
          {/* Public Date */}
          <Text style={{ color: Constant.STYLED.COLOR_GRAY }} size="medium">
            {moment(movieItem.release_date).format(Constant.DATE_FORMAT)}
          </Text>
        </div>
      </div>
    </CardStyled>
  );
};

export default MovieListItem;
