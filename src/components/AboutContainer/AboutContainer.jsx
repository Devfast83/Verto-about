import React  from 'react';
import AboutContent from './AboutContent';
import AboutService from './AboutService';

import './AboutContainer.css';

const AboutContainer = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutContainer__story">
        <AboutContent title="The Verto Story" content="Listen guys...we know how much buying and selling stuff as a college student on Craigslist sucks. It's cluttered. It's confusing. It's sketchy. How do you know you're actually buying Dave Matthews' tickets or getting totally ripped off? We're just a couple of college students who get the struggle. We want to make it super easy for you to buy and sell stuff without all the hassle and uncertainty." />
        <AboutContent title="Our Promise" content="When we were dreaming up Verto, we thought — why can't selling your stuff online look like your favorite brand? With Verto, we're delivering simplicity and sleekness. Our sellers are verified (all college students!), and you never have to interact with anyone you don't want to. We strive to be the safest, highest-quality platform to exchange goods." />
      </div>
      <div className="aboutContainer__services">
        <AboutService icon="check" title="Verified Sellers" />
        <AboutService icon="map-marker" title="Local Exchanges" />
        <AboutService icon="lock" title="Safety Guaranteed" />
        <AboutService icon="money" title="Best Prices" />
      </div>
    </div>
  )
};

export default AboutContainer;