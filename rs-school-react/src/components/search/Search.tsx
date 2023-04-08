import React, { useState, useEffect, useRef } from 'react';
import './Search.scss';
import { Book } from 'pages/home/Home';

export interface UpdateProductCardsProps {
  updateProductCards: (books: Book[]) => void;
}

export default function Search({
  updateProductCards,
}: UpdateProductCardsProps): ReturnType<React.FC> {
  const [value, setValue] = useState<string | null>(null);
  const searchRef = useRef<string | null>();

  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((res) => {
        updateProductCards(res.results);
      });

    return () => {
      localStorage.setItem('searchValue', searchRef.current || '');
    };
  }, [updateProductCards]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleFetch(event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
        .then((res) => res.json())
        .then((res) => {
          updateProductCards(res.results);
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
