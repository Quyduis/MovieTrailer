import { ReactNode } from "react";
import { TopBilledCastContainer } from "./style";

interface IProps {
  children: ReactNode;
}

const TopBilledCast = ({ children }: IProps) => {
  return <TopBilledCastContainer>{children}</TopBilledCastContainer>;
};
export default TopBilledCast;
