import Constant from "util/Constants";
import HelperSection from "./helper-section";
import MenuSection from "./menu-section";
import { HeaderContainer } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <MenuSection />
      <img
        className="img-tmdb-moblie"
        alt="logo"
        src={`${Constant.PUBLIC_URL}/assets/tmdb_mobile_image.svg`}
      />
      <HelperSection />
    </HeaderContainer>
  );
};

export default Header;
