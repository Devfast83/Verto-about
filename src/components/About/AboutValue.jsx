import React  from 'react';

const AboutValue = ({ icon, title }) => {
  return (
    <div className="about__value">
      <i className="fa fa-`{icon}`" ></i>
      <span className="about__text-title">
        {title}
      </span>
    </div>
  )
};

export default AboutValue;