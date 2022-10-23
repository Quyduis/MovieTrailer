import { PlayCircleOutlined } from "@ant-design/icons";
import { Text } from "component";
import { Movie } from "model/movie";
import Constants from "util/Constants";
import { CardStyled } from "./styled";

interface IProps {
  movieItem: Movie;
  onHover: (imageUrl: string) => void;
}

const MovieListItemTypeB = ({ movieItem, onHover }: IProps) => {
  return (
    <CardStyled
      className="item"
      onMouseEnter={() => onHover(movieItem?.poster_path)}
    >
      <img
        className="image-more"
        src={`${Constants.PUBLIC_URL}/assets/more_image.svg`}
        alt="more"
      />
      <img
        className="icon-play"
        src={`${Constants.PUBLIC_URL}/assets/play_image.svg`}
        alt="play"
      />
      {/* <PlayCircleOutlined className="icon-play" /> */}
      <img
        className="image-poster"
        src={`${Constants.IMAGE_PATH_W710_H400}/${movieItem?.poster_path}`}
        alt="poster"
      />

      <Text className="title" color="white" size="medium" weight="bold">
        {movieItem?.title} Text dai Text Dai Text dai Text Dai 
      </Text>
    </CardStyled>
  );
};

export default MovieListItemTypeB;