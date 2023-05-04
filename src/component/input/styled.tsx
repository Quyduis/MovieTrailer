import { Input } from "antd";
import styled from "styled-components";

export const InputStyled = styled(Input)`
  border-radius: 2rem;
  background-color: var(--bg-input);
  border: var(--border-main);
  /* box-shadow: var(--shadow-input);
  -webkit-box-shadow: var(--shadow-input); */
  align-self: center;
  color: var(--txt-main);

  .ant-input {  
    background-color: transparent;
    color: inherit;
  }

  .ant-input-prefix {
    width: 2rem;
    height: auto;
    font-size: 1rem;
  }
`;
