import Search from 'components/search/Search';
import React, { useState } from 'react';
import './Home.scss';
import BookCard from 'components/book-card/BookCard';
import Modal from 'components/modal/Modal';

export interface Location {
  name: string;
  url: string;
}

export interface Book {
  id: number;
  name: string;
  image: string;
  gender: string;
  created: string;
  location: Location;
}

export default function Home(): ReturnType<React.FC> {
  const [productCards, setProductCards] = useState<Book[]>([]);
  const [chosenCard, setChosenCard] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal(card: Book): void {
    setChosenCard(card);
    setIsModalOpen(true);
  }

  return (
    <div className="card-list-container">
      <Search updateProductCards={setProductCards} />
      <div className="card-list">
        {productCards.map((card: Book) => (
          <div onClick={() => openModal(card)} key={card.id}>
            <BookCard card={card} />
          </div>
        ))}
      </div>
      {isModalOpen && <Modal card={chosenCard} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
