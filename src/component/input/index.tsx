import { UserOutlined } from "@ant-design/icons";
import { InputProps } from "antd";
import Constant from "util/Constants";
import { InputStyled } from "./styled";
// import { BaseInputProps } from "antd";

interface IProps extends InputProps {}

const InputCustom = ({ ...props }: IProps) => {
  return (
    <InputStyled
      {...props}
    />
  );
};

export default InputCustom;
