import Banner from "./banner";
import MoviePopulars from "./popular";
import { ContainerStyled } from "./styled";
import UseInit from "./useInit";

const HomePage = () => {
  const { bannerMovieTrending, listMoviePopular } = UseInit();
  return (
    <ContainerStyled>
      <Banner bannerMovieTrending={bannerMovieTrending}/>

      <MoviePopulars listMoviePopular={listMoviePopular}/>
    </ContainerStyled>
  );
};

export default HomePage;
