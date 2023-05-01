import ButtonCustom from "component/button";
import InputCustom from "component/input";
import { Link } from "react-router-dom";
import Constant from "util/Constants";

const MainHeader = () => {
  return (
    <div className="block-header">
      {/* Logo */}
      <Link to="/" className="block-header__logo">
        <img
          style={{ maxWidth: "35px", maxHeight: "35px" }}
          alt="logo"
          src={`${Constant.PUBLIC_URL}/assets/logo_movie_review.svg`}
        />
        <p className="block-header__text-green">CINEMAWORLD</p>
      </Link>

      {/* Search */}
      <InputCustom
      className="block-header__search"
        placeholder="Type to Search..."
        prefix={
          <img
            alt="logo"
            src={`${Constant.PUBLIC_URL}/assets/search_image.svg`}
          />
        }
      />

      {/* Scan QR Button */}
      <ButtonCustom
        icon={
          <img
            className="btn-icon"
            alt="logo"
            src={`${Constant.PUBLIC_URL}/assets/qr_image.svg`}
          />
        }
        shape="round"
        label="Easy scan by phone"
      />

      {/* Location Button */}
      <ButtonCustom
        icon={
          <img
            className="btn-icon"
            alt="logo"
            src={`${Constant.PUBLIC_URL}/assets/location_image.svg`}
          />
        }
        shape="circle"
      />

      {/* Notify Button */}
      <ButtonCustom
        icon={
          <img
            className="btn-icon"
            alt="logo"
            src={`${Constant.PUBLIC_URL}/assets/bell_image.svg`}
          />
        }
        shape="circle"
      />
    </div>
  );
};

export default MainHeader;
