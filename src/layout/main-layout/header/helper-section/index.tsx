import { BellFilled } from "@ant-design/icons";
import { Badge } from "antd";

const HelperSection = () => {
  return (
    <div className="flex flex-row gap-x-4 items-center">
      <Badge size="small" count={1}>
        <BellFilled style={{ color: "#ffffff", fontSize: '20px' }} />
      </Badge>
    </div>
  );
};

export default HelperSection;
