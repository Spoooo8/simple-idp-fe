import { useRef } from 'react';
import Navigation from '../components/general/Navigation';
import HeroSection from '../components/layout/HeroSection';
import LayoutDesc from '../components/layout/LayoutDesc';
import LayoutDescB from '../components/layout/LayoutDescB';
import LayoutCardSec from '../components/layout/LayoutCardSec';
import layoutSecData from '../data/layout/layoutSecData';
import LayoutSetUp from '../components/layout/LayoutSetUp';
import Footer from '../components/general/Footer';

function Layout() {
  const heroRef = useRef(null);
  const sectionARef = useRef(null);
  const footerRef = useRef(null);

  const getSection = (heading) =>
    layoutSecData.find((item) => item.heading === heading);

  return (
    <div className="w-full min-h-screen bg-gray-100 text-white">
      <Navigation
        scrollToHero={() => heroRef.current?.scrollIntoView({ behavior: 'smooth' })}
        scrollToSectionA={() => sectionARef.current?.scrollIntoView({ behavior: 'smooth' })}
        scrollToFooter={() => footerRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div>
        <LayoutDesc {...getSection("Secure Identity")} />
      </div>
      <LayoutDescB {...getSection("Seamless Experience")} />
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
