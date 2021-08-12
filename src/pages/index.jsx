import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Greetings from '../components/home/Greetings';

import '../sass/style.scss';

const IndexPage = () => {
  return (
    <>
      <Header />
      <Greetings />
      <Footer />
    </>
  );
};

export default IndexPage;
