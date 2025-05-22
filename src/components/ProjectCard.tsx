import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink: string;
    githubLink: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="retro-card overflow-hidden h-[400px] relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
        style={{ 
          backgroundImage: `url(${project.image})`,
          filter: 'brightness(0.6)',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0014] via-[#0f0014]/70 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        <h3 className="text-2xl font-bold mb-2 cursive-font animate-glow">{project.title}</h3>
        <p className="mb-4 text-gray-300 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-purple-900/50 border border-purple-500/50"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="neon-button text-sm py-1 px-3 inline-flex items-center"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            <span>Live Demo</span>
          </a>
          
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="neon-button text-sm py-1 px-3 inline-flex items-center"
          >
            <Github className="mr-1 h-4 w-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;