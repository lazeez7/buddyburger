import React, { useState } from 'react';
import './modal.css';

const Modal = ({ isOpen, onclose, children }) => {
  return (
    <>
      {isOpen == true ? (
        <div className="modal">
          <div className="modal_wrapper">
            <div className="modal_content">
              <button onClick={onclose}>X</button>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
