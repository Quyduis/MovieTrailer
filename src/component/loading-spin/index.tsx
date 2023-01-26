import { SpinProps } from "antd";
import { SpinStyled } from "./styled";

interface IProps extends SpinProps {}

const LoadingSpin = (props: IProps) => {
    return (
        <SpinStyled {...props}>

        </SpinStyled>
    )
};

export default LoadingSpin;
