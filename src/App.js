import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
      <link rel="icon" href="https://res.cloudinary.com/dcbgett3c/image/upload/v1684772677/Picsart_23-05-22_20-02-18-395_bfmqsh.jpg" sizes="any" />
  <title>Rakshith Adepu</title>
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
