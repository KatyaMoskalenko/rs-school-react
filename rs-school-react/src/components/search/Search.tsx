import React, { useState, useEffect } from 'react';
import './Search.scss';

export default function Search(): ReturnType<React.FC> {
  const [value, setValue] = useState<string | null>(localStorage.getItem('searchValue'));

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', value ? value : '');
    };
  }, [value]);

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
