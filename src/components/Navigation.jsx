import { useState } from 'react'

function Navigation() {


return (
    <>
     <header className="bg-white shadow-md w-full">
            <div className="w-full px-4 py-4 flex justify-between items-center">
              <div className="flex space-x-8 text-gray-800">
                <a href="#" className="hover:text-purple-600">Home Page</a>
                <a href="#" className="hover:text-purple-600">About Us</a>
                <a href="#" className="hover:text-purple-600">Services ▾</a>
              </div>
              <div className="text-xl font-cursive text-purple-600">Logo</div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">Join</button>
            </div>
          </header>
    </>
);
};

export default Navigation  ;