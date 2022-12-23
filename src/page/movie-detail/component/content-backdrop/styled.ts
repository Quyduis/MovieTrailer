import styled from "styled-components";
import Constant from "util/Constants";

interface ContentBackdropProps {
    backdropImage?: string;
}

export const MobileContent = styled.div`
    background-color: var(--bg-content-backdrop);
    height: 500px;
    .content-text {
        color: var(--txt-backdrop);
    }
    .movie-title {
      margin: 0.5rem 0;
      font-size: 1.375rem;
      font-weight: unset;
      text-align: center;
    }
`;

export const MobileContentBackdrop = styled.div<ContentBackdropProps>`
    background-color: var(--bg-content-backdrop);
    position: relative;
    /* height: 300px; */
    background-image: ${(props: ContentBackdropProps) =>
        `url(${props.backdropImage})`};
    /* background-image: url('https://image.tmdb.org/t/p/original/nfdVrxicFrwIbWV4856btQA1IBX.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 10.5rem;
    .backdrop-gradient {
        height: 100%;
        background-image: linear-gradient(
            to right,
            var(--bg-content-backdrop) 10%,
            rgba(31.5, 31.5, 31.5, 0) 50%
        );

        .backdrop-poster {
            position: absolute;
            top: 1.25rem;
            left: 1.25rem;
            width: calc(((100vw / 2.222222) - 40px) / 1.5);
            min-width: calc(((100vw / 2.222222) - 40px) / 1.5);
            height: calc((100vw / 2.222222) - 40px);
            min-height: calc((100vw / 2.222222) - 40px);
            border-radius: ${Constant.STYLED.BORDER_RADIUS_POSTER};
        }
    }
`;
