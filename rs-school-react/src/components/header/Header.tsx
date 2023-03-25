import { WithRouterProps } from 'components/withRouterHOC/withRouter';
import React from 'react';
import './Header.scss';

export const generateHeaderName = (header: string): string => {
  switch (header) {
    case '/create':
      return 'Create New Product';
    case '/about':
      return 'About Us';
    case '/':
      return 'Home';
    default:
      return 'Error';
  }
};

class Header extends React.Component<WithRouterProps> {
  constructor(props: WithRouterProps) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <header>{generateHeaderName(this.props.location.pathname)}</header>
      </div>
    );
  }
}

export default Header;
