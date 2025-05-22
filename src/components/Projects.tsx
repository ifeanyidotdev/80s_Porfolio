import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce App",
      description: "A full-featured e-commerce platform with product listings, shopping cart, and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with data visualization and user engagement metrics.",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Vue.js", "Firebase", "Chart.js", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "Mobile fitness application for tracking workouts, nutrition, and personal progress.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React Native", "Redux", "Express", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates and team workflow features.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Angular", "TypeScript", "Node.js", "Socket.io"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <h2 className="section-title" data-text="Projects">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neon-button inline-flex items-center"
          >
            <Github className="mr-2 h-5 w-5" />
            <span>More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;