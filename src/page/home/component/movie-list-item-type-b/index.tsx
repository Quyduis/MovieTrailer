import { PlayCircleOutlined } from "@ant-design/icons";
import { Movie } from "model/movie";
import Constants from "util/Constants";
import { CardStyled } from "./styled";

interface IProps {
  movieItem: Movie;
  onHover: (imageUrl: string) => void;
}

const MovieListItemTypeB = ({ movieItem, onHover }: IProps) => {
  return (
    <CardStyled onMouseEnter={() => onHover(movieItem?.poster_path)}>
      <img
        className="image-more"
        src={`${Constants.PUBLIC_URL}/assets/more_image.svg`}
        alt="more"
      />
      <PlayCircleOutlined className="icon-play" />
      <img
        className="image-poster"
        src={`${Constants.IMAGE_PATH_W710_H400}/${movieItem?.poster_path}`}
        alt="poster"
      />
    </CardStyled>
  );
};

export default MovieListItemTypeB;
