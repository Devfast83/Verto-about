import React from 'react';
import AboutDivider from './AboutDivider';
import AboutWrapper from './AboutWrapper';

import './Wrapper.css';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <AboutDivider iconName="shopping-cart" />
      <h1 className="about__ourteam-title">Our Team</h1>
      <div className="about__team">
        <AboutWrapper photo="" title="" position="" />
        <AboutWrapper photo="" title="" position="" />
        <AboutWrapper photo="" title="" position="" />
        <AboutWrapper photo="" title="" position="" />
        <AboutWrapper photo="" title="" position="" />
      </div>
    </div>
  )
};

export default Wrapper;