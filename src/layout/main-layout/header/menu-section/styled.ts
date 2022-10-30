import { Menu } from "antd";
import styled from "styled-components";
import Constant from "util/Constants";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  .menu-icon {
    display: block;
    color: white;
    font-size: 1.25rem;
  }
  .menu-item {
    display: none;
  }

  @media ${Constant.SCREEN.LARGE} {
    .menu-icon {
      display: none;
    }
    .menu-item {
      display: block;
    }
  }
`;
