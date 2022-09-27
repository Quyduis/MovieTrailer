import { MovieListItem, Text } from "component";
import SwitchButton from "component/SwitchButton";
import { MovieTrending } from "model/movie-trending";
import { ReactNode, useState } from "react";
import { HorzontalList } from "./styled";

interface Props {
  listMovieTrending: MovieTrending[];
  onClickToggle: () => void;
  listItem: ReactNode;
}

const HorizontalListMovie = ({
  listMovieTrending,
  onClickToggle,
  listItem,
}: Props) => {
  const handleToggleButton = (data: string) => {
    onClickToggle();
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="m-8 flex flex-row items-center gap-8">
        <Text size="large" weight="bold">
          Trending
        </Text>
        {/* Switch button */}
        <SwitchButton
          leftLabel="Today"
          rightLabel="This Week"
          onToggle={handleToggleButton}
        />
      </div>

      {/* Movie Item */}
      <HorzontalList>{listItem}</HorzontalList>
    </div>
  );
};

export default HorizontalListMovie;
