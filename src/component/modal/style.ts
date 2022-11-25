import styled from "styled-components";
import { Modal } from "antd";

export const ModalCustomStyle = styled(Modal)`
    width: 70% !important;
    top: 0.5rem;
    .ant-modal-content {
        .ant-modal-body {
            height: 85vh;
            padding: 0;

            .modal-title-content {
                background-color: black;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0.875rem;
            }
        }
    }
`;
