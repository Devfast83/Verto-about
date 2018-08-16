import React  from 'react';

const AboutText = ({ title, content }) => {
  return (
    <div className="about__text">
      <span className="about__text-title">
        {title}
      </span>
      <p>{content}</p>
    </div>
  )
};

export default AboutText;