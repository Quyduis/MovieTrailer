import { MovieDetail } from "model/movie";
import Constant from "util/Constants";
import { SocialContainer } from "./styled";

interface IProps {
  movieDetail?: MovieDetail;
}

const Socials = ({ movieDetail }: IProps) => {
  return (
    <SocialContainer>
      {movieDetail?.external_ids?.facebook_id && (
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href={`https://facebook.com/${movieDetail?.external_ids?.facebook_id}`}
        >
          <img
            src={`${Constant.PUBLIC_URL}/assets/facebook_image.svg`}
            alt="facebook"
          />
        </a>
      )}
      {movieDetail?.external_ids?.twitter_id && (
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href={`https://twitter.com/${movieDetail?.external_ids?.twitter_id}`}
        >
          <img
            src={`${Constant.PUBLIC_URL}/assets/twitter_image.svg`}
            alt="twitter"
          />
        </a>
      )}
      {movieDetail?.external_ids?.instagram_id && (
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href={`https://instagram.com/${movieDetail?.external_ids?.instagram_id}`}
        >
          <img
            src={`${Constant.PUBLIC_URL}/assets/instagram_image.svg`}
            alt="instagram"
          />
        </a>
      )}
      {movieDetail?.homepage && (
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href={movieDetail?.homepage}
        >
          <img
            src={`${Constant.PUBLIC_URL}/assets/home_page_image.svg`}
            alt="homepage"
          />
        </a>
      )}
    </SocialContainer>
  );
};

export default Socials;
