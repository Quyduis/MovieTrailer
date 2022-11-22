import Constant from "util/Constants";
import { Text } from "component";
import { FooterWrapper } from "./sytled";

interface IProps {
  className?: string
}

const Footer = (props: IProps) => {
  return (
    <FooterWrapper {...props}>
      {/* Footer Icon */}
      <img
        className="footer-icon w-32.5 h-23.5"
        src={`${Constant.PUBLIC_URL}/assets/footer_image.svg`}
        alt="footer"
      />

      {/* The Basic */}
      <div className="footer-content">
        <Text color="white" className="text-2xl">
          The Basics
        </Text>
        <Text color="white" className="text-base">
          About TMDB
        </Text>
        <Text color="white" className="text-base">
          Contact Us
        </Text>
        <Text color="white" className="text-base">
          Support Forums API
        </Text>
        <Text color="white" className="text-base">
          System Status
        </Text>
      </div>

      {/* Get Involved */}
      <div className="footer-content">
        <Text color="white" className="text-2xl">
          Get Involved
        </Text>
        <Text color="white" className="text-base">
          Contribution Bible
        </Text>
        <Text color="white" className="text-base">
          Add New Movie
        </Text>
        <Text color="white" className="text-base">
          Add New TV Show
        </Text>
      </div>

      {/* Community */}
      <div className="footer-content">
        <Text color="white" className="text-2xl">
          Community
        </Text>
        <Text color="white" className="text-base">
          Guidelines
        </Text>
        <Text color="white" className="text-base">
          Discustions
        </Text>
        <Text color="white" className="text-base">
          LeaderBoadr
        </Text>
        <Text color="white" className="text-base">
          Twiter
        </Text>
      </div>
      {/* Legal */}
      <div className="footer-content">
        <Text color="white" className="text-2xl">
        Legal
        </Text>
        <Text color="white" className="text-base">
          Tearm of Use
        </Text>
        <Text color="white" className="text-base">
          API Tearm of Use
        </Text>
        <Text color="white" className="text-base">
          Privacy Policy
        </Text>
      </div>

      <div></div>
    </FooterWrapper>
  );
};

export default Footer;
