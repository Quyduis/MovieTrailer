import { Movie } from "model/movie"

interface IProps {
    listMoviePopular: Movie[]
}
const MoviePopulars = ({listMoviePopular}: IProps) => {
    console.log("+++ listMoviePopular", listMoviePopular);
    
    return (
        <div>
            
        </div>
    )
}

export default MoviePopulars