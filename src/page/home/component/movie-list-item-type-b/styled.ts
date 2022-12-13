import { Card } from "antd";
import styled from "styled-components";
import Constant from "util/Constants";

export const CardStyled = styled(Card)`
  border: none;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: ${Constant.STYLED.BORDER_RADIUS_POSTER};
  z-index: 1;
  background-color: transparent;
  .ant-card-body {
    padding: 0;
    .image-more {
      position: absolute;
      width: 24px;
      height: 24px;
      &:hover {
        filter: brightness(0) saturate(100%) invert(53%) sepia(33%)
          saturate(3054%) hue-rotate(156deg) brightness(98%) contrast(99%);
      }
      top: 4px;
      right: 4px;
    }

    .icon-play {
      position: absolute;
      color: white;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 5rem;
      width: 5rem;
      height: auto;
      /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    }

    .image-poster {
      min-width: 18.75rem;
      max-width: 18.75rem;
      height: auto;
      border-radius: ${Constant.STYLED.BORDER_RADIUS_POSTER};
    }

    .title {
      text-align: center;
    }
  }

  &:hover {
    transform: scale(1.05);
    & .icon-play {
      transition: all 0.2s ease-in-out;
      top: 50%;
      transform: translateY(-50%) translateX(-50%) scale(1.25);
    }
  }
`;
