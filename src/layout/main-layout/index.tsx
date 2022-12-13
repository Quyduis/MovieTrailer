import { useEffect } from "react";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../page/home";
import LeaderBoardPage from "../../page/leader-board";
import Footer from "./footer";
import Header from "./header";

const MainLayout = () => {
  const headerRef = useRef<any>();
  const bannerRef = useRef<any>();

  useEffect(() => {
    // Show or hide header when window scroll
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      if (headerRef && bannerRef) {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          headerRef.current.style.top = "0";
        } else {
          headerRef.current.style.top = "-100%";
        }

        if (currentScrollPos === 0) {
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header className="app-header" ref={headerRef} />
      <div className="container">
        <Routes>
          <Route path="*" element={<HomePage bannerRef={bannerRef} />} />
          <Route path="test" element={<LeaderBoardPage />} />
        </Routes>
      </div>
      <Footer className="app-footer" />
    </>
  );
};

export default MainLayout;
