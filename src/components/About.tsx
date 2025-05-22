import React from 'react';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Led the development of responsive web applications using React, TypeScript, and modern web technologies."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2020",
      description: "Developed full-stack applications using Node.js, Express, and React. Implemented RESTful APIs and database integrations."
    },
    {
      id: 3,
      title: "Mobile Developer",
      company: "AppWorks Studio",
      period: "2016 - 2018",
      description: "Created cross-platform mobile applications using React Native. Collaborated with design and backend teams to deliver high-quality apps."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <h2 className="section-title" data-text="About Me">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="retro-card p-6">
              <h3 className="text-2xl font-bold mb-4 cursive-font flex items-center">
                <Code className="mr-2 h-6 w-6 text-purple-400" />
                My Story
              </h3>
              <p className="mb-4 text-gray-300">
                I'm a passionate fullstack developer with over 5 years of experience building web and mobile applications. My journey in software development began during college, where I discovered my love for creating interactive digital experiences.
              </p>
              <p className="text-gray-300">
                I specialize in building robust, scalable applications using modern frameworks and best practices. My goal is to create software that not only functions flawlessly but also provides an exceptional user experience.
              </p>
            </div>
            
            <div className="retro-card p-6">
              <h3 className="text-2xl font-bold mb-4 cursive-font flex items-center">
                <GraduationCap className="mr-2 h-6 w-6 text-purple-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Master's in Computer Science</h4>
                  <p className="text-purple-400">Stanford University, 2016</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Bachelor's in Software Engineering</h4>
                  <p className="text-purple-400">MIT, 2014</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="retro-card p-6">
              <h3 className="text-2xl font-bold mb-6 cursive-font flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-purple-400" />
                Experience
              </h3>
              <div className="space-y-8">
                {experiences.map(exp => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-purple-500">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500"></div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-purple-400 mb-1">{exp.company} | {exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="retro-card p-6 mt-6">
              <h3 className="text-2xl font-bold mb-4 cursive-font flex items-center">
                <Award className="mr-2 h-6 w-6 text-purple-400" />
                Achievements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Best Mobile App Award at TechCon 2022</li>
                <li>Published 3 research papers on web performance optimization</li>
                <li>Speaker at React Conference 2021</li>
                <li>Open-source contributor to popular frontend frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;