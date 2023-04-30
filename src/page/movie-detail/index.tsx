import LoadingSpin from "component/loading-spin";
import ModalPreviewTrailer from "component/modal/modal-preview-trailer";
import _isEmpty from "lodash/isEmpty";
import ContentBackDrop from "./component/content-backdrop";
import Keywords from "./component/keywords";
import MobileActions from "./component/mobile-actions";
import Socials from "./component/socials";
import Status from "./component/status";
import TopBilledCast from "./component/top-billed-cast";
import TopBilledCastItem from "./component/top-billed-cast/top-billed-cast-item";
import UseMovieDetail from "./hook/useMovieDetail";

const MovieDetailPage = () => {
  const {
    movieDetailData,
    getMovieCategory,
    getProductionCountry,
    getRuntime,
    getCoreTeam,
    isShowModalPreviewTrailer,
    handleCloseModalPreviewTrailer,
    previewKey,
    handleClickTrailer,
    isShowViewMoreCast,
    isLoadingMovieDetailData,
  } = UseMovieDetail();
  /**
   * Render item top billed cast
   * @returns item top billed cast
   */
  const renderTopBilledCast = () => {
    const listCast = movieDetailData?.credits?.cast;
    if (listCast && !_isEmpty(listCast)) {
      if (listCast?.length >= 10) {
        return listCast
          ?.slice(0, 9)
          ?.map((item) => <TopBilledCastItem key={item.id} item={item} />);
      }
      return listCast?.map((item) => (
        <TopBilledCastItem key={item.id} item={item} />
      ));
    }
    return <></>;
  };

  return (
    <>
      <LoadingSpin spinning={isLoadingMovieDetailData}>
        {/* Content Backdrop */}
        <ContentBackDrop
          movieDetail={movieDetailData}
          getMovieCategory={getMovieCategory}
          getProductionCountry={getProductionCountry}
          getRuntime={getRuntime}
          getCoreTeam={getCoreTeam}
          onClickTrailer={handleClickTrailer}
        />

        {/* Top Billed Cast */}
        <TopBilledCast isShowViewMore={isShowViewMoreCast}>
          {renderTopBilledCast()}
        </TopBilledCast>

        {/* Socials */}
        <Socials movieDetail={movieDetailData} />

        {/* Status */}
        <Status movieDetail={movieDetailData} />

        {/* Keywords */}
        <Keywords keyWords={movieDetailData?.keywords?.keywords || []} />
      </LoadingSpin>

      {/* Modal trailer */}
      <ModalPreviewTrailer
        keyMovie={previewKey}
        visible={isShowModalPreviewTrailer}
        onCloseModal={handleCloseModalPreviewTrailer}
      />
      {/* Mobile Actions */}
      <MobileActions />
    </>
  );
};
export default MovieDetailPage;
