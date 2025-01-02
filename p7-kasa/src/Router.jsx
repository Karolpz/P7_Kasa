import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import FicheLogement from './pages/FicheLogement';

const Router = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logements" element={<FicheLogement />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>

  );
};

export default Router;
