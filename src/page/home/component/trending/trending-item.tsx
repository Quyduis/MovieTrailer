import { Text } from "component";
import Constant from "util/Constants";
import { CardStyled, ImageMore, ImagePoster, ImageWrapper, Score } from "./styled";

const TrendingItem = () => {
  return (
    <CardStyled>
      <ImageMore src={`${Constant.PUBLIC_URL}/assets/more_image.svg`} />
      <Score type="circle" percent={80}/>
      <div className="flex flex-col">
        <ImageWrapper>
          <ImagePoster />
        </ImageWrapper>
        <div className="px-3">
          <Text size="medium" weight="bold">
            Card content
          </Text>
          <Text style={{ color: Constant.STYLED.COLOR_GRAY }} size="medium">
            May 04, 2022
          </Text>
        </div>
      </div>
    </CardStyled>
  );
};

export default TrendingItem;
