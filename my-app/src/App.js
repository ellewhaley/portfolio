import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Timeline from './components/timeline/Timeline';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Timeline />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
