import { MovieListItem, Text } from "component";
import { MovieTrending } from "model/movie-trending";
import { HorzontalList } from "./styled";

interface Props {
  listMovieTrending: MovieTrending[];
}

const Trendings = ({ listMovieTrending }: Props) => {
  return (
    <div className="pb-8">
      {/* Trending header */}
      <div className="m-8">
        <Text size="large" weight="bold">
          Trending
        </Text>
      </div>

      {/* Trendinf Item */}
      <HorzontalList>
        {Array.isArray(listMovieTrending) &&
          listMovieTrending?.map((item: MovieTrending, index: number) => {
            return <MovieListItem key={index} movieItem={item} />;
          })}
      </HorzontalList>
    </div>
  );
};

export default Trendings;
