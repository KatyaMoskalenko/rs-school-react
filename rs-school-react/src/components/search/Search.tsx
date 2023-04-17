import React, { useEffect, useRef, useState } from 'react';
import './Search.scss';
import { Book } from 'pages/home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { saveSearchValue } from 'redux/actions';
import { Store } from 'redux/reducer';

export interface UpdateProductCardsProps {
  updateProductCards: (books: Book[] | null) => void;
  setIsLoading: (loading: boolean) => void;
}

export default function Search({
  updateProductCards,
  setIsLoading,
}: UpdateProductCardsProps): ReturnType<React.FC> {
  const [value, setValue] = useState<string | null>(
    useSelector((state: Store): string => state.searchValue || '')
  );
  const searchRef = useRef<string | null>();
  const dispatch = useDispatch();

  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
      .then((res) => (res ? res.json() : null))
      .then((res) => {
        updateProductCards(res ? res.results : null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        updateProductCards(null);
        setIsLoading(false);
      });
    setIsLoading(false);

    return () => {
      dispatch(saveSearchValue(searchRef.current || ''));
    };
  }, [updateProductCards, setIsLoading, dispatch]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleFetch(event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      setIsLoading(true);
      fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
        .then((res) => (res ? res.json() : null))
        .then((res) => {
          updateProductCards(res ? res.results : null);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          updateProductCards(null);
          setIsLoading(false);
        });
    }
  }

  return (
    <form className="search" onKeyDown={handleFetch}>
      <label className="search__label">
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={value ? value : ''}
          onChange={handleSearch}
        />
      </label>
    </form>
  );
}
