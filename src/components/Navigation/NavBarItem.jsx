import React  from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const NavBarItem = (props) => {
  const { className, bsStyle, to, content } = props;
  const btnCN = cx(className, bsStyle);
  return (
    <Link className={btnCN} to={to}>
      {content}
    </Link>
  )
};

export default NavBarItem;