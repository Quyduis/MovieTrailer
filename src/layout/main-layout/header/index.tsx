import { forwardRef } from "react";
import Constant from "util/Constants";
import HelperSection from "./helper-section";
import MenuSection from "./menu-section";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

interface IProps {
  className?: string;
}

const Header = forwardRef((props: IProps, ref: any) => {
  return (
    <HeaderContainer ref={ref} {...props}>
      <MenuSection />
      <Link to="/">
        <img
          className="img-tmdb-moblie"
          alt="logo"
          src={`${Constant.PUBLIC_URL}/assets/tmdb_mobile_image.svg`}
        />
      </Link>
      <HelperSection />
    </HeaderContainer>
  );
});

export default Header;
