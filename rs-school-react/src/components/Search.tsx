import React from 'react';

type SearchState = {
  value: string;
};

class Search extends React.Component<Record<string, never>, SearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(): void {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue != null) {
      this.setState({ value: searchValue });
    } else {
      this.setState({ value: '' });
    }
  }

  handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    localStorage.setItem('searchValue', event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Search:
            <input type="text" value={this.state.value} onChange={this.handleSearch} />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
