import { Text } from "component";
import TrendingItem from "./trending-item";

const Trendings = () => {
  return (
    <div className="pb-8">
      {/* Trending header */}
      <div className="m-8">
        <Text size="large" weight="bold">
          Trending
        </Text>
      </div>

      {/* Trendinf Item */}
      <TrendingItem />
    </div>
  );
};

export default Trendings;
