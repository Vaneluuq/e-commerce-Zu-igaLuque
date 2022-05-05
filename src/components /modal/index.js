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

const MainModal = ({openModal, modalIsOpen, closeModal, children, classButton, labelButton}) => {
    return (
        <div>
            <button onClick={openModal} className={classButton} >{labelButton}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {children}
            </Modal>
        </div>

    );
}

export default MainModal;