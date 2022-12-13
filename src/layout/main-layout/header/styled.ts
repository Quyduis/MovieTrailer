import styled from "styled-components";
import Constant from "util/Constants";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--bg-main-color);
    padding: 0.75rem 1.5rem;
    /* position: absolute;
    top: 0; */
    .img-tmdb-moblie {
        height: 2.5rem;
    }
    @media ${Constant.SCREEN.LARGE} {
        padding: 1.25rem 3rem;
        position: fixed;
        z-index: 1;
        width: 100%;
        transition: top 0.5s;
        .img-tmdb-moblie {
            display: none;
        }
    }
`;
