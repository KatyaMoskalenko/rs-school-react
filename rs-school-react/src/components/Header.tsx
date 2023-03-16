import React from 'react';

class Header extends React.Component<
  { [key: string]: string },
  { header: string; headerName: string }
> {
  constructor(props: { [key: string]: string } | Readonly<{ string: string }>) {
    super(props);
    this.state = { header: window.location.pathname, headerName: '' };

    this.generateHeaderName = this.generateHeaderName.bind(this);
  }

  componentDidMount() {
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
