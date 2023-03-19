import { WithRouterProps } from 'components/withRouterHOC/withRouter';
import React from 'react';
import './Header.scss';

class Header extends React.Component<WithRouterProps> {
  constructor(props: WithRouterProps) {
    super(props);
    this.generateHeaderName = this.generateHeaderName.bind(this);
  }

  generateHeaderName(header: string): string {
    switch (header) {
      case '/about':
        return 'About Us';
        break;
      case '/':
        return 'Home';
        break;
      default:
        return 'Error';
    }
  }

  render() {
    return (
      <div className="header">
        <header>{this.generateHeaderName(this.props.location.pathname)}</header>
      </div>
    );
  }
}

export default Header;
