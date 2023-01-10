import ModalPreviewTrailer from "component/modal/modal-preview-trailer";
import ContentBackDrop from "./component/content-backdrop";
import Keywords from "./component/keywords";
import UseMovieDetail from "./hook/useMovieDetail";

const MovieDetailPage = () => {
  const {
    movieDetailData,
    renderMovieCategory,
    renderProductionCountry,
    renderRuntime,
    renderCoreTeam,
    isShowModalPreviewTrailer,
    handleCloseModalPreviewTrailer,
    previewKey,
    handleClickTrailer,
  } = UseMovieDetail();
  return (
    <>
      <ContentBackDrop
        movieDetail={movieDetailData}
        renderMovieCategory={renderMovieCategory}
        renderProductionCountry={renderProductionCountry}
        renderRuntime={renderRuntime}
        renderCoreTeam={renderCoreTeam}
        onClickTrailer={handleClickTrailer}
      />

      <Keywords keyWords={movieDetailData?.keywords?.keywords || []} />

      {/* Modal top rated trailer */}
      <ModalPreviewTrailer
        keyMovie={previewKey}
        visible={isShowModalPreviewTrailer}
        onCloseModal={handleCloseModalPreviewTrailer}
      />
    </>
  );
};
export default MovieDetailPage;
