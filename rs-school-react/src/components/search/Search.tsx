import React, { useEffect, useRef, useState } from 'react';
import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { saveSearchValue } from 'redux/actions';
import { Store } from 'redux/reducer';

export default function Search(): ReturnType<React.FC> {
  const searchValue = useSelector((state: Store): string => state.searchValue);
  const [value, setValue] = useState<string | null>(searchValue);
  const searchRef = useRef<string | null>();
  const dispatch = useDispatch();

  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      dispatch(saveSearchValue(searchRef.current || ''));
    };
  }, [dispatch]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleFetch(event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(saveSearchValue(value || ''));
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
