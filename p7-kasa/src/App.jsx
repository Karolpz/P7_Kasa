import React from 'react';
import Router from './Router';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
