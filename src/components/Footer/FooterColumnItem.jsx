import React  from 'react';
import { Link } from 'react-router-dom';

const FooterColumnItem = (props) => {
  return (
    <Link className="footer__column-item" {...props} />
  );
};

export default FooterColumnItem;