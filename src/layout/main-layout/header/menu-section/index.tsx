import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { Text } from "component";
import Constant from "util/Constants";
import { MenuContainer } from "./styled";

const MenuSection = () => {
  const handleMenuClick = () => {};

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
        },
        {
          label: "2nd menu item",
          key: "2",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  return (
    <MenuContainer>
      <MenuOutlined className="menu-icon" />
      <img
        className="h-5"
        alt="logo"
        src={`${Constant.PUBLIC_URL}/assets/tmdb_image.svg`}
      />

      <Dropdown overlayClassName="menu-list" overlay={menu}>
        <Text className="menu-item" size="medium" color="white" weight="semi-bold">
          Movies
        </Text>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Text className="menu-item" size="medium" color="white" weight="semi-bold">
          TV Shows
        </Text>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Text className="menu-item" size="medium" color="white" weight="semi-bold">
          Peoples
        </Text>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Text className="menu-item" size="medium" color="white" weight="semi-bold">
          More
        </Text>
      </Dropdown>
    </MenuContainer>
  );
};

export default MenuSection;
