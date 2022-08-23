import { MovieListItem, Text } from "component";
import SwitchButton from "component/SwitchButton";
import { MovieTrending } from "model/movie-trending";
import { useState } from "react";
import { HorzontalList } from "./styled";

interface Props {
  listMovieTrending: MovieTrending[];
  onClickToggle: () => void
}

const Trendings = ({ listMovieTrending, onClickToggle }: Props) => {

  const handleToggleButton = (data: string) => {
    onClickToggle()
  }

  return (
    <div className="pb-8">
      {/* Trending header */}
      <div className="m-8 flex flex-row items-center gap-8">
        <Text size="large" weight="bold">
          Trending
        </Text>
      {/* Switch button trending */}
       <SwitchButton leftLabel="Today" rightLabel="This Week" onToggle={handleToggleButton}/>
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
