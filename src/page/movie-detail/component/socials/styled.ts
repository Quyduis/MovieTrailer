import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  margin-top: 1rem;
  padding: 0 1rem;
  .link img {
    min-width: 1.875rem;
    cursor: pointer;
  }

  .link:nth-child(4) {
    padding-left: 0.25rem;
    border-left: 1px solid var(--light-gray);
  }
`;
