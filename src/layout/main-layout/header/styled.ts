import styled from "styled-components";
import Constant from "util/Constants";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--bg-main-color);
    padding: 0.75rem 1.5rem;
    .img-tmdb-moblie {
        height: 2.5rem;
    }
    @media ${Constant.SCREEN.LARGE} {
        padding: 1.25rem 3rem;
        .img-tmdb-moblie {
            display: none;
        }
    }
`