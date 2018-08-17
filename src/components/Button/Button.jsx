import React  from 'react';

import './Button.css';

const Button = ({ className, ...props }) => {
  return <button className={className} {...props}>{props.content}</button>;
};

export default Button;