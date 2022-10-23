import { Form, Input } from "antd";
import styled from "styled-components";

interface BannerProps {
  url: string;
}

export const BannerStyled = styled.div<BannerProps>`
  background-image: var(--linear-gradient-dark),
    ${(props: BannerProps) => `url(${props.url})`};
  min-height: 18.75rem;
  max-height: 22.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormStyled = styled(Form)`
  max-height: 50px;
  position: relative;
  & .ant-input {
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.5);
    /* background-color: black; */
    &:hover {
      border-color: unset;
      outline: none;
      /* background-color: red; */
    }

    &:focus {
      border-color: unset;
      outline: none;
      box-shadow: none;
      /* background-color: blue; */
    }
  }

  & .submit {
    color: white;
    font-weight: 700;
    position: absolute;
    cursor: pointer;
    padding: 10px 20px;
    width: 110px;
    background: linear-gradient(
      to right,
      rgba(30, 213, 169, 1) 0%,
      rgba(1, 180, 228, 1) 100%
    );
    top: 0;
    right: -1px;

    &:hover {
      border-color: unset;
      outline: none;
    }

    &:focus {
      /* border-color: unset; */
      outline: none;
      border: none !important;
      box-shadow: none;
      margin: 0;
      height: 100%;
    }
  }
`;
