import { Card } from "antd";

import styled, { css, keyframes } from "styled-components";
import Constant from "util/Constants";
import { HorizontalListProps } from "./type";

export const Container = styled.div<HorizontalListProps>`
  ${(props) => {
    if (props.backgroundUrl) {
      return css`
        padding: 0.5rem 0;
        transition: all 2s ease-out;
        background-image: linear-gradient(
            to right,
            rgba(3, 37, 65, 0.8) 0%,
            rgba(3, 37, 65, 0) 100%
          ),
          ${(props: HorizontalListProps) => `url(${props.backgroundUrl})`};
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      `;
    }
  }}
`;

export const CardStyled = styled(Card)`
  min-width: 150px;
  width: 150px;
  border: none;
  position: relative;
  .ant-card-body {
    padding: 0;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: ${Constant.STYLED.BORDER_RADIUS_POSTER};
  height: 225px;
  margin-bottom: 24px;
`;

export const ImagePoster = styled.img`
  border-radius: ${Constant.STYLED.BORDER_RADIUS_POSTER};
  content: url("https://www.themoviedb.org/t/p/w220_and_h330_face/cjb9NXJvisfh5fmgX9rerxZfFrJ.jpg");
  width: 100%;
  height: 100%;
`;

export const ImageMore = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  &:hover {
    filter: brightness(0) saturate(100%) invert(53%) sepia(33%) saturate(3054%)
      hue-rotate(156deg) brightness(98%) contrast(99%);
  }
  top: 4px;
  right: 4px;
`;

export const HorzontalList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  gap: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  padding-top: 32px;
`;
