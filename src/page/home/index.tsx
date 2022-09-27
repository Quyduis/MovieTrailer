import { MovieListItem } from "component";
import { MovieTrending } from "model/movie-trending";
import { runMain } from "module";
import Banner from "./component/banner";
import HorizontalListMovie from "./component/horizontal-list-movie";
import UseHome from "./hook/useHome";

const HomePage = () => {
  /**
   * *******************REDUX-TOOlKIT*******************
   */
  // const dispatch = useAppDispatch();
  // const bannerMovieTrending = useAppSelector(bannerTrendingSelector);
  // const listMovieTrending = useAppSelector(listMovieTrendingSelector);

  // useEffect(() => {
  //   dispatch(HomeAction.fetchData());
  // }, [dispatch]);
  /**
   * *******************REDUX-TOOlKIT*******************
   */

  const { listMovieTrending, getBannerMovieTrending } = UseHome();

  /**
   * Render list movie trending
   * @returns React Node
   */
  const renderTrendingitem = () => {
    return (
      Array.isArray(listMovieTrending) &&
      listMovieTrending?.map((item: MovieTrending, index: number) => {
        return <MovieListItem key={index} movieItem={item} />;
      })
    );
  };

  return (
    <div>
      {/* Banner Image and Search */}
      <Banner bannerMovieTrending={getBannerMovieTrending()} />
      {/* List movie trending */}
      <HorizontalListMovie
        listItem={renderTrendingitem()}
        listMovieTrending={listMovieTrending}
        onClickToggle={() => {}}
      />
    </div>
  );
};

export default HomePage;
