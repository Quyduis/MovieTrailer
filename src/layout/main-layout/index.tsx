import { Route, Routes } from "react-router-dom";
import HomePage from "../../page/home";
import LeaderBoardPage from "../../page/leader-board";
import Footer from "./footer";
import Header from "./header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="container px-16">
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="test" element={<LeaderBoardPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
