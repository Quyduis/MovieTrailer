import { MovieListItemTypeA, Text } from "component";
import SwitchButton from "component/SwitchButton";
import { Movie } from "model/movie";
import { ReactNode, useState } from "react";
import { HorzontalList } from "./styled";

interface Props {
  title: string;
  onClickToggle: () => void;
  listItem: ReactNode;
  backgroundUrl?: string;
}

const HorizontalListMovie = ({
  title,
  onClickToggle,
  listItem,
  backgroundUrl,
}: Props) => {
  const handleToggleButton = (data: string) => {
    onClickToggle();
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="m-8 flex flex-row items-center gap-8">
        <Text size="large" weight="bold">
          {title}
        </Text>
        {/* Switch button */}
        <SwitchButton
          leftLabel="Today"
          rightLabel="This Week"
          onToggle={handleToggleButton}
        />
      </div>

      {/* Movie Item */}
      <HorzontalList backgroundUrl={backgroundUrl}>{listItem}</HorzontalList>
    </div>
  );
};

export default HorizontalListMovie;
