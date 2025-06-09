import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../../components/SideBar';
import ParentMain from '../../components/ParentMain';

const JwtMain = () => {


  const menuItems = [
    { name: 'Dashboard', path: 'form' },
    { name: 'Learn', path: 'learn' },
  ];

 

  return (
   <ParentMain menuItems={menuItems}/>
  );
};

export default JwtMain;
