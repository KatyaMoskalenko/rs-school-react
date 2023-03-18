import React from 'react';
import './Search.scss';

type SearchState = {
  value: string | null;
};

class Search extends React.Component<Record<string, never>, SearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchValue'),
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.value ? this.state.value : '');
  }

  handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form className="search">
        <label className="search__label">
          <input
            className="search__input"
            type="text"
            placeholder="Search"
            value={this.state.value ? this.state.value : ''}
            onChange={this.handleSearch}
          />
        </label>
      </form>
    );
  }
}

export default Search;
