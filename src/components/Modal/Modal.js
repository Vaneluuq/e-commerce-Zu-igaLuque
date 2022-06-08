import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalEcommerce = ({ children, openModal, modalIsOpen, closeModal }) => {
    return (
        <div>
            <button onClick={openModal}>Abrir</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div>
                    {children}
                </div>
            </Modal>
        </div>
    );
}

export default ModalEcommerce;