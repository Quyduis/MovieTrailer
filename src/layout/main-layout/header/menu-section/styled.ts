import { Menu } from "antd";
import styled from "styled-components";
import Constant from "util/Constants";


export const MenuStled = styled(Menu)`
    background-color: ${Constant.MAIN_COLOR};
    border: none;
    padding: 0;
    color: white;
    .ant-menu-horizontal {
        padding: 0;
    }
`