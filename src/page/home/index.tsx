import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import Banner from "./component/banner";
import Trendings from "./component/trending";
import {
  bannerTrendingSelector,
  HomeAction,
  listMovieTrendingSelector,
} from "./home-slice";
import { useHome } from "./hook/useHome";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const bannerMovieTrending = useAppSelector(bannerTrendingSelector);
  // const listMovieTrending = useAppSelector(listMovieTrendingSelector);

  const {listMovieTrending, test} = useHome()

  console.log('dataa', listMovieTrending);
  

  // useEffect(() => {
  //   dispatch(HomeAction.fetchData());
  // }, [dispatch]);

  useEffect(() => {
    console.log("listMovieTrending", listMovieTrending);
  }, [listMovieTrending]);
  return (
    <div>
      <Banner bannerMovieTrending={bannerMovieTrending} />
      <Trendings listMovieTrending={listMovieTrending} onClickToggle={test}/>
    </div>
  );
};

export default HomePage;
