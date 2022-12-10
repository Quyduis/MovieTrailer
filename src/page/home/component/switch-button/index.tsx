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
    setType(value === leftValue ? Constant.TOGGLE_LEFT : Constant.TOGGLE_RIGHT);

    // Call back when click switch button
    onClickSwitchButonn(value);
  };

  /**
   * Handle Action Click Switch Button For Small Screen
   */
  const handleClickSwitchButtonForSmallScreen = (value: string) => {
    // Set switch button expand or collapse for small screen

    console.log("+++ value", value);

    if (isExpand) {
      setType(
        value === leftValue ? Constant.TOGGLE_LEFT : Constant.TOGGLE_RIGHT
      );
      // Call back when click switch button
      onClickSwitchButonn(value);
    }
  };

  /**
   * Render left label for small screen
   * @returns
   */
  const renderLeftlabelForSmallScreen = () => {
    // If switch button is NOT expand => show label selected
    // Else => show left label
    if (isExpand) {
      return leftLabel;
    }
    return type === Constant.TOGGLE_LEFT ? leftLabel : rightLabel;
  };

  /**
   * Handle click expand switch button for small screen
   * @param event
   */
  const handleClickExpandSwitchButtonForSmallScreen = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setExpand(!isExpand);
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
      <SwitchWrapperForMobile
        isLightTheme={isLightTheme}
        isExpand={isExpand}
        onClick={(e) => handleClickExpandSwitchButtonForSmallScreen(e)}
      >
        <div className="toggle-label-wrapper">
          <ToggleLabel
            isLightTheme={isLightTheme}
            className={
              type === Constant.TOGGLE_LEFT || !isExpand
                ? "high-light"
                : "normal"
            }
            onClick={() => handleClickSwitchButtonForSmallScreen(leftValue)}
          >
            {renderLeftlabelForSmallScreen()}
          </ToggleLabel>
        </div>

        <div className={`switch ${type}`} />
        {isExpand && (
          <div className="toggle-label-wrapper">
            <ToggleLabel
              isLightTheme={isLightTheme}
              className={
                type === Constant.TOGGLE_RIGHT ? "high-light" : "normal"
              }
              onClick={() => handleClickSwitchButtonForSmallScreen(rightValue)}
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
