import React  from 'react';
import { Link } from 'react-router-dom';

const NavBarBrand = (props) => {
  return (
    <Link className="navbar__logo" {...props}/>
  )
};

export default NavBarBrand;