import React from 'react';
import GitHub from '../Svg/github.svg';
import LinkedIn from '../Svg/linkedin.svg';
import HackerRank from '../Svg/hackerrank.svg';

const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
      <p>
        While its still under construction, you can find me at these links.
      </p>
      <p>
        <a href="https://github.com/lucassauro" target="_blank" rel="noreferrer" >
          {<img width="25" src={GitHub} alt="Github icon" className="contact-buttons"/>}
        </a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/lucas-lima-teixeira/" target="_blank" rel="noreferrer">
          {<img width="25" src={LinkedIn} alt="LinkedIn icon" className="contact-buttons"/>}
        </a>
      </p>
      <p>
        <a href="https://www.hackerrank.com/lucassauro" target="_blank" rel="noreferrer">
          {<img width="25" src={HackerRank} alt="LinkedIn icon" className="contact-buttons"/>}
        </a>
      </p>
    </main>
  );
}

export default Contact;