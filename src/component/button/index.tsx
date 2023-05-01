import { Button, ButtonProps } from "antd";
import Constant from "util/Constants";
import { ButtonStyled } from "./styled";

interface IProps extends ButtonProps{
    label?: string;
}

const ButtonCustom = ({label = "", ...props}: IProps) => {
  return (
    <ButtonStyled
    {...props}>
      {label}
    </ButtonStyled>
  );
};

export default ButtonCustom;
