import React, { useState, useEffect, useContext } from 'react';
import GitHub from '../Svg/github.svg';
import LinkedIn from '../Svg/linkedin.svg';
import HackerRank from '../Svg/hackerrank.svg';
import { Context } from '../Context/Context';

const Contact = () => {
  const { dM } = useContext(Context);
  const [blackOrWhite, setBlackOrWhite] = useState();
  
  useEffect(() => {
    console.log(dM)
    dM ? setBlackOrWhite('white') : setBlackOrWhite('black');
  }, [dM])
  return (
    <main>
      <h1>Contact</h1>
      <p>
        While its still under construction, you can find me at these links.
      </p>
      <p>
        <a 
          href="https://github.com/lucassauro"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          {<img width="30" src={GitHub} alt="Github icon" className={ `${blackOrWhite} contact-buttons` }/>}
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/lucas-lima-teixeira/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          {<img width="30" src={LinkedIn} alt="LinkedIn icon" className={ `${blackOrWhite} contact-buttons` }/>}
        </a>
      </p>
      <p>
        <a
          href="https://www.hackerrank.com/lucassauro"
          target="_blank"
          rel="noreferrer"
          title="HackerRank"
        >
          {<img width="30" src={HackerRank} alt="LinkedIn icon" className={ `${blackOrWhite} contact-buttons` }/>}
        </a>
      </p>
    </main>
  );
}

export default Contact;