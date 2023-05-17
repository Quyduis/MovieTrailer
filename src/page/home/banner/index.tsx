import { Movie } from "model/movie"
import { useMemo } from "react";
import Constant from "util/Constants";
import { BannerStyled } from "./styled"

interface IProps {
    bannerMovieTrending?: Movie
}

const Banner = ({bannerMovieTrending}: IProps) => {

    const bannerUrl = useMemo(() => {
        if (bannerMovieTrending?.backdrop_path) {
            return `${Constant.IMAGE_PATH_ORIGINAL}/${bannerMovieTrending?.backdrop_path}`;
        }
    }, [bannerMovieTrending?.backdrop_path])

    console.log('+++ movieTrendingResponse 111', bannerMovieTrending);
    
    return (
        <BannerStyled url={bannerUrl}>
            
        </BannerStyled>
    )
}

export default Banner