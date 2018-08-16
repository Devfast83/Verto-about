import React  from 'react';

const AboutValue = ({ icon, title }) => {
  var iconName = 'fa fa-' + icon;
  return (
    <div className="about__value">
      <i className={iconName} ></i>
      <span className="about__value-title">
        {title}
      </span>
    </div>
  )
};

export default AboutValue;