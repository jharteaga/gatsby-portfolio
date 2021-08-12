import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Greetings from '../components/home/Greetings';
import About from '../components/home/About';
import CurrentWork from '../components/home/CurrentWork';

import '../sass/style.scss';

const IndexPage = () => {
  return (
    <>
      <Header />
      <Greetings />
      <About />
      <CurrentWork />
      <Footer />
    </>
  );
};

export default IndexPage;
