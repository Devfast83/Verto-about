import React from 'react';

import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <a className="nav__logo" href="/home">Verto</a>
      <a href="/profile"><i className="fa fa-user"></i></a>
      <a className="nav__sell" href="/upload">Sell +</a>
      <span className="auth-btn">Log In</span>
    </div>
  )
};

export default Navigation;