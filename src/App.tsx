import * as React from 'react';
import { Modal } from './modal';
import './style.css';

export default function App() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleModalToggle = React.useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return (
    <div>
      <h1>React Portal</h1>
      <button onClick={handleModalToggle}>
        Toggle Modal {isModalOpen ? 'off' : 'on'}
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
        modal content
      </Modal>
    </div>
  );
}
