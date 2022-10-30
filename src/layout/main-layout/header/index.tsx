import HelperSection from "./helper-section";
import MenuSection from "./menu-section";
import { HeaderContainer } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <MenuSection />
      <HelperSection />
    </HeaderContainer>
  );
};

export default Header;
