import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

interface setActive {
  isActive: boolean;
}

const setActive = ({ isActive }: setActive) =>
  isActive ? 'active navigation__item' : 'navigation__item';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavLink to={''} className={setActive}>
          Home
        </NavLink>
        <div className="navigation__delimiter">/</div>
        <NavLink to={'about'} className={setActive}>
          About Us
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
