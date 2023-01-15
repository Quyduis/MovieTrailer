import styled from "styled-components";

export const TopBilledCastContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  margin-top: 1rem;
  padding: 0 1rem;
  .item {
    border: 1px solid var(--light-gray);
    border-radius: 0.25rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-height: 15.625rem;
    .cast-image {
      min-width: 7.5rem;
      min-height: 8.3125rem;
      border-radius: inherit;
      outline: 1px solid var(--light-gray);
    }
    .content-text {
        padding: 0.25rem 0.5rem;
    }
  }
`;
