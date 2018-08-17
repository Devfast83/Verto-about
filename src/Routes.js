import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import AboutContainer from './components/AboutContainer/AboutContainer';
import OurTeamContainer from './components/OurTeamContainer/OurTeamContainer';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';
import Footer from './components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AboutContainer />
        <OurTeamContainer />
        <SubscribeForm />
        <Footer />
      </div>
    );
  }
}

export default Routes;
