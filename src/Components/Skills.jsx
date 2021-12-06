import React from 'react';

const Skills = () => {
  return (
    <main>
      {/* <pre>
      <h1>const skills = &#123;</h1>
      <br />
        Indentation inside pre tag matters to what is exhibited
        {`  "Languages": [
    "JavaScript(ES6)",
    "HTML",
    "CSS"
  ],
  "Libraries and Frameworks: [
    "React.js",
    "JEST",
    "React Testing Library",
    "Redux"
  ],
  "Tools": [
    "Linux",
    "Git and Github",
    "Docker"
  ],
  "Currently Learning": [
    "SQL",
    "Node.js"
  ],
  "Learning Soon": [
    "TypeScript",
    "Object Oriented Programming",
    "S.O.L.I.D",
    "MongoDB"
  ]`}
      </pre> */}
            <h1>Skills</h1>
      <p>
        <strong>Languages</strong>: JavaScript(ES6), HTML, CSS.
      </p>
      <p>
        <strong>Libraries &amp; Frameworks</strong>: React.js, JEST, React Testing Library and Redux.
      </p>
      <p>
        <strong>Tools</strong>: Linux, Git &amp; github and Docker.
      </p>
      <p>
        <strong>Currently learning</strong>: SQL, Node.js.
      </p>
      <p>
        <strong>Learning soon</strong>: TypeScript, Object oriented programming, SOLID and MongoDB.
      </p>
    </main>
  );
}

export default Skills;