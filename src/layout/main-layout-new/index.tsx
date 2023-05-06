import HomePage from "page/home";
import { Link, Route, Routes } from "react-router-dom";
import Constant from "util/Constants";
import MainHeader from "./header";
import LeftContent from "./left-content";
import LeftMenu from "./left-content/menu";
import UserInfo from "./left-content/user-info";

const MainLayoutNew = () => {
  return (
    <>
      <MainHeader />
      <div className="block-main">
        <LeftContent userInfoElement={<UserInfo />} leftMenuElement={<LeftMenu />}/>
        <div className="block-main__right">
        <Routes>
          <Route path="*" element={<HomePage />} />
          {/* <Route path="leader-board" element={<LeaderBoardPage />} />
          <Route path="movie-detail" element={<MovieDetailPage />} /> */}
        </Routes>
        </div>
      </div>
    </>
  );
};

export default MainLayoutNew;
