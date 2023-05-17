import Banner from "./banner";
import { ContainerStyled } from "./styled";
import UseInit from "./useInit";

const HomePage = () => {
  const { bannerMovieTrending } = UseInit();
  return (
    <ContainerStyled>
      <Banner bannerMovieTrending={bannerMovieTrending}/>
    </ContainerStyled>
  );
};

export default HomePage;
