import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

interface setActive {
  isActive: boolean;
}

const setActive = ({ isActive }: setActive) =>
  isActive ? 'active navigation__item' : 'navigation__item';

export default function Navigation(): ReturnType<React.FC> {
  return (
    <div className="navigation">
      <NavLink to={''} className={setActive}>
        Home
      </NavLink>
      <div className="navigation__delimiter">/</div>
      <NavLink to={'about'} className={setActive}>
        About Us
      </NavLink>
      <div className="navigation__delimiter">/</div>
      <NavLink to={'create'} className={setActive}>
        Create new product
      </NavLink>
    </div>
  );
}
