import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('Count', count);
    setCount(1);
  }, [count]);

  return (
    <div className="hero" id="hero">
      <div className="hero__title">
        {count ? (
          <Typist avgTypingDelay={50} cursor={{ blink: true }} onTypingDone={() => setCount(1)}>
            <span className="hero__title__var">const </span> object = {`{`}<br/>
            <span className="hero__title__label">name: </span>
            <h1 className="hero__title__name">'Elle Whaley'</h1>,<br/>
            <span className="hero__title__label">type: </span>
            <span className="hero__title__type">'Developer'</span>,<br/>
            <span className="hero__title__label">location: </span>
            <span className="hero__title__location">'London'</span><br/>{`}`};<br/>
            <AnchorLink href="#about" className="hero__title__about">object.<span className="function">about</span>(<span className="hero__title__about-click">...</span>);</AnchorLink><br/>
            <AnchorLink href="#portfolio" className="hero__title__portfolio">object.<span className="function">portfolio</span>(<span className="hero__title__portfolio-click">...</span>);</AnchorLink><br/>
            <AnchorLink href="#contact" className="hero__title__contact">object.<span className="function">contact</span>(<span className="hero__title__contact-click">...</span>);</AnchorLink><br/>
          </Typist>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Hero;
