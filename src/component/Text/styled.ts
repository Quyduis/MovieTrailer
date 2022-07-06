import styled, { css } from "styled-components";
import { TextProps } from "./type";

export const TextStyled = styled.p<TextProps>`
  color: ${(prop: TextProps) => prop.color || "black"};
  ${(prop: TextProps) => {
    switch (prop.weight) {
      case "bold":
        return css`
          font-weight: 700;
        `;
      case "semi-bold":
        return css`
          font-weight: 600;
        `;
      default:
        return css`
          font-weight: 500;
        `;
    }
  }};
  ${(prop: TextProps) => {
    switch (prop.size) {
      case "large":
        return css`
          font-size: 1.5rem;
        `;

      case "medium":
        return css`
          font-size: 1rem;
        `;

      case "tiny":
        return css`
          font-size: 0.5rem;
        `;
      default:
        return css`
          font-size: ${prop.size};
        `;
    }
  }};
`;
