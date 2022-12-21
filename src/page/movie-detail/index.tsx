import ContentBackDrop from "./component/content-backdrop";
import UseMovieDetail from "./hook/useMovieDetail";

const MovieDetailPage = () => {
  const { movieDetaildData } = UseMovieDetail();
  return (
    <>
      <ContentBackDrop movieDetail={movieDetaildData} />
    </>
  );
};

export default MovieDetailPage;
