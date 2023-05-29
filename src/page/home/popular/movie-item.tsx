import { CircleProgress, Text } from "component";
import { Movie } from "model/movie";
import { useMemo } from "react";
import { ItemContainerStyled } from "./styled";

interface IProps {
  movie: Movie;
}
const MovieItem = ({ movie }: IProps) => {
  const score: number = useMemo(() => {
    if (movie.vote_average) {
      return Math.ceil(movie.vote_average * 10);
    }
    return 0;
  }, [movie.vote_average]);
  return (
    <ItemContainerStyled>
      <img
        className="poster"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt=""
      />
      <div className="rating">
        <CircleProgress score={score} />
      </div>

      <Text className="line-clamp-2" size="medium" color="white">
        {movie.title}
      </Text>
    </ItemContainerStyled>
  );
};

export default MovieItem;
