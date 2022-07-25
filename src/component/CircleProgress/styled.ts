import styled from "styled-components";

export const PercentContainer = styled.div`
  width: 34px;
  height: 34px;
  position: relative;

  .percent-content {
    position: absolute;
    color: white;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 900;
    font-size: 9px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    
  }
`;
