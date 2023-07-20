
import React from 'react';
import {BrowserRouter, Route, Routes, } from 'react-router-dom'

import Portfolio  from "./components/Portfolio/Portfolio";
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';


const App=()=>{

  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<Portfolio/>}/>
      <Route exact path="/About"  element={<About/>}/>
      <Route exact path="/Skills"  element={<Skills/>}/>
      <Route exact path="/Contact"  element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App;
