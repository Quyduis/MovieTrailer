import { Text } from "component";
import { ReactNode, useEffect, useRef } from "react";
import SwitchButton from "../switch-button";
import { Container, HorzontalList, ScrollWrapper } from "./styled";

interface ISwitchOptionLabel extends Array<{ label: string; value: string }> {
  0: {
    label: string;
    value: string;
  };
  1: {
    label: string;
    value: string;
  };
}

interface Props {
  title: string;
  listItem: ReactNode;
  backgroundUrl?: string;
  initialBackgroundUrl?: string;
  isLightTheme?: boolean;
  switchOptionLabel: ISwitchOptionLabel;
  mediaType: string;
  onClickSwitchButton: (value: string) => void;
}

const HorizontalListMovie = ({
  title,
  listItem,
  backgroundUrl,
  initialBackgroundUrl,
  isLightTheme,
  switchOptionLabel,
  mediaType,
  onClickSwitchButton,
}: Props) => {
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
        <div className="column-wrapper">
          {/* Header */}
          <div className="header-wrapper">
            <Text
              color={isLightTheme ? "white" : "black"}
              size="large"
              weight="bold"
            >
              {title}
            </Text>
            {/* Switch button */}
            <SwitchButton
              leftLabel={switchOptionLabel[0].label}
              rightLabel={switchOptionLabel[1].label}
              leftValue={switchOptionLabel[0].value}
              rightValue={switchOptionLabel[1].value}
              isLightTheme={isLightTheme}
              onClickSwitchButonn={onClickSwitchButton}
            />
          </div>

          {/* Movie Item */}
          <HorzontalList className="list-container">{listItem}</HorzontalList>
        </div>
      </Container>
    </ScrollWrapper>
  );
};

export default HorizontalListMovie;
