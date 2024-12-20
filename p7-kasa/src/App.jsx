import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import FicheLogement from './pages/FicheLogement';
import Header from './layouts/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/logements" element={<FicheLogement />} />
            <Route path = "*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App