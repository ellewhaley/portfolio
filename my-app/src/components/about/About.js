import React, { useState } from 'react';
import Born from '../../assets/born.jpg';
import School from '../../assets/school.jpg';

export default function About () {
  const [active, setActive] = useState(0);
  const data = [
    {
      date: 'March 1994',
      info: 'I was born on 19th of March 1994 in Herefordshire county hospital, with a whopping great forhead and very little hair.',
      image: {
        src: Born,
        alt: 'Baby photo of Elle'
      }
    },
    {
      date: 'Sept 1998',
      info: 'first day of school',
      image: {
        src: School,
        alt: 'Elle on first day of school'
      }
    },
    {
      date: 'June 2015',
      info: 'graduated from uni',
      image: {
        src: Born,
        alt: 'Baby photo of Elle'
      }
    },
    {
      date: 'Jan 2017',
      info: 'started recruitment',
      image: {
        src: Born,
        alt: 'Baby photo of Elle'
      }
    },
    {
      date: 'Jan 2018',
      info: 'went travelling',
      image: {
        src: Born,
        alt: 'Baby photo of Elle'
      }
    },
    {
      date: 'March 2019',
      info: 'Started GA',
      image: {
        src: Born,
        alt: 'Baby photo of Elle'
      }
    },
    {
      date: 'June 2019',
      info: 'started work at bynd',
      image: {
        src: Born,
        alt: 'Baby photo of Elle'
      }
    }
  ];

  return (
    <div className="about" id="about">
      <h1 className="about__title">About</h1>
      <div className="about__intro">
        <p className="about__intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="about__content">
        { data.map((item, index) => (
          <div className={ `about__content__info${ active === index ? '--active' : '' }` } key={ index.toString() }>
              <img className="about__content__info-img" src={ item.image.src } alt={ item.image.alt } />
              <p className="about__content__info-text">{ item.info }</p>
          </div>
        ))}
      </div>
      <div className="about__timeline">
        { data.map((item, index) => (
          <div className={ `about__timeline__date${ active === index ? '--active' : '' }` } key={ index.toString() } onClick={ () => { setActive(index)} }>
            <p className="about__timeline__date-text">&#183;<br/>{ item.date }</p>
          </div>
        ))}
      </div>
    </div>
  );
}
