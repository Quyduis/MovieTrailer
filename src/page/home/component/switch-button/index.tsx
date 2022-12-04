import { useEffect, useState } from "react";
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
   * Handle type of switch button changed
   */

  /**
   * Handle Action Click Switch Button
   */
  const handleClickSwitchButton = (value: string) => {
    // Set expand or collapse for small screen
    setExpand(!isExpand);

    setType(value === leftValue ? Constant.TOGGLE_LEFT : Constant.TOGGLE_RIGHT);
    // Call back when click switch button
    onClickSwitchButonn(value);
  };

  return (
    <>
      {/* Switch Button For Large Screen */}
      <SwitchWrapperDesktop isLightTheme={isLightTheme}>
        <ToggleLabel
          isLightTheme={isLightTheme}
          className={type === Constant.TOGGLE_LEFT ? "high-light" : "normal"}
          onClick={() => handleClickSwitchButton(leftValue)}
        >
          {leftLabel}
        </ToggleLabel>
        <Switch isLightTheme={isLightTheme} className={type} />
        <ToggleLabel
          isLightTheme={isLightTheme}
          className={type === Constant.TOGGLE_RIGHT ? "high-light" : "normal"}
          onClick={() => handleClickSwitchButton(rightValue)}
        >
          {rightLabel}
        </ToggleLabel>
      </SwitchWrapperDesktop>

      {/* Switch Button For Small Screen */}
      <SwitchWrapperForMobile isLightTheme={isLightTheme} isExpand={isExpand}>
        <div className="toggle-label-wrapper">
          <ToggleLabel
            isLightTheme={isLightTheme}
            className={type === Constant.TOGGLE_LEFT ? "high-light" : "normal"}
            onClick={() => handleClickSwitchButton(leftValue)}
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
              onClick={() => handleClickSwitchButton(rightLabel)}
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
