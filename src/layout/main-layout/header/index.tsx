import HelperSection from "./helper-section";
import MenuSection from "./menu-section";

const Header = () => {
  return (
    <div className="bg-main-color py-5 px-12 flex flex-row justify-between">
      <MenuSection />
      <HelperSection />
    </div>
  );
};

export default Header;
