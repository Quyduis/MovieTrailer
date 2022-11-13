import { Text } from "component";
import { ReactNode, useEffect, useRef } from "react";
import SwitchButton from "../switch-button";
import { Container, HorzontalList, ScrollWrapper } from "./styled";

interface Props {
  title: string;
  onClickToggle: () => void;
  listItem: ReactNode;
  backgroundUrl?: string;
  initialBackgroundUrl?: string;
  isLightTheme?: boolean;
}

const HorizontalListMovie = ({
  title,
  onClickToggle,
  listItem,
  backgroundUrl,
  initialBackgroundUrl,
  isLightTheme,
}: Props) => {
  const handleToggleButton = (data: string) => {
    onClickToggle();
  };
  const ref = useRef<any>();

  useEffect(() => {
    if (backgroundUrl && ref) {
      ref.current.style.transition = "none";
      ref.current.style.transition = "all 1s";
      // ref.current.style.backgroundImage = `url(${backgroundUrl})`;
    }
  }, [backgroundUrl]);

  return (
    <ScrollWrapper>
      <Container
        ref={ref}
        className="lazy"
        backgroundUrl={backgroundUrl ? backgroundUrl : initialBackgroundUrl}
      >
        {/* Header */}
        <div className="m-8 flex flex-row items-center gap-8 header-container">
          <Text
            color={isLightTheme ? "white" : "black"}
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
            isLightTheme={isLightTheme}
          />
        </div>

        {/* Movie Item */}
        <HorzontalList className="list-container">{listItem}</HorzontalList>
      </Container>
    </ScrollWrapper>
  );
};

export default HorizontalListMovie;
