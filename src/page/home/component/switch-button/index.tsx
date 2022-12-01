import { useState } from "react";
import Constant from "util/Constants";
import {
  Switch,
  SwitchWrapperDesktop,
  SwitchWrapperForMobile,
  ToggleLabel,
} from "./styled";

interface IProps {
  leftLabel: string;
  rightLabel: string;
  leftValue: string;
  rightValue: string;
  isLightTheme?: boolean;
  onClickSwitchButonn: (value: string) => void;
}

const SwitchButton = ({
  leftLabel,
  leftValue,
  rightValue,
  rightLabel,
  isLightTheme = false,
  onClickSwitchButonn,
}: IProps) => {
  /**
   * NOTE(QUY-PHAM): Use For Large Screen
   */
  const [type, setType] = useState(Constant.TOGGLE_LEFT);

  /**
   * NOTE(QUY-PHAM): Use For Small Screen
   */
  const [isExpand, setExpand] = useState(false);

  /**
   * Handle Action Click Switch Button
   */
  const handleClickSwitchButton = () => {
    // Set expand or collapse for small screen
    setExpand(!isExpand);

    setType((oldType) => {
      const newType =
        oldType === Constant.TOGGLE_LEFT
          ? Constant.TOGGLE_RIGHT
          : Constant.TOGGLE_LEFT;

      return newType;
    });
    onClickSwitchButonn(rightValue);
  };

  return (
    <>
      {/* Switch Button For Large Screen */}
      <SwitchWrapperDesktop
        isLightTheme={isLightTheme}
        onClick={handleClickSwitchButton}
      >
        <ToggleLabel
          isLightTheme={isLightTheme}
          className={type === Constant.TOGGLE_LEFT ? "high-light" : "normal"}
        >
          {leftLabel}
        </ToggleLabel>
        <Switch isLightTheme={isLightTheme} className={type} />
        <ToggleLabel
          isLightTheme={isLightTheme}
          className={type === Constant.TOGGLE_RIGHT ? "high-light" : "normal"}
        >
          {rightLabel}
        </ToggleLabel>
      </SwitchWrapperDesktop>

      {/* Switch Button For Small Screen */}
      <SwitchWrapperForMobile
        isLightTheme={isLightTheme}
        isExpand={isExpand}
        onClick={handleClickSwitchButton}
      >
        <div className="toggle-label-wrapper">
          <ToggleLabel
            isLightTheme={isLightTheme}
            className={type === Constant.TOGGLE_LEFT ? "high-light" : "normal"}
          >
            {leftLabel}
          </ToggleLabel>
        </div>

        <div className="switch" />
        {isExpand && (
          <div className="toggle-label-wrapper">
            <ToggleLabel
              isLightTheme={isLightTheme}
              className={
                type === Constant.TOGGLE_RIGHT ? "high-light" : "normal"
              }
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
