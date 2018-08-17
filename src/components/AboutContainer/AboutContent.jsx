import React  from 'react';

const AboutContent = ({ title, content }) => {
  return (
    <div className="aboutContainer__text">
      <span className="aboutContainer__text-title">
        {title}
      </span>
      <p>{content}</p>
    </div>
  )
};

export default AboutContent;