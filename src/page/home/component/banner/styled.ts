import styled from "styled-components";

interface BannerProps {
  url: string;
}

export const BannerStyled = styled.div<BannerProps>`
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.8) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    ${(props: BannerProps) => `url(${props.url})`};
  min-height: 300px;
  max-height: 360px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;
