'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ParcoursSection from '@/sections/ParcoursSection';
import OutilsSection from '@/sections/OutilsSection';
import TarifsSection from '@/sections/TarifsSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ParcoursSection />
      <OutilsSection />
      <TarifsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
