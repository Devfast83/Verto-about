import React from 'react';
import OurTeamDivider from './OurTeamDivider';
import OurTeamMember from './OurTeamMember';

import './OurTeamContainer.css';

const OurTeamContainer = () => {
  return (
    <div className="ourTeamContainer">
      <OurTeamDivider iconName="shopping-cart" />
      <h1 className="ourTeamContainer-title">Our Team</h1>
      <div className="ourTeamContainer__members">
        <OurTeamMember name="Pablo F" position="CEO" />
        <OurTeamMember name="Soon H" position="CTO" />
        <OurTeamMember name="Karthik M" position="Development Lead" />
        <br />
        <OurTeamMember name="Alana M" position="UX Designer" />
        <OurTeamMember name="Guido D" position="Developer" />
      </div>
    </div>
  )
};

export default OurTeamContainer;