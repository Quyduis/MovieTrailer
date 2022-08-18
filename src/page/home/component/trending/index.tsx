import { MovieListItem, Text } from "component";
import { MovieTrending } from "model/movie-trending";
import { useState } from "react";
import { HorzontalList, Switch, SwitchWrapper, ToggleLabel } from "./styled";

interface Props {
  listMovieTrending: MovieTrending[];
}

const Trendings = ({ listMovieTrending }: Props) => {
  const [type, setType] = useState("toggle-left");

  const handleClick = () => {
    setType(type === "toggle-left" ? "toggle-right" : "toggle-left");
  };

  return (
    <div className="pb-8">
      {/* Trending header */}
      <div className="m-8 flex flex-row items-center gap-8">
        <Text size="large" weight="bold">
          Trending
        </Text>

        <SwitchWrapper onClick={handleClick}>
          <ToggleLabel
            className={type === "toggle-left" ? "high-light" : "normal"}
          >
            Left
          </ToggleLabel>
          <Switch className={type} />
          <ToggleLabel
            className={type === "toggle-right" ? "high-light" : "normal"}
          >
            Right
          </ToggleLabel>
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
