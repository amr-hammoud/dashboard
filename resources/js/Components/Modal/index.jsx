import React from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        height: "fit-content",
        width: "fit-content",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.7)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
    },
};

const ModalComponent = ({
    showModal,
    onRequestClose,
    children,
}) => {
    return (
        <Modal
            isOpen={showModal}
            shouldCloseOnOverlayClick={true}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Modal"
            appElement={document.getElementById("app") || undefined}
        >
            {children}
        </Modal>
    );
};

export default ModalComponent;
