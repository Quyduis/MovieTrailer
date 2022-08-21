import { useState } from "react";
import { Switch, SwitchWrapper, ToggleLabel } from "./styled";

interface IProps {
  leftLabel: string;
  rightLabel: string;
  onToggle: (type: string) => void;
}

const SwitchButton = ({ leftLabel, rightLabel, onToggle }: IProps) => {
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
    <SwitchWrapper onClick={handleClick}>
      <ToggleLabel className={type === "toggle-left" ? "high-light" : "normal"}>
        {leftLabel}
      </ToggleLabel>
      <Switch className={type} />
      <ToggleLabel
        className={type === "toggle-right" ? "high-light" : "normal"}
      >
        {rightLabel}
      </ToggleLabel>
    </SwitchWrapper>
  );
};

export default SwitchButton;
