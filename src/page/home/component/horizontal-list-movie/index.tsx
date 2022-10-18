import { Text } from "component";
import { ReactNode } from "react";
import SwitchButton from "../switch-button";
import { Container, HorzontalList } from "./styled";

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
    <Container className={backgroundUrl ? 'transition' : ''} backgroundUrl={backgroundUrl}>
      {/* Header */}
      <div className="m-8 flex flex-row items-center gap-8">
        <Text
          color={backgroundUrl ? "white" : "black"}
          size="large"
          weight="bold"
        >
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
      <HorzontalList>{listItem}</HorzontalList>
    </Container>
  );
};

export default HorizontalListMovie;
