import React from 'react';
import { Link } from 'react-router';

const Home: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome to React with Rsbuild!</h1>
      <p>Start editing src/App.tsx to see changes</p>
      <Link to="/demo" className="text-blue-500 hover:text-blue-700">
        Check out our demo page
      </Link>
    </div>
  );
};

export default Home; 