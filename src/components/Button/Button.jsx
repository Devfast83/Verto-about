import React  from 'react';
import cx from 'classnames';
import './Button.css';

const Button = ({ bsStyle, className, ...props }) => {
  const btnCN = cx(className, `button--${bsStyle}`);
  return <button className={className} {...props} />;
};