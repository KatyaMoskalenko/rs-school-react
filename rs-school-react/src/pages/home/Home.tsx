import Search from 'components/search/Search';
import React, { useState, lazy } from 'react';
import './Home.scss';
import Modal from 'components/modal/Modal';
const CardsList = lazy(() => import('components/cardsList/CardsList'));

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
  const [chosenCard, setChosenCard] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal(card: Book): void {
    setChosenCard(card);
    setIsModalOpen(true);
  }

  return (
    <div className="card-list-container">
      <Search />

      <CardsList openModal={openModal} />

      {isModalOpen && <Modal card={chosenCard} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
