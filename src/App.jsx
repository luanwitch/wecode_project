import React from 'react';
import './App.scss';
import logo from './logo.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Header from './components/Header/index.tsx'
import Carousel from './components/Carousel/carousel.tsx';
import BebeceInfoSection from './components/Header/BebeceInfoSection.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BebeceInfoSection />
    </div>
  );
}

export default App;
