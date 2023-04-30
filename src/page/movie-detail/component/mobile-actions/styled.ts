import styled from "styled-components";
import Constant from "util/Constants";

export const MobileActionsContainer = styled.div`
    padding: 1rem;
    width: 100%;
    background-color: rgba(var(--tmdbDarkBlue), 0.8);
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    backdrop-filter: blur(1.25rem);
    .item {
        color: white;
        font-size: 1rem;
        max-height: 1rem;
    }

    @media ${Constant.SCREEN.LARGE} {
    display: none;
  }
`
