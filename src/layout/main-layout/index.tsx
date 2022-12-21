import MovieDetailPage from "page/movie-detail";
import { useEffect } from "react";
import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../page/home";
import LeaderBoardPage from "../../page/leader-board";
import Footer from "./footer";
import Header from "./header";
import __debounce from "lodash/debounce";

const MainLayout = () => {
  const headerRef = useRef<any>();
  const bannerRef = useRef<any>();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
    // console.log("+++ headerRef", headerRef);
    // console.log("+++ bannerRef", bannerRef);
    // console.log("+++ headerRef && bannerRef", headerRef && bannerRef);
    // Show or hide header when window scroll
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      if (headerRef && bannerRef) {
        const currentScrollPos = window.pageYOffset;
        // console.log("+++ prevScrollpos", prevScrollpos);
        // console.log("+++ currentScrollPos", currentScrollPos);

        if (prevScrollpos > currentScrollPos) {
          headerRef.current.style.top = "0";
        } else {
          headerRef.current.style.top = "-100%";
        }

        if (currentScrollPos === 0) {
          headerRef.current.style.top = "0";
          bannerRef.current.style.marginTop = "3.75rem";
        } else {
          bannerRef.current.style.marginTop = "0rem";
        }
        prevScrollpos = currentScrollPos;
      }
    };
    // Handle event window scrolled
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove event window scroll
      window.removeEventListener("scroll", __debounce(handleScroll, 10000));
    };
  }, [location.pathname]);

  return (
    <>
      <Header className="app-header" ref={headerRef} />
      <div className="container" ref={bannerRef}>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="leader-board" element={<LeaderBoardPage />} />
          <Route path="movie-detail" element={<MovieDetailPage />} />
        </Routes>
      </div>
      <Footer className="app-footer" />
    </>
  );
};

export default MainLayout;
