import Banner from "./banner";
import MoviePopulars from "./popular";
import { ContainerStyled } from "./styled";
import UseInit from "./useInit";
import _isEmpty from "lodash/isEmpty";
import MovieItem from "./popular/movie-item";

const HomePage = () => {
  const { bannerMovieTrending, listMoviePopular } = UseInit();

  const renderMoviePopular = () => {
    if (!_isEmpty(listMoviePopular)) {
      return listMoviePopular.map((item) => (
        <MovieItem key={item.id} movie={item}/>
      ))
    }
  }

  return (
    <ContainerStyled>
      <Banner bannerMovieTrending={bannerMovieTrending} />

      {!_isEmpty(listMoviePopular) && (
        <MoviePopulars movieItems={renderMoviePopular()} />
      )}
    </ContainerStyled>
  );
};

export default HomePage;
