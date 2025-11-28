import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-4 text-center mt-auto">
      &copy; {new Date().getFullYear()} Skimanikings Task Manager. All rights reserved.
    </footer>
  );
};

export default Footer;
