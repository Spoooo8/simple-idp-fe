import { useState } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection';
import LayoutSecA from '../components/LayoutSecA';
import LayoutSecB from '../components/LayoutSecB';
import LayoutSecCard from '../components/LayoutSecCard'
import layoutSecData  from '../data/layoutSecData';
import LayoutSecC from '../components/LayoutSecC';
import Footer from '../components/Footer';

function Layout() {

 const getSection = (heading) =>
    layoutSecData.find((item) => item.heading === heading);


return (
        <div className="w-full min-h-screen bg-gray-100 text-white">
          <Navigation/>
          <HeroSection/>
          <LayoutSecA {...getSection("Secure Identity")} />
          <LayoutSecB {...getSection("Seamless Experience")} />
          <LayoutSecA {...getSection("Collaboration Made Easy")} />
          <LayoutSecCard/>
           <LayoutSecC/>
           <Footer/>
      </div>
  );
};

export default Layout;
