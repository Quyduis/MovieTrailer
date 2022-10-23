import { useState } from "react";
import { Switch, SwitchWrapper, ToggleLabel } from "./styled";

interface IProps {
  leftLabel: string;
  rightLabel: string;
  onToggle: (type: string) => void;
  isLightTheme?: boolean;
}

const SwitchButton = ({
  leftLabel,
  rightLabel,
  onToggle,
  isLightTheme = false,
}: IProps) => {
  const [type, setType] = useState("toggle-left");

  const handleClick = () => {
    setType((oldType) => {
      const newType =
        oldType === "toggle-left" ? "toggle-right" : "toggle-left";
      onToggle(newType);
      return newType;
    });
  };
  return (
    <SwitchWrapper isLightTheme={isLightTheme} onClick={handleClick}>
      <ToggleLabel
        isLightTheme={isLightTheme}
        className={type === "toggle-left" ? "high-light" : "normal"}
      >
        {leftLabel}
      </ToggleLabel>
      <Switch isLightTheme={isLightTheme} className={type} />
      <ToggleLabel
        isLightTheme={isLightTheme}
        className={type === "toggle-right" ? "high-light" : "normal"}
      >
        {rightLabel}
      </ToggleLabel>
    </SwitchWrapper>
  );
};

export default SwitchButton;
