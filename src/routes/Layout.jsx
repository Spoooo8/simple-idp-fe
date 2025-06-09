import { useRef } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import LayoutSecA from '../components/LayoutSecA';
import LayoutSecB from '../components/LayoutSecB';
import LayoutSecCard from '../components/LayoutSecCard';
import layoutSecData from '../data/layoutSecData';
import LayoutSecC from '../components/LayoutSecC';
import Footer from '../components/Footer';

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
      <div ref={sectionARef}>
        <LayoutSecA {...getSection("Secure Identity")} />
      </div>
      <LayoutSecB {...getSection("Seamless Experience")} />
      <LayoutSecA {...getSection("Advanced Security")} />
      <LayoutSecCard />
      <LayoutSecC />
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
