import styled from "styled-components";
import Constant from "util/Constants";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  background-color: var(--bg-main-color);
  cursor: pointer;
  .footer-icon {
    display: none;
  }
  & .footer-content {
    display: flex;
    flex-direction: column;
    max-width: 9.375rem;
    align-self: flex-start;
  }
  @media ${Constant.SCREEN.LARGE} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;
    .footer-icon {
      display: block;
    }
  }
`;
