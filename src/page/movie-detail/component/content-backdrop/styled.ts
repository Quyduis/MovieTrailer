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
  .movie-title-container {
    text-align: center;
    margin: 0.5rem 0;
    .movie-title {
      font-size: 1.25rem;
      font-weight: 500;
      display: inline;
    }
    .movie-release-date {
      display: inline;
    }
  }

  .second-header-container {
    display: flex;
    flex-direction: row;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin-bottom: 0.5rem;
    & > * {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .second-header-child:nth-child(1) {
      gap: 0.25rem;
    }
    .second-header-child ~ .second-header-child {
      border-left: 1px solid var(--txt-backdrop);
    }
  }

  .genre-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    & > * {
      z-index: 2;
      position: relative;
    }
    .dot {
        border-radius: 50%;
        width: 4px;
        height: 4px;
        background-color: var(--txt-backdrop);
        display: inline-block;
    }
  }

  .genre-container::before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    filter: brightness(0.8);
    background-color: var(--bg-content-backdrop);
    z-index: 1;
    content: "";
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
