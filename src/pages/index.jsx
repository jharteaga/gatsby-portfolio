import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Greetings,
  About,
  CurrentWork,
  TopProjects,
  Education,
} from '../components/home';

import '../sass/style.scss';

const IndexPage = () => {
  return (
    <>
      <Header />
      <Greetings />
      <About />
      <CurrentWork />
      <TopProjects />
      <Education />
      <Footer />
    </>
  );
};

export default IndexPage;
