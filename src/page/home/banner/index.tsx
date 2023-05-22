import ButtonCustom from "component/button";
import { Movie } from "model/movie";
import { useMemo } from "react";
import Constant from "util/Constants";
import { BannerStyled } from "./styled";
import Text from "component/Text";

interface IProps {
  bannerMovieTrending?: Movie;
}

const Banner = ({ bannerMovieTrending }: IProps) => {
  const bannerUrl = useMemo(() => {
    if (bannerMovieTrending?.backdrop_path) {
      return `${Constant.IMAGE_PATH_ORIGINAL}/${bannerMovieTrending?.backdrop_path}`;
    }
  }, [bannerMovieTrending?.backdrop_path]);

  return (
    // Banner
    <BannerStyled url={bannerUrl}>
      {/* Button play trailer */}
      <ButtonCustom
        id="btnPlayTrailer"
        className="!bg-[color:var(--el-main)]"
        icon={
          <div className="flex flex-row gap-[1rem]">
            <Text size="large">Watch the trailer</Text>
            <img
              className="btn-icon"
              alt="logo"
              src={`${Constant.PUBLIC_URL}/assets/play_trailer_image.svg`}
            />
          </div>
        }
        shape="round"
      />
    </BannerStyled>
  );
};

export default Banner;
