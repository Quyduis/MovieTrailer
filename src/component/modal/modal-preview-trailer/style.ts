import styled from "styled-components";
import { Modal } from "antd";
import Constant from "util/Constants";

export const ModalCustomStyle = styled(Modal)`
  width: 95% !important;
  top: 20vh;
  .ant-modal-content {
    .ant-modal-body {
      height: 30vh;
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

  @media ${Constant.SCREEN.LARGE} {
    width: 70% !important;
    top: 0.5rem;
    .ant-modal-content {
      .ant-modal-body {
        height: 85vh;
      }
    }
  }
`;
