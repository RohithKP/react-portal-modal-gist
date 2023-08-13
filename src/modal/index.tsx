import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './modal.module';

export const Modal = ({
  isOpen,
  children,
  onClose = () => null,
  container = 'main',
}) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className={`${styles.modal} ${isOpen && styles.open}`}>
          <div className={styles.modalContent}>
            {children}
            <button onClick={onClose}>close</button>
          </div>
        </div>,
        document.getElementById(container)
      )
    : null;
};
