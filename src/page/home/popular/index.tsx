import { Movie } from "model/movie"
import { ReactNode } from "react";

interface IProps {
    movieItems: ReactNode
}
const MoviePopulars = ({movieItems}: IProps) => {
    console.log("+++ listMoviePopular", movieItems);
    
    return (
        <div className="flex flex-row gap-[0.5rem] overflow-x-auto">
            {movieItems}
        </div>
    )
}

export default MoviePopulars