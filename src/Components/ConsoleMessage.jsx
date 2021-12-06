import { useEffect } from 'react';

function getConsoleMessage() {
  const messages = [
    `Whats uuuuuuuuuup?! 👻`,
    `pssssst.... 42 is the answer...`,
    `/watch?v=dQw4w9WgXcQ`,
]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage;
}

function Greeting() {
  useEffect(() => {
    const madeByLucas = `Made by Lucas Lima Teixeira. @lucassauro at Github.`
    console.info(madeByLucas)
    console.info(getConsoleMessage())
  }, [])
  return (
    null
  );
}

export default Greeting;
