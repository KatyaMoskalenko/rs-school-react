import React, { useState, useEffect, useRef } from 'react';
import './Search.scss';
import { Book } from 'pages/home/Home';

export interface UpdateProductCardsProps {
  updateProductCards: (books: Book[]) => void;
  setIsLoading: (loading: boolean) => void;
}

export default function Search({
  updateProductCards,
  setIsLoading,
}: UpdateProductCardsProps): ReturnType<React.FC> {
  const [value, setValue] = useState<string | null>(null);
  const searchRef = useRef<string | null>();

  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((res) => {
        updateProductCards(res.results);
      });
    setIsLoading(false);

    return () => {
      localStorage.setItem('searchValue', searchRef.current || '');
    };
  }, [updateProductCards, setIsLoading]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleFetch(event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      setIsLoading(true);
      fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
        .then((res) => (res ? res.json() : []))
        .then((res) => {
          updateProductCards(res.length ? res.results : []);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
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
