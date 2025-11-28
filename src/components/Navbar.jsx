import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-blue-800 p-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-lg">PLP Task Manager</h1>
      <div className="space-x-4">
        <Link className="text-white hover:text-gray-200" to="/">Home</Link>
        <Link className="text-white hover:text-gray-200" to="/tasks">Tasks</Link>
      </div>
    </nav>
  );
};

export default Navbar;
