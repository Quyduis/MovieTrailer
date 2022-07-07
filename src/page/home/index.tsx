import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { bannerTrendingSelector, HomeAction } from "./home-slice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const bannerMovieTrending = useAppSelector(bannerTrendingSelector)

  
  
  useEffect(() => {
    dispatch(HomeAction.fetchData());
  }, [dispatch]);
  
  useEffect(() => {
    console.log('bannerMovieTrending', bannerMovieTrending);
  }, [bannerMovieTrending]);
  return <h1>Home</h1>;
};

export default HomePage;
