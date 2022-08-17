import { MovieListItem, Text } from "component";
import { MovieTrending } from "model/movie-trending";
import { useState } from "react";
import { HorzontalList, Switch, SwitchWrapper } from "./styled";

interface Props {
  listMovieTrending: MovieTrending[];
}

const Trendings = ({ listMovieTrending }: Props) => {
  const [type, setType] = useState("to-day");

  const handleClick = () => {
    setType(type === "to-week" ? "to-day" : "to-week");
  };

  return (
    <div className="pb-8">
      {/* Trending header */}
      <div className="m-8">
        <Text size="large" weight="bold">
          Trending
        </Text>

        <SwitchWrapper onClick={handleClick}>
          <Switch className={type} />
        </SwitchWrapper>
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
