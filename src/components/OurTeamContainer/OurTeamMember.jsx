import React from 'react';

const OurTeamMember = ({ name, position }) => {
  return (
    <div className="ourTeamContainer__members-member">
      <div className="ourTeamContainer__members-member-photo"></div>
      <span className="ourTeamContainer__members-member-name">{name}</span>
      <span className="ourTeamContainer__members-member-position">{position}</span>
    </div>
  )
};

export default OurTeamMember;