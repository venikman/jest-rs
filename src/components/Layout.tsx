import React from 'react';
import { Link, Outlet } from 'react-router';
import { Button } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md p-4">
        <div className="flex space-x-4">
          <Link to="/">
            <Button variant="text">Home</Button>
          </Link>
          <Link to="/demo">
            <Button variant="text">Demo</Button>
          </Link>
          <Link to="/about">
            <Button variant="text">About</Button>
          </Link>
        </div>
      </nav>
      <main className="container mx-auto mt-8 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 