import React  from 'react';
import FooterColumn from './FooterColumn';
import FooterColumnItem from './FooterColumnItem';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <FooterColumn title="Company">
        <FooterColumnItem to="/about">About</FooterColumnItem>
        <FooterColumnItem to="/about">Team</FooterColumnItem>
      </FooterColumn>
      <FooterColumn title="Help">
        <FooterColumnItem to="/about">About</FooterColumnItem>
        <FooterColumnItem to="/about">Team</FooterColumnItem>
      </FooterColumn>
      <FooterColumn title="Privacy">
        <FooterColumnItem to="/about">About</FooterColumnItem>
        <FooterColumnItem to="/about">Team</FooterColumnItem>
      </FooterColumn>
    </div>
  )
};

export default Footer;