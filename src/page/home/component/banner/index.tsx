import { BannerStyled } from "./styled";
// import {Text} from 'src/'
import { Text } from "component";
import Constant from "util/Constants";

interface BannerProps {
    bannerMovieTrending?: string
}

const Banner = ({bannerMovieTrending}: BannerProps) => {
  return (
    <BannerStyled
      url={`${Constant.IMAGE_PATH_ORIGINAL}${bannerMovieTrending}`}
      className="px-8 py-16"
    >
      <Text style={{ fontSize: "3rem" }} color="white" weight="bold">
        Welcome.
      </Text>
      <Text style={{ fontSize: "2rem" }} color="white" weight="semi-bold">
        Millions of movies, TV shows and people to discover. Explore now.
      </Text>
    </BannerStyled>
  );
};

export default Banner;
