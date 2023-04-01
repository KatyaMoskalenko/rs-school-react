import React, { useState, useEffect, useRef } from 'react';
import './Search.scss';

export default function Search(): ReturnType<React.FC> {
  const [value, setValue] = useState<string | null>(localStorage.getItem('searchValue'));
  const searchRef = useRef<string | null>();

  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchRef.current || '');
    };
  }, []);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  return (
    <form className="search">
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
