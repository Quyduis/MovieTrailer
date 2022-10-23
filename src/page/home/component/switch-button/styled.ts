/** CSS Switch */

import styled, { css } from "styled-components";
import Constant from "util/Constants";
import { Text } from "component";

interface IProps {
  isLightTheme?: boolean;
}

export const SwitchWrapper = styled.div<IProps>`
  border: 1px solid
    ${(props) =>
      props.isLightTheme ? "var(--light-green)" : Constant.MAIN_COLOR};
  border-radius: 20px;
  max-width: 200px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  min-width: 200px;
  padding: 0px 16px;
`;

export const Switch = styled.div<IProps>`
  background: ${(props) =>
    props.isLightTheme ? "var(--linear-gradient-light)" : Constant.MAIN_COLOR};
  border-radius: 20px;
  width: 100px;
  transition: all 3s ease-in-out;
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &.toggle-right {
    right: 0;
  }

  &.toggle-left {
    left: 0;
  }
`;

export const ToggleLabel = styled(Text)<IProps>`
  z-index: 10;
  line-height: 1.8;
  &.high-light {
    background: ${(props) =>
      props.isLightTheme
        ? Constant.MAIN_COLOR
        : "var(--linear-gradient-light)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.normal {
    color: ${(props) => (props.isLightTheme ? "white" : "black")};
  }
`;
