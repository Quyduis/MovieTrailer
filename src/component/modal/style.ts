import styled from "styled-components";
import { Modal } from "antd";

export const ModalCustomStyle = styled(Modal)`
    width: 80% !important;
    .ant-modal-content {
        background-color: red !important;
        height: 80vh !important;
    }
`;
