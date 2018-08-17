import React from 'react';

const OurTeamDivider = ({ iconName }) => {
  var iconClass = 'fa fa-' + iconName;
  return (
    <div className="ourTeamContainer__divider">
      <i className={iconClass} ></i>
    </div>
  )
};

export default OurTeamDivider;