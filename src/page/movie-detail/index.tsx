import ContentBackDrop from "./component/content-backdrop";
import UseMovieDetail from "./hook/useMovieDetail";

const MovieDetailPage = () => {
  const {
    movieDetailData,
    renderMovieCategory,
    renderProductionCountry,
    renderRuntime,
    renderCoreTeam,
  } = UseMovieDetail();
  return (
    <>
      <ContentBackDrop
        movieDetail={movieDetailData}
        renderMovieCategory={renderMovieCategory}
        renderProductionCountry={renderProductionCountry}
        renderRuntime={renderRuntime}
        renderCoreTeam={renderCoreTeam}
      />
    </>
  );
};
export default MovieDetailPage;
