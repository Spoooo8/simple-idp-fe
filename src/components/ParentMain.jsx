import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './SideBar';
import NavigationBlack from './NavigationBlack';

const ParentMain = ({menuItems,}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState('Dashboard');


  useEffect(() => {
    const matchedItem = menuItems.find(item =>
      location.pathname.includes(item.path)
    );
    if (matchedItem) {
      setActiveItem(matchedItem.name);
    }
  }, [location.pathname]);

  const handleSelect = (item) => {
    setActiveItem(item.name);
    navigate(`/jwt/${item.path}`);
  };

  return (
    <>
    {/* <NavigationBlack/> */}
    <div className="min-h-screen w-screen flex bg-black">
      <Sidebar
        menuItems={menuItems}
        activeItem={activeItem}
        onSelect={handleSelect}
      />
      <main className="flex-grow bg-white p-8 flex gap-8 text-gray-800">
        <Outlet />
      </main>
    </div>
      </>
  );
};

export default ParentMain;
