import React from 'react';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      content: "Building responsive web applications with React, TypeScript, and modern CSS frameworks.",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
      ]
    },
    {
      title: "Backend Development",
      content: "Developing robust backend systems with Node.js, Express, Python, Django and various databases.",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Python/Django", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
      ]
    },
    {
      title: "Mobile Development",
      content: "Creating cross-platform mobile apps with React Native, Flutter and native technologies.",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "iOS (Swift)", level: 70 },
        { name: "Android (Kotlin)", level: 65 },
      ]
    },
    {
      title: "Full Stack Solutions",
      content: "End-to-end development from database design to frontend implementation.",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Testing", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <h2 className="section-title" data-text="Skills">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="retro-card p-6">
              <h3 className="text-2xl font-bold mb-6 cursive-font text-center">{category.title}</h3>
             <p>{category.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;