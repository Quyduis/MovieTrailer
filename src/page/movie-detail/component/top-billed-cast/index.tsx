import { ReactNode } from "react";
import { TopBilledCastContainer } from "./style";
import { Text } from "component";
import { ArrowRightOutlined } from "@ant-design/icons";

interface IProps {
  children: ReactNode;
  isShowViewMore?: boolean;
}

const TopBilledCast = ({ children, isShowViewMore }: IProps) => {
  return (
    <TopBilledCastContainer>
      {children}{" "}
      {isShowViewMore && (
        <a href="/#" className="view-more">
          <Text weight="bold" className="content-text" size="medium">
            View more
          </Text>
          <ArrowRightOutlined />
        </a>
      )}
    </TopBilledCastContainer>
  );
};
export default TopBilledCast;
