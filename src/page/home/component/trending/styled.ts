import { Card, Progress } from "antd";
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

export const Score = styled(Progress)`
    position: absolute;
    width: 34px;
    height: 34px;
    left: 12px;
    top: 210px;
    border-radius: 50%;
    background-color: black;
     .ant-progress-inner {
        width: 34px !important;
        height: 34px !important;
        font-size: 8px !important;
        .ant-progress-text {
            color: white ;
        }
    }
`
