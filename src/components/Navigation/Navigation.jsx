import React from 'react';
import NavBarBrand from './NavBarBrand';
import NavBarItem from './NavBarItem';
import NavBarItemIcon from './NavBarItemIcon';

import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <NavBarBrand to="/home">Verto</NavBarBrand>
      </div>

      <div className="navbar__nav">
        <NavBarItemIcon to="/profile" iconName="user"/>
        <NavBarItem className="navbar__nav__item" bsStyle="" to="/upload" content="Sell +" />
        <NavBarItem className="navbar__nav__item" bsStyle="login" to="/login" content="Log In" />
      </div>
    </div>
  )
};

export default Navigation;