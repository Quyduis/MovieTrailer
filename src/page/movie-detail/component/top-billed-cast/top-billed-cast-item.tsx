import { CreaditPerson } from "model/movie";
import Constant from "util/Constants";
import { Text } from "component";

interface IProps {
  item: CreaditPerson;
}

const TopBilledCastItem = ({ item }: IProps) => {
  return (
    <a href="/#">
      <div className="item">
        <img
          className="cast-image"
          src={`${Constant.IMAGE_PATH_W240_h266_FACE}${item?.profile_path}`}
          alt=""
        />

        <Text className="content-text movie-title" size="medium" weight="bold">
          {item?.original_name}
        </Text>

        <Text className="content-text" size="tiny">
        {item?.character}
        </Text>
      </div>
    </a>
  );
};
export default TopBilledCastItem;
