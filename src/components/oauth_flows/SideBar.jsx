import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Sidebar({ menuItems }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Try to find a matching item (partial match)
  const matchedItem = menuItems.find(item =>
    currentPath === item.path || currentPath.startsWith(item.path + '/')
  );

  return (
    <aside className="w-48 bg-zinc-900 text-white p-6 flex flex-col shadow-md">
      <ul className="space-y-4 text-lg">
        {menuItems.map((item, index) => {
          const isActive = matchedItem
            ? item.path === matchedItem.path
            : index === 0;

          return (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block px-3 py-2 rounded-md transition duration-200 ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'text-gray-300 hover:text-black hover:bg-white hover:bg-opacity-80'
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
