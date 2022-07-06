import { Dropdown, Menu } from "antd";
import { Text } from "component";
import Constant from "util/Constants";

const MenuSection = () => {

  const handleMenuClick = () => {
    
  }

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
    <div className="flex flex-row gap-x-4 items-center">
      <img
        className="h-5"
        alt="logo"
        src={`${Constant.PUBLIC_URL}/assets/tmdb_image.svg`}
      />
      {/* <MenuStled items={items} mode="horizontal" /> */}

      <Dropdown overlay={menu}>
        <Text size="medium" color="white" weight="semi-bold">
          Movies
        </Text>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Text size="medium" color="white" weight="semi-bold">
          TV Shows
        </Text>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Text size="medium" color="white" weight="semi-bold">
          Peoples
        </Text>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Text size="medium" color="white" weight="semi-bold">
          More
        </Text>
      </Dropdown>
    </div>
  );
};

export default MenuSection;
