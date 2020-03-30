import React, { useState } from 'react';

export default function About () {
  const [active, setActive] = useState(0);
  const data = [
    {
      date: 'March 1994',
      info: 'was born'
    },
    {
      date: 'Sept 1998',
      info: 'first day of school'
    },
    {
      date: 'June 2015',
      info: 'graduated from uni'
    },
    {
      date: 'Jan 2017',
      info: 'started recruitment'
    },
    {
      date: 'Jan 2018',
      info: 'went travelling'
    },
    {
      date: 'March 2019',
      info: 'Started GA'
    },
    {
      date: 'June 2019',
      info: 'started work at bynd'
    }
  ];

  return (
    <div className="about" id="about">
      <h1 className="about__title">About</h1>
      <div className="about__content">
        { data.map((item, index) => (
          <div className={ `about__content__info${ active === index ? '--active' : '' }` } key={ index.toString() }>
              <p>{ item.info }</p>
          </div>
        ))}
      </div>
      <div className="about__timeline">
        { data.map((item, index) => (
          <div className={ `about__timeline__date${ active === index ? '--active' : '' }` } key={ index.toString() } onClick={ () => { setActive(index)} }>
            <p>{ item.date }</p>
          </div>
        ))}
      </div>
    </div>
  );
}
