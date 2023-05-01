import { Link } from "react-router-dom";
import Constant from "util/Constants";
import MainHeader from "./header";
import LeftContent from "./left-content";
import UserInfo from "./left-content/user-info";

const MainLayoutNew = () => {
  return (
    <>
      <MainHeader />
      <div className="block-main">
        <LeftContent userInfoElement={<UserInfo />} />
        <div className="block-main__right"></div>
      </div>
    </>
  );
};

export default MainLayoutNew;
