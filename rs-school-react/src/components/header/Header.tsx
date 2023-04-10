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

export default function Header(props: WithRouterProps): ReturnType<React.FC> {
  return (
    <div className="header">
      <header>{generateHeaderName(props.location.pathname)}</header>
    </div>
  );
}
