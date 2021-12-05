import { useEffect } from 'react';

function getConsoleMessage() {
  const messages = [
    `Whats uuuuuuuuuup?! 👻`,
    `pssssst.... 42 is the answer...`,
    `The truth has been spoken... Check out: /watch?v=dQw4w9WgXcQ`,
]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage;
}

function Greeting() {
  useEffect(() => {
    const madeByLucas = `Made by Lucas Lima Teixeira.`
    console.info(madeByLucas)
    console.info(getConsoleMessage())
  }, [])
  return (
    null
  );
}

export default Greeting;
