import styled, { css } from "styled-components";
import { TextProps } from "./type";

export const TextStyled = styled.p<TextProps>`
  color: ${(prop) => prop.color || "black"};
  line-height: normal;
  word-break: break-word;
  cursor: pointer;
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
          font-weight: 0;
        `;
    }
  }};
  ${(prop) => {
    switch (prop.size) {
      case "large":
        return css`
          font-size: 1.5rem;
        `;

      case "medium":
        return css`
          font-size: 1.2rem;
        `;

      case "tiny":
        return css`
          font-size: 0.875rem;
          font-weight: unset;
        `;
      default:
        return css`
          font-size: ${prop.size};
        `;
    }
  }};
`;
