

/** CSS Switch */

import styled from "styled-components";
import Constant from "util/Constants";
import { Text } from "component";

export const SwitchWrapper = styled.div`
  border: 1px solid ${Constant.MAIN_COLOR};
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

export const Switch = styled.div`
  border-radius: 20px;
  width: 100px;
  transition: all 3s ease-in-out;
  background-color: ${Constant.MAIN_COLOR};
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

export const ToggleLabel = styled(Text)`
  z-index: 10;
  line-height: 1.8;
  &.high-light {
    background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.normal {
    color: black;
  }
`;
