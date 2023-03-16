import React from 'react';

type HeaderState = {
  header: string;
  headerName: string;
};

class Header extends React.Component<Record<string, never>, HeaderState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { header: window.location.pathname, headerName: '' };

    this.generateHeaderName = this.generateHeaderName.bind(this);
  }

  componentDidMount(): void {
    this.generateHeaderName(this.state.header);
  }

  generateHeaderName(header: string): void {
    switch (header) {
      case '/about':
        this.setState({ headerName: 'About Us' });
        break;
      case '/':
        this.setState({ headerName: 'Home' });
        break;
      default:
        this.setState({ headerName: 'Error' });
    }
  }

  render() {
    return (
      <>
        <header>{this.state.headerName}</header>
      </>
    );
  }
}

export default Header;
