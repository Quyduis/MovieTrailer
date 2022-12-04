import ModalCusTom from "component/modal";
import { Movie } from "model/movie";
import Constant from "util/Constants";
import Banner from "./component/banner";
import HorizontalListMovie from "./component/horizontal-list-movie";
import MovieListItemTypeA from "./component/movie-list-item-type-a";
import MovieListItemTypeB from "./component/movie-list-item-type-b";
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

  const {
    listMovieTrending,
    getBannerMovieTrending,
    listMoviePopular,
    listMovieToprated,
    handleHoverMovieTopRated,
    imageHover,
    handleClickSwitchButton,
    handleClickItemTopRated,
  } = UseHome();

  /**
   * Render movie trending Item
   * @returns React Node
   */
  const renderTrendingItem = () => {
    return (
      Array.isArray(listMovieTrending) &&
      listMovieTrending?.map((item: Movie) => {
        return <MovieListItemTypeA key={item.id} movieItem={item} />;
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
      listMoviePopular?.map((item: Movie) => {
        return <MovieListItemTypeA key={item.id} movieItem={item} />;
      })
    );
  };

  /**
   * Render movie top rated item
   * @returns React Node
   */
  const renderTopRatedItem = () => {
    return (
      Array.isArray(listMovieToprated) &&
      listMovieToprated?.map((item: Movie) => {
        return (
          <MovieListItemTypeB
            onHover={handleHoverMovieTopRated}
            key={item.id}
            movieItem={item}
            onClickItem={handleClickItemTopRated}
          />
        );
      })
    );
  };

  return (
    <>
      {/* Banner Image and Search */}
      <Banner bannerMovieTrending={getBannerMovieTrending()} />

      {/* List movie popular */}
      <HorizontalListMovie
        title="What's Popular"
        listItem={renderPopularItem()}
        switchOptionLabel={[
          {
            label: "Movie",
            value: "movie",
          },
          {
            label: "On TV",
            value: "tv",
          },
        ]}
        mediaType={Constant.MEDIA_TYPE.POPULAR}
        onClickSwitchButton={(value) =>
          handleClickSwitchButton(value, Constant.MEDIA_TYPE.POPULAR)
        }
      />

      {/* List movie top rated */}
      <HorizontalListMovie
        title="Top Rated"
        listItem={renderTopRatedItem()}
        backgroundUrl={imageHover}
        initialBackgroundUrl={`${Constant.IMAGE_PATH_W1920_H427}/${
          listMovieToprated[0]?.poster_path || ""
        }`}
        isLightTheme
        switchOptionLabel={[
          {
            label: "Movie",
            value: "movie",
          },
          {
            label: "On TV",
            value: "tv",
          },
        ]}
        mediaType={Constant.MEDIA_TYPE.TOP_RATED}
        onClickSwitchButton={(value) =>
          handleClickSwitchButton(value, Constant.MEDIA_TYPE.TOP_RATED)
        }
      />

      {/* List movie trending */}
      <HorizontalListMovie
        title="Trending"
        listItem={renderTrendingItem()}
        switchOptionLabel={[
          {
            label: "To Day",
            value: "day",
          },
          {
            label: "This Week",
            value: "week",
          },
        ]}
        mediaType={Constant.MEDIA_TYPE.TRENDING}
        onClickSwitchButton={(value) =>
          handleClickSwitchButton(value, Constant.MEDIA_TYPE.TRENDING)
        }
      />

      {/* Modal top rated trailer */}
      <ModalCusTom />
    </>
  );
};

export default HomePage;
