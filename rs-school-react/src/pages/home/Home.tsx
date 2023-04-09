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
  const [productCards, setProductCards] = useState<Book[]>([]);
  const [chosenCard, setChosenCard] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function openModal(card: Book): void {
    setChosenCard(card);
    setIsModalOpen(true);
  }

  return (
    <div className="card-list-container">
      <Search updateProductCards={setProductCards} setIsLoading={setIsLoading} />
      {isLoading ? (
        <h1>Progressing ... </h1>
      ) : productCards ? (
        <CardsList productCards={productCards} openModal={openModal} />
      ) : (
        <h1>Sorry, nothing was find</h1>
      )}

      {isModalOpen && <Modal card={chosenCard} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
