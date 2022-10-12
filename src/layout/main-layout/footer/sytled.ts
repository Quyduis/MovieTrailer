import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  background-color: var(--bg-main-color);
  cursor: pointer;
  & .footer-content {
      display: flex;
      flex-direction: column;
      max-width: 9.375rem;
      align-self: flex-start;
  }
`;
