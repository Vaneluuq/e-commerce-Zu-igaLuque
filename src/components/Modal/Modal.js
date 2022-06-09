import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #e3f2fd',
    borderRadius: '2%',
    boxShadow: 24,
    p: 4,
  };

const ModalEcommerce = ({ children, openModal, modalIsOpen, closeModal }) => {
  return (
    <div>
      <button onClick={openModal}>Abrir</button>{" "}
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>{children}</div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalEcommerce;
