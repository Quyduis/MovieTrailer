import styled from "styled-components";

export const ItemContainerStyled = styled.div`
  background-color: black;
  border-radius: 2.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  min-width: 15rem;
  position: relative;
  .poster {
    border-radius: 2rem;
    width: 15rem;
    height: 20rem;
    margin-bottom: 2rem;
    border: 1px solid var(--el-main)
  }

  .rating {
    position: absolute;
    top: 19rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .info {
  }
`;
