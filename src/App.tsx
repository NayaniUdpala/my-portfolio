import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { ParticleBackground } from './components/ParticleBackground';
export function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation scrolled={scrolled} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>;
}