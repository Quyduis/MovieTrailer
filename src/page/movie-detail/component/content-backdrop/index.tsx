import { Text } from "component";
import { FastAverageColor } from "fast-average-color";
import { MovieDetail } from "model/movie";
import { useEffect, useState } from "react";
import Constant from "util/Constants";
import { MobileContent, MobileContentBackdrop } from "./styled";

interface IProps {
    movieDetail?: MovieDetail;
}

const ContentBackDrop = ({ movieDetail }: IProps) => {
    console.log("+++ movieDetail", movieDetail?.backdrop_path);

    useEffect(() => {
        // Get root element
        const root: HTMLElement | null = document.querySelector(":root");
        // Set default value css variable
        root?.style.setProperty("--bg-content-backdrop", "white");
        root?.style.setProperty("--txt-backdrop", "black");
        if (movieDetail?.poster_path) {
            const fac = new FastAverageColor();
            // Get average color from poster path
            fac.getColorAsync(
                `https://image.tmdb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`
            )
                .then((color) => {
                    // Set average value css variable
                    root?.style.setProperty(
                        "--bg-content-backdrop",
                        String(color.hex)
                    );
                    root?.style.setProperty(
                        "--txt-backdrop",
                        `${color.isDark ? "white" : "black"}`
                    );
                })
                .catch((e) => {
                    // Do Something
                });
        }
    }, [movieDetail]);
    return (
        <MobileContent>
            <MobileContentBackdrop
                backdropImage={`${Constant.IMAGE_PATH_W1000_h450}${movieDetail?.backdrop_path}`}
            >
                <div className="backdrop-gradient">
                    <img
                        className="backdrop-poster"
                        src={`${Constant.IMAGE_PATH_W220}${movieDetail?.poster_path}`}
                        alt="poster"
                    />
                </div>
            </MobileContentBackdrop>

            <Text
                className="content-text movie-title"
                size="medium"
                weight="bold"
            >
                {movieDetail?.title}
            </Text>
        </MobileContent>
    );
};

export default ContentBackDrop;
