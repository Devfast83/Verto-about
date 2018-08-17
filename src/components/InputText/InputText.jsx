import React from 'react';

import './InputText.css';

const InputText = ({ ...props }) => {
  return <input className="input" {...props} />;
};

export default InputText;