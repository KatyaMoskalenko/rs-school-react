import React from 'react';
import Header from 'components/header/Header';
import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

const withRouter = <Props extends WithRouterProps>() => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();

    return <Header {...(props as Props)} location={location} />;
  };
};

export default withRouter;
