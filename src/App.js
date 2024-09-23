import React from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
