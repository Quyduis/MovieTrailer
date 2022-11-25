import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ModalCustomStyle } from "./style";
import Text from "../Text";

const ModalCusTom = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Open Modal of 1000px width
            </Button>
            <ModalCustomStyle
                className="modal-custom"
                visible={open}
                footer={null}
                onCancel={() => {
                    setOpen(false);
                }}
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
                        src={`//www.youtube.com/embed/pJOdT0Odxak?autoplay=1`}
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

export default ModalCusTom;
