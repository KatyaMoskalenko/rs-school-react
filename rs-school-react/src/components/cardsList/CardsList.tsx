import React from 'react';
import BookCard from 'components/book-card/BookCard';
import { Book } from 'pages/home/Home';

export interface CardsListProps {
  productCards: Book[];
  openModal: (card: Book) => void;
}

export default function CardsList({
  productCards,
  openModal,
}: CardsListProps): ReturnType<React.FC> {
  return (
    <div className="card-list">
      {productCards.map((card: Book) => (
        <div onClick={() => openModal(card)} key={card.id}>
          <BookCard card={card} />
        </div>
      ))}
    </div>
  );
}
