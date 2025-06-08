import { useState } from 'react';
import logo from '../images/logo.png';

function Navigation() {
  return (
    <>
      <header className="bg-white shadow-md w-full">
        <div className="w-full px-4 py-4 flex justify-between items-center">
          <div className="flex space-x-8 text-gray-800">
            <a href="#" className="hover:text-purple-600">Home Page</a>
            <a href="#" className="hover:text-purple-600">Services ▾</a>
                <a href="#" className="hover:text-purple-600">Contact Us</a>
          </div>
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">Join</button>
        </div>
      </header>
    </>
  );
}

export default Navigation;
