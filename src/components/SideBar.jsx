import React from 'react';
import logo from '../images/logo_white.png';
import { Link } from "react-router-dom";

function Sidebar({ menuItems, activeItem, onSelect }) {
  return (
    <aside className="w-48 bg-black text-white p-6 flex flex-col shadow-md">
    <div className="flex space-x-4 text-black">
  <Link to="/">
    <img src={logo} alt="Logo" className="h-12 w-auto cursor-pointer" />
  </Link>
</div>
      <br />
      <ul className="space-y-4 text-lg">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => onSelect(item)}
            className={`cursor-pointer px-3 py-2 rounded-md transition duration-200 ${
              activeItem === item.name
                ? 'bg-white text-black font-semibold'
                : 'text-gray-300 hover:text-black hover:bg-white hover:bg-opacity-80'
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
