import { Card } from "antd";
import styled from "styled-components";
import Constant from "util/Constants";

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
`;

/** CSS Switch */

export const SwitchWrapper = styled.div`
  border: 1.5px solid ${Constant.MAIN_COLOR};
  border-radius: 20px;
  max-width: 200px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const Switch= styled.div`
  border-radius: 20px;
  width: 100px;
  transition: left 3s ease-in-out, right 3s ease-in-out;
  background-color: ${Constant.MAIN_COLOR};
  position: absolute;
  height: 100%;
  &.to-week{
    right: 0;
  }

  &.to-day{
    left: 0;
  }
`;
