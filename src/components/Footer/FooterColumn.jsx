import React  from 'react';

const FooterColumn = ({ title, children }) => {
  return (
    <div className="footer__column">
      <div className="footer__column-heading">
        {title}
      </div>
      {children}
    </div>
  )
};

export default FooterColumn;