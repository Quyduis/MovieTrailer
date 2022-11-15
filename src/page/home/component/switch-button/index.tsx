import { useState } from "react";
import {
  Switch,
  SwitchWrapperDesktop,
  ToggleLabel,
  SwitchWrapperForMobile,
} from "./styled";
import { IoIosArrowDown } from "react-icons/io";

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
  /**
   * NOTE(QUY-PHAM): Use For Large Screen
   */
  const [type, setType] = useState("toggle-left");

  /**
   * NOTE(QUY-PHAM): Use For Small Screen
   */
  const [isExpand, setExpand] = useState(false);

  /**
   * Handle Action Click Switch Button For LARRGE Screen
   */
  const handleClickSwitchButtonForLargeScreen = () => {
    setType((oldType) => {
      const newType =
        oldType === "toggle-left" ? "toggle-right" : "toggle-left";
      onToggle(newType);
      return newType;
    });
  };

  /**
   * Handle Action Click Switch Button For SMALL Screen
   */
  const handleClickSwitchButtonForSmallScreen = () => {
    setExpand(!isExpand);
  };
  return (
    <>
      {/* Switch Button For Large Screen */}
      <SwitchWrapperDesktop
        isLightTheme={isLightTheme}
        onClick={handleClickSwitchButtonForLargeScreen}
      >
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
      </SwitchWrapperDesktop>

      {/* Switch Button For Small Screen */}
      <SwitchWrapperForMobile
        isLightTheme={isLightTheme}
        isExpand={isExpand}
        onClick={handleClickSwitchButtonForSmallScreen}
      >
        <div className="toggle-label-wrapper">
          <ToggleLabel
            isLightTheme={isLightTheme}
            className={type === "toggle-left" ? "high-light" : "normal"}
          >
            {leftLabel}
          </ToggleLabel>
        </div>

        <div className="switch" />
        {isExpand && (
          <div className="toggle-label-wrapper">
            <ToggleLabel
              isLightTheme={isLightTheme}
              className={type === "toggle-right" ? "high-light" : "normal"}
            >
              {rightLabel}
            </ToggleLabel>
          </div>
        )}
      </SwitchWrapperForMobile>
    </>
  );
};

export default SwitchButton;
