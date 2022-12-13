import React from "react";
import Text from "../../Text";
import { ModalCustomStyle } from "./style";

interface IProps {
  keyMovie: string;
  visible: boolean;
  onCloseModal: () => void;
}

const ModalPreviewTrailer = ({ keyMovie, onCloseModal, ...props }: IProps) => {

  return (
    <>
      <ModalCustomStyle
        {...props}
        className="modal-custom"
        footer={null}
        onCancel={onCloseModal}
        destroyOnClose={true}
      >
        <>
          <div className="modal-title-content">
            <Text color="white" size="large">
              Title
            </Text>
          </div>
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            src={`//www.youtube.com/embed/${keyMovie}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            style={{ backgroundColor: "#000" }}
          />
        </>
      </ModalCustomStyle>
    </>
  );
};

export default ModalPreviewTrailer;
