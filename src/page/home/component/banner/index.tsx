import { BannerStyled, FormStyled } from "./styled";
// import {Text} from 'src/'
import { Text } from "component";
import Constant from "util/Constants";
import { Form, Input } from "antd";

interface BannerProps {
  bannerMovieTrending?: string;
}

const Banner = ({ bannerMovieTrending }: BannerProps) => {
  return (
    <BannerStyled
      url={`${Constant.IMAGE_PATH_ORIGINAL}${bannerMovieTrending}`}
      className="px-8 py-16"
    >
      <div>
        <Text style={{ fontSize: "3rem" }} color="white" weight="bold">
          Welcome.
        </Text>
        <Text style={{ fontSize: "2rem" }} color="white" weight="semi-bold">
          Millions of movies, TV shows and people to discover. Explore now.
        </Text>
      </div>

      <FormStyled
        name="basic"
        initialValues={{ remember: true }}
        //   onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="username">
          <Input placeholder="Search for a movie, tv show, person......"/>
        </Form.Item>
        <Input className="submit" type="submit" value={'Search'} />
      </FormStyled>
    </BannerStyled>
  );
};

export default Banner;
