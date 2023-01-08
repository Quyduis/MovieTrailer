import ContentBackDrop from "./component/content-backdrop";
import UseMovieDetail from "./hook/useMovieDetail";

const MovieDetailPage = () => {
  const {
    movieDetailData,
    renderMovieCategory,
    renderProductionCountry,
    renderRuntime,
  } = UseMovieDetail();
  return (
    <>
      <ContentBackDrop
        movieDetail={movieDetailData}
        renderMovieCategory={renderMovieCategory}
        renderProductionCountry={renderProductionCountry}
        renderRuntime={renderRuntime}
      />
    </>
  );
};
export default MovieDetailPage;
