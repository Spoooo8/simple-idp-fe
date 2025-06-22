import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './SideBar';
import NavigationBlack from '../general/NavigationBlack';

import { useOAuthFlow } from '../../components/oauth_flows/OAuthFlowContext';
import menuItems from '../../data/oauth_flows/menuItems';
import codeMenuItems from '../../data/oauth_flows/codeMenuItems';
import pkceMenuItems from '../../data/oauth_flows/pkcemenuItems';
import clientMenuItems from '../../data/oauth_flows/clientMenuItems';

const OAuth = () => {
  const { flow } = useOAuthFlow();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState('Dashboard');

  const getMenuItems = () => {
    if (flow === 'code') return codeMenuItems;
    if (flow === 'pkce') return pkceMenuItems;
    if (flow === 'client') return clientMenuItems;
    return menuItems;
  };

  const currentMenuItems = getMenuItems();

  useEffect(() => {
    const matchedItem = currentMenuItems.find(item =>
      location.pathname.includes(item.path)
    );
    if (matchedItem) {
      setActiveItem(matchedItem.name);
    }
  }, [location.pathname, currentMenuItems]);

  const handleSelect = (item) => {
    setActiveItem(item.name);
    navigate(`/oauth/${item.path}`);
  };

  return (
    <>
      <NavigationBlack />
      <div className="min-h-screen w-screen flex bg-black">
        <Sidebar
          menuItems={currentMenuItems}
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

export default OAuth;
