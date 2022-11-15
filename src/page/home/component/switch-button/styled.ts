/** CSS Switch For Large Screen */

import styled, { css } from "styled-components";
import Constant from "util/Constants";
import { Text } from "component";

interface IProps {
  isLightTheme?: boolean;
}

interface IPropsSmallScreen {
  isLightTheme?: boolean;
  isExpand?: boolean;
}

export const SwitchWrapperDesktop = styled.div<IProps>`
  display: none;
  @media ${Constant.SCREEN.LARGE} {
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
  }
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
    display: inline;
  }

  &.normal {
    color: ${(props) => (props.isLightTheme ? "white" : "black")};
  }
`;

/** CSS Switch For Small Screen */

export const SwitchWrapperForMobile = styled.div<IPropsSmallScreen>`
  display: none;
  @media ${Constant.SCREEN.SMALL} {
    border: 1px solid
      ${(props) =>
        props.isLightTheme ? "var(--light-green)" : Constant.MAIN_COLOR};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    background: var(--linear-gradient-light);
    cursor: pointer;

    .switch {
      background: ${(props) =>
        props.isLightTheme
          ? "var(--linear-gradient-light)"
          : Constant.MAIN_COLOR};
      border-radius: 20px;
      left: 0;
      right: 0;
      height: ${(props) => (props.isExpand ? "50%" : "100%")};
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      position: absolute;
    }

    .toggle-label-wrapper {
      padding: 0.25rem 1rem;
      z-index: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;
