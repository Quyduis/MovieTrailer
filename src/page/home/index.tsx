import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import Banner from "./component/banner";
import Trendings from "./component/trending";
import { bannerTrendingSelector, HomeAction } from "./home-slice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const bannerMovieTrending = useAppSelector(bannerTrendingSelector);

  useEffect(() => {
    dispatch(HomeAction.fetchData());
  }, [dispatch]);

  useEffect(() => {
    console.log("bannerMovieTrending", bannerMovieTrending);
  }, [bannerMovieTrending]);
  return (
    <div>
      <Banner bannerMovieTrending={bannerMovieTrending} />
      <Trendings />
    </div>
  );
};

export default HomePage;
