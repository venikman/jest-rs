import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">About</h1>
      <p>This is a demo project showcasing React with:</p>
      <ul className="list-disc list-inside">
        <li>Material UI</li>
        <li>Tailwind CSS</li>
        <li>React Router</li>
        <li>TypeScript</li>
        <li>Testing Library</li>
      </ul>
    </div>
  );
};

export default About; 