import React from 'react';
import Typist from 'react-typist';
import Message from './ConsoleMessage';

const Home = () => {
  return (
    <main>
        {/* Using br and span tags due to issue #110 on React-typist library.
        https://github.com/jstejada/react-typist/issues/110; */}
        <Typist avgTypingDelay={ 30 }>
          <h1>Hello, world!</h1>
          <br />
          <span>My name is Lucas Lima and this is my <s>under construction</s> presentation page. :)</span>
          <br />
          <br />
          <span>Feel free to navigate through it.</span>
          <br />
          <br />
          <span>You can check its repository <a href="https://github.com/lucassauro/lucassauro.github.io" target="_blank" rel="noreferrer">here</a>.</span>
          <br />
        </Typist>
        <Message />
    </main>
  );
}

export default Home;