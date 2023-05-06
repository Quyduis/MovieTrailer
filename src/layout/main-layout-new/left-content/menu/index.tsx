import clsx from "clsx";
import { Text } from "component";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Constant from "util/Constants";
import { MenuStyled } from "./styled";

const LeftMenu = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("+++ location", location.pathname);
  }, [location.pathname]);
  return (
    <MenuStyled className="mt-[2rem]">
      {/* Home */}
      <Link to="/">
        <li
          className={clsx({
            selected:
              location.pathname === Constant.PATH.HOME ||
              location.pathname === "/home",
          })}
        >
          <img
            className="small-icon"
            alt="menu-icon"
            src={`${Constant.PUBLIC_URL}/assets/home_image.svg`}
          />
          <Text color="var(--txt-main)" size="large">
            Home
          </Text>
        </li>
      </Link>

      {/* Favorite */}
      <Link to="/favorite">
        <li
          className={clsx({
            selected: location.pathname === Constant.PATH.FAVORITE,
          })}
        >
          <img
            className="small-icon"
            alt="menu-icon"
            src={`${Constant.PUBLIC_URL}/assets/favorite_image.svg`}
          />
          <Text color="var(--txt-main)" size="large">
            Favorite
          </Text>
        </li>
      </Link>

      {/* Remind */}
      <Link to="/remind">
        <li
          className={clsx({
            selected: location.pathname === Constant.PATH.REMIND,
          })}
        >
          <img
            className="small-icon"
            alt="menu-icon"
            src={`${Constant.PUBLIC_URL}/assets/reminder_image.svg`}
          />
          <Text color="var(--txt-main)" size="large">
            Reminder
          </Text>
        </li>
      </Link>

      <li className="mt-[auto]">
      <img
            className="small-icon"
            alt="menu-icon"
            src={`${Constant.PUBLIC_URL}/assets/logout_image.svg`}
          />
          <Text color="var(--txt-main)" size="large">
            Logout
          </Text>
      </li>
    </MenuStyled>
  );
};

export default LeftMenu;
