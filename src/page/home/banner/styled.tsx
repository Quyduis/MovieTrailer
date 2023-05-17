import styled from "styled-components";

export const BannerStyled = styled.div<any>`
  background-image: var(--linear-gradient-dark),
    ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
