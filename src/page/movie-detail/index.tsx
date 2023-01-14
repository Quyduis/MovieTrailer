import ModalPreviewTrailer from "component/modal/modal-preview-trailer";
import ContentBackDrop from "./component/content-backdrop";
import Keywords from "./component/keywords";
import Socials from "./component/socials";
import Status from "./component/status";
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
      {/* Content Backdrop */}
      <ContentBackDrop
        movieDetail={movieDetailData}
        renderMovieCategory={renderMovieCategory}
        renderProductionCountry={renderProductionCountry}
        renderRuntime={renderRuntime}
        renderCoreTeam={renderCoreTeam}
        onClickTrailer={handleClickTrailer}
      />

      {/* Socials */}
      <Socials movieDetail={movieDetailData} />

      {/* Status */}
      <Status movieDetail={movieDetailData} />

      {/* Keywords */}
      <Keywords keyWords={movieDetailData?.keywords?.keywords || []} />

      {/* Modal trailer */}
      <ModalPreviewTrailer
        keyMovie={previewKey}
        visible={isShowModalPreviewTrailer}
        onCloseModal={handleCloseModalPreviewTrailer}
      />
    </>
  );
};
export default MovieDetailPage;
