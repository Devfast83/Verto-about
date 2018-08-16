import React  from 'react';

import './About.css';

const About = () => {
  return (
    <div className="about">
      <AboutText title="Company" content="" />
      <AboutText title="Company" content="" />
      <div className="about__values">
        <AboutValue icon="check" title="" />
        <AboutValue icon="check" title="" />
        <AboutValue icon="check" title="" />
        <AboutValue icon="check" title="" />
      </div>
    </div>
  )
};

export default About;