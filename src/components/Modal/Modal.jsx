import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { OverLay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, url }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <OverLay onClick={handleBackdropClick}>
      <ModalContainer>
        <img src={url} alt="" />
      </ModalContainer>
    </OverLay>,
    modalRoot
  );
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
