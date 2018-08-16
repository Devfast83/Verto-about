import React from 'react';

const AboutDivider = ({ iconName }) => {
  var iconClass = 'fa fa-' + iconName;
  return (
    <div className="about__divider">
      <i className={iconClass} ></i>
    </div>
  )
};

export default AboutDivider;