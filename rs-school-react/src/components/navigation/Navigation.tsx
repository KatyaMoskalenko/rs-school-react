import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'active navigation__item' : 'navigation__item')}
        >
          Home
        </NavLink>
        <div className="navigation__delimiter">/</div>
        <NavLink
          to={'/about'}
          className={({ isActive }) => (isActive ? 'active navigation__item' : 'navigation__item')}
        >
          About Us
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
