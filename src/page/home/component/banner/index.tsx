import { Form, Input, Modal } from "antd";
// import {Text} from 'src/'
import { Text } from "component";
import React from "react";
import Constant from "util/Constants";
import { BannerStyled, FormStyled } from "./styled";

interface BannerProps {
  bannerMovieTrending?: string;
}

const Banner = React.forwardRef(({ bannerMovieTrending }: BannerProps, ref: any) => {

  return (
    <BannerStyled
      url={`${Constant.IMAGE_PATH_ORIGINAL}${bannerMovieTrending}`}
      ref={ref}
    >
      <>
        <Text style={{ fontSize: "3rem" }} color="white" weight="bold">
          Welcome.
        </Text>
        <Text style={{ fontSize: "2rem" }} color="white" weight="semi-bold">
          Millions of movies, TV shows and people to discover. Explore now.
        </Text>
      </>
      <FormStyled
        name="basic"
        initialValues={{ remember: true }}
        //   onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="username">
          <Input placeholder="Search..." />
        </Form.Item>
        <Input className="submit" type="submit" value={"Search"} />
      </FormStyled>
    </BannerStyled>
  );
});

export default Banner;
