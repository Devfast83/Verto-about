import React from 'react';

const AboutWrapper = ({ photo, title, position }) => {
  return (
    <div className="about__team__wrapper">
      <div className="about__team-member">
        <img src={photo} alt={title} />
      </div>
      <span className="about__team-title">{title}</span>
      <span className="about__team-position">{position}</span>
    </div>
  )
};

export default AboutWrapper;