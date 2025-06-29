import { useRef, useEffect, useState } from 'react';
import Navigation from '../components/general/Navigation';
import HeroSection from '../components/layout/HeroSection';
import LayoutDesc from '../components/layout/LayoutDesc';
import LayoutDescB from '../components/layout/LayoutDescB';
import LayoutCardSec from '../components/layout/LayoutCardSec';
import layoutSecData from '../data/layout/layoutSecData';
import LayoutSetUp from '../components/layout/LayoutSetUp';
import Footer from '../components/general/Footer';
import Clients from '../components/layout/Clients';

function Layout() {
  const heroRef = useRef(null);
  const sectionARef = useRef(null);
  const footerRef = useRef(null);

  const getSection = (heading) =>
    layoutSecData.find((item) => item.heading === heading);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    console.log('Retrieved Token:', token);
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 text-white">
      <Navigation
        scrollToHero={() => heroRef.current?.scrollIntoView({ behavior: 'smooth' })}
        scrollToSectionA={() => sectionARef.current?.scrollIntoView({ behavior: 'smooth' })}
        scrollToFooter={() => footerRef.current?.scrollIntoView({ behavior: 'smooth' })}
        isLoggedIn={isLoggedIn}
      />

      <div ref={heroRef}>
        <HeroSection />
        {isLoggedIn && (
          <Clients />
        )}
      </div>

      {!isLoggedIn && (
        <>
          <LayoutDesc {...getSection("Secure Identity")} />
          <LayoutDescB {...getSection("Seamless Experience")} />
        </>
      )}

      <div ref={sectionARef}>
        <LayoutCardSec />
      </div>

      <LayoutSetUp />
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
