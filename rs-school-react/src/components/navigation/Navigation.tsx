import React from 'react';
import './Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation__item">Home</div>
        <div className="navigation__delimiter">/</div>
        <div className="navigation__item">About Us</div>
      </div>
    );
  }
}

export default Navigation;
