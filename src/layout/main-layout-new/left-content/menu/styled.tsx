import styled from "styled-components";

export const MenuStyled = styled.ul`
    margin-top: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
        display: flex;
        flex-direction: row;
        padding: 1.5rem 2rem;
        border-radius: 1.5rem;
        align-items: center;
        gap: 1rem;
    };
    li.selected {
        background-color: var(--el-main);
        img {
            filter: brightness(0)
        };
        p {
            color: var(--bg-main);
        }
    }
`