import React from 'react';
import Typist from 'react-typist';

const About = () => {
  return (
    <main>
      <h1>About_me</h1>
      <Typist avgTypingDelay={ 50 }>
        <span>My name is Lucas, I'm brazilian.</span>
        <br />
        <span>I have completed a Bachelor of Laws degree, BB.L;</span>
        <br />
        <span>At the end of that I decided to study programming.</span>
        <br />
        <span>I'm currently studying Business Management, BBA; and Programming.</span>


      </Typist>
    </main>
  );
}

export default About;