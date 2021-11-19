import React from 'react';
import Typist from 'react-typist';

const Home = () => {
  return (
    <main>
        <Typist avgTypingDelay={ 30 }>
          <h1>Hello, world!</h1>
          <br />
          <span>My name is Lucas Lima and this is my <s>under construction</s> presentation page. :)</span>
          <br />
          <br />
          <span>You can check the repository <a href="https://github.com/lucassauro/lucassauro.github.io" target="_blank" rel="noreferrer">here</a>.</span>
        </Typist>

    </main>
  );
}

export default Home;