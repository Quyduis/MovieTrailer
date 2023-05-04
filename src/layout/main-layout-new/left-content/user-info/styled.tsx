import styled from "styled-components";

export const UserInfoContainerStyled = styled.div`
  /* box-shadow: var(--shadow-input);
  -webkit-box-shadow: var(--shadow-input); */
  border-radius: 2.5rem;
  background-color: var(--bg-input);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: var(--border-main);

  .user-info {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    .avatar-container {
      background-color: var(--bg-main);
      min-height: 4rem;
      min-width: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.4rem;
      border-radius: 100%;
      img {
        width: auto;
        height: auto;
      }
    }
  }
`;
