import React from 'react';
import './Modal.scss';
import { Book } from 'pages/home/Home';

interface ModalProps {
  card: Book | null;
  setIsModalOpen: (value: boolean) => void;
}

export default function Modal({ card, setIsModalOpen }: ModalProps): ReturnType<React.FC> {
  function closeModal(): void {
    setIsModalOpen(false);
  }
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content_close-button">
          <p onClick={closeModal} className="button">
            X
          </p>
        </div>
        <div className="modal-content_card">
          <img className="modal-content_card-image" src={card?.image} />
          <>
            <div className="modal-content_card-title">{card?.name}</div>
            <div className="modal-content_card-gender">Gender: {card?.gender}</div>
            <div className="modal-content_card-gender">Location: {card?.location.name}</div>
          </>
          <div className="modal-content_card-date">Created: {card?.created.slice(0, 10)}</div>
        </div>
      </div>
    </div>
  );
}
