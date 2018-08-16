import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Wrapper from './components/Wrapper/Wrapper';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <About />
        <Wrapper />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Routes;
