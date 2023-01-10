import styled from "styled-components";

export const KeywordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;
  gap: 0.25rem;
  .title {
    flex: 0 1 100%;
    margin-bottom: 0.5rem;
  }
  .item {
    padding: 4px 8px;
    border-radius: 0.25rem;
    background-color: lightgray;
    .content-text {
      text-align: center;
    }
  }
`;
