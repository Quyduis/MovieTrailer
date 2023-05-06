import { Card } from "antd";

import styled, { css } from "styled-components";
import Constant from "util/Constants";
import { HorizontalListProps } from "./type";

export const ScrollWrapper = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2.5rem;
    top: 0;
    right: 0;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    );
    z-index: 1000;

    @media ${Constant.SCREEN.LARGE} {
      width: 3.75rem;
    }
  }
`;

export const Container = styled.div<HorizontalListProps>`
  .column-wrapper {
    background-image: ${(props) =>
      props.backgroundUrl ? " var(--linear-gradient-dark)" : "none"};
    height: 100%;
    padding: 0.5rem 0 0 0;
    position: relative;
    .header-wrapper {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      padding: 1rem 1rem 0rem 1rem;
      position: absolute;

      & > * {
        z-index: 2;
      }

      @media ${Constant.SCREEN.LARGE} {
        gap: 2rem;
        padding: 2rem 2rem 0rem 2rem;
        position: relative;
      }
    }
  }
  ${(props) => {
    if (props.backgroundUrl) {
      return css`
        background-image: ${(props: HorizontalListProps) =>
          `url(${props.backgroundUrl})`};
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
  padding: 1rem;
  margin-top: 2.875rem;
  @media ${Constant.SCREEN.LARGE} {
    padding: 2rem;
    margin-top: 0;
  }
`;
