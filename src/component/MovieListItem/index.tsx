import { CircleProgress, Text } from "component";
import { MovieTrending } from "model/movie-trending";
import { useMemo } from "react";
import Constant from "util/Constants";
import { CardStyled, ImageMore, ImagePoster, ImageWrapper } from "./styled";

interface Props {
  movieItem: MovieTrending;
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
      <ImageMore src={`${Constant.PUBLIC_URL}/assets/more_image.svg`} />
      <div className="absolute left-3 top-210px">
        <CircleProgress score={score} />
      </div>

      <div className="flex flex-col">
        <ImageWrapper>
          <ImagePoster imagePath={movieItem.poster_path}/>
        </ImageWrapper>
        <div className="px-3">
          <Text size="medium" weight="bold">
            Card content
          </Text>
          <Text style={{ color: Constant.STYLED.COLOR_GRAY }} size="medium">
            May 04, 2022
          </Text>
        </div>
      </div>
    </CardStyled>
  );
};

export default MovieListItem;
