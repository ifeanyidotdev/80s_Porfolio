import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    let iter = 0;
    const phrase = "Fullstack Developer";
    const interval = setInterval(() => {
      text.innerText = phrase.substring(0, iter);
      if (iter >= phrase.length) {
        clearInterval(interval);
      }
      iter += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl mb-4 opacity-80 monospace-font">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 cursive-font animate-glow">
            John Doe
          </h1>
          <div className="h-12 mb-12">
            <h3 ref={textRef} className="text-2xl md:text-4xl monospace-font text-purple-300">
              &nbsp;
            </h3>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="neon-button flex items-center space-x-2">
              <span>View Projects</span>
            </a>
            <a href="#contact" className="neon-button flex items-center space-x-2">
              <span>Contact Me</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:email@example.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#projects" aria-label="Scroll to projects">
            <ChevronDown className="h-8 w-8 text-purple-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;