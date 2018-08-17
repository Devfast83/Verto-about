import React  from 'react';
import { Link } from 'react-router-dom';

const NavBarItemIcon = (props) => {
  const { iconName, to, } = props;
  const icon = 'fa fa-' + iconName;
  return (
    <Link className="navbar__nav__item-icon" to={to}>
      <i className={icon}></i>
    </Link>
  )
};

export default NavBarItemIcon;