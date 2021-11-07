import React from 'react';
import GitHub from '../Images/github.svg';
import LinkedIn from '../Images/linkedin.svg';

const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
      <br />
      While this page is under construction, you can find me at these links.
      <br />
      <br />
      <br />
      <a href="https://github.com/lucassauro" target="_blank" rel="noreferrer" >
        {<img width="25" src={GitHub} alt="Github icon" />}
      </a>
      <br />
      <br />
      <a href="https://www.linkedin.com/in/lucas-lima-teixeira/" target="_blank" rel="noreferrer">
        {<img width="25" src={LinkedIn} alt="LinkedIn icon" />}
      </a>

    </main>
  );
}

export default Contact;