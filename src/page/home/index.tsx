import { MovieListItem } from "component";
import { Movie } from "model/movie";
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

  const { listMovieTrending, getBannerMovieTrending, listMoviePopular } =
    UseHome();

  /**
   * Render movie trending Item
   * @returns React Node
   */
  const renderTrendingItem = () => {
    return (
      Array.isArray(listMovieTrending) &&
      listMovieTrending?.map((item: Movie, index: number) => {
        return <MovieListItem key={index} movieItem={item} />;
      })
    );
  };

  /**
   * Render movie popular item
   * @returns React Node
   */
  const renderPopularItem = () => {
    return (
      Array.isArray(listMoviePopular) &&
      listMoviePopular?.map((item: Movie, index: number) => {
        return <MovieListItem key={index} movieItem={item} />;
      })
    );
  };

  return (
    <div>
      {/* Banner Image and Search */}
      <Banner bannerMovieTrending={getBannerMovieTrending()} />

      {/* List movie popular */} 
      <HorizontalListMovie
        title="What's Popular"
        listItem={renderPopularItem()}
        onClickToggle={() => {}}
      />

      {/* List movie trending */}
      <HorizontalListMovie
        title="Trending"
        listItem={renderTrendingItem()}
        onClickToggle={() => {}}
      />
    </div>
  );
};

export default HomePage;
