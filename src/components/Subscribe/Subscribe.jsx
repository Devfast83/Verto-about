import React from 'react';

import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h1 className="subscribe__title">Join Verto's Community</h1>
      <h3 className="subscribe__subtitle">Deals, trends, stories, and more!</h3>
      <form>
        <input className="subscribe__input" id="email" type="email" placeholder="johnsmith@abc.com" />
        <button className="subscribe__submit" type="submit">subscribe</button>
      </form>
    </div>
  )
};

export default Subscribe;