import React  from 'react';

const AboutService = ({ icon, title }) => {
  var iconName = 'fa fa-' + icon;
  return (
    <div className="aboutContainer__service">
      <i className={iconName} ></i>
      <span className="aboutContainer__service__title">
        {title}
      </span>
    </div>
  )
};

export default AboutService;