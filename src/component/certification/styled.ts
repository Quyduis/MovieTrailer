import styled from "styled-components";

export const CertificationContainer = styled.div`
  display: inline-block;
  border: 1px solid var(--txt-backdrop);
  border-radius: 5px;
  padding: 2.5px;
  filter: brightness(0.8);
  & > * {
    color: var(--txt-backdrop);
    font-weight: unset;
  }
`;
