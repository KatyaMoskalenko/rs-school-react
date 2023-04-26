import React, { useEffect } from 'react';
import BookCard from 'components/book-card/BookCard';
import { Book } from 'pages/home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'redux/reducer';
import { getCharacters } from 'redux/actions';
import { AppDispatch } from 'store';

export interface CardsListProps {
  openModal: (card: Book) => void;
}

export default function CardsList({ openModal }: CardsListProps): ReturnType<React.FC> {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector((state: Store): string => state.searchValue);
  useEffect(() => {
    dispatch(getCharacters(searchValue));
  }, [dispatch, searchValue]);
  const productCards = useSelector((state: Store): Book[] | null => state.characters || null);
  const isLoading = useSelector((state: Store): boolean => state.isLoading);

  return (
    <div className="card-list">
      {isLoading ? (
        <h1>Progressing ... </h1>
      ) : productCards ? (
        productCards?.map((card: Book) => (
          <div onClick={() => openModal(card)} key={card.id}>
            <BookCard card={card} />
          </div>
        ))
      ) : (
        <h1>Sorry, nothing was find</h1>
      )}
    </div>
  );
}
