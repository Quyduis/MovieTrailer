import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ModalCustomStyle } from "./style";

const ModalCusTom = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Open Modal of 1000px width
            </Button>
            <ModalCustomStyle
                className="modal-custom"
                title="Modal 1000px width"
                centered
                visible={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </ModalCustomStyle>
        </>
    );
};

export default ModalCusTom;
