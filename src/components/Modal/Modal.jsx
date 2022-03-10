import React from 'react';
import ReactDOM from 'react-dom';

import classes from './style.module.css';

function Backdrop() {
  return (
    <div className={classes.backdrop} />
  );
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal({ children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>
          {children}
        </ModalOverlay>,
        portalElement,
      )}
    </>
  );
}

export default Modal;
