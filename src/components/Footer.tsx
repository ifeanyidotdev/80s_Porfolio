import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a000f] border-t border-purple-900/50 py-12">
      <div className="absolute right-8 bottom-8 md:right-12 md:bottom-12">
        <a 
          href="#home" 
          className="h-12 w-12 rounded-full bg-purple-900/50 border border-purple-500 flex items-center justify-center hover:bg-purple-800/50 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </a>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="cursive-font text-3xl font-bold text-white hover:text-purple-400 transition-colors animate-glow">
              DEV
            </a>
          </div>
          
          <div className="flex space-x-8 mb-8 md:mb-0">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#projects" className="text-white hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-white hover:text-purple-400 transition-colors">
              Skills
            </a>
            <a href="#about" className="text-white hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:email@example.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-900/30 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and built with <span className="text-purple-400">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;