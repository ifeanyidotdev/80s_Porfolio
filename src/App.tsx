import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'projects', 'skills', 'about', 'contact'];
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (
          scrollPosition >= offsetTop - 100 && 
          scrollPosition < offsetTop + height - 100
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#0f0014] to-[#1a0033] text-white min-h-screen overflow-hidden">
      {/* Retro grid background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-grid"></div>
      
      {/* Scan lines effect */}
      <div className="fixed inset-0 z-50 pointer-events-none scanlines"></div>
      
      {/* Custom cursor */}
      <Cursor />
      
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;