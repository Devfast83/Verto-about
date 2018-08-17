import React from 'react';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';

import './SubscribeForm.css';

const SubscribeForm = () => {
  return (
    <div className="subscribeForm">
      <h1 className="subscribeForm-title">Join Verto's Community</h1>
      <h3 className="subscribeForm-subtitle">Deals, trends, stories, and more!</h3>
      <form>
        <InputText id="email" type="email" placeholder="johnsmith@abc.com" />
        <Button className="submit" type="submit" content="subscribe" />
      </form>
    </div>
  )
};

export default SubscribeForm;