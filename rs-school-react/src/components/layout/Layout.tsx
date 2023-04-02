import Navigation from 'components/navigation/Navigation';
import withRouter from 'components/withRouterHOC/withRouter';
import React from 'react';
import { Outlet } from 'react-router';

const WithRouterHeader = withRouter();

class Layout extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <WithRouterHeader />
        <Outlet />
      </>
    );
  }
}

export default Layout;
