import React, { useLayoutEffect, useState } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

const [invert, setInvert] = useState(false);

useLayoutEffect(() => {
  const onScroll = () => {
    const scrollPosition = window.scrollY;
    if(500 <= scrollPosition) {
      console.log(scrollPosition);
      setInvert(true);
    } else if (500 >= scrollPosition) {
      setInvert(false);
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <div className={ `app app${ invert ? '--active' : '' }` }>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
