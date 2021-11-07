import './modal.scss';
import React, { FC } from 'react';

interface ModalProps {
  visible: boolean;
  onClick: (event: boolean) => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ visible, onClick, children }) => (
  <div className={`modal ${visible ? 'modal_show' : null}`} onClick={() => onClick(false)}>
    <div className="modal__overlay" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
);
export default Modal;
