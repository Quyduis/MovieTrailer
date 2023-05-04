import { Button } from "antd";
import styled from "styled-components";

export const ButtonStyled = styled(Button)`
  display: flex;
  flex-direction: row;
  background-color: var(--bg-input);
  border: var(--border-main);
  /* box-shadow: var(--shadow-input);
  -webkit-box-shadow: var(--shadow-input); */
  color: var(--txt-main);
  gap: 1rem;
  /* margin-left: auto; */
  justify-content: center;
  align-items: center;
  .btn-icon {
    max-width: 1.5rem;
    font-size: 1rem;
  }
`;
