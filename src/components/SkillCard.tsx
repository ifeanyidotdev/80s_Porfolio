import React, { useState, useEffect, useRef } from 'react';

interface SkillProps {
  skill: {
    name: string;
    level: number;
  };
}

const SkillCard: React.FC<SkillProps> = ({ skill }) => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(skill.level);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [skill.level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h4 className="text-lg font-medium">{skill.name}</h4>
        <span className="text-purple-400">{skill.level}%</span>
      </div>
      <div 
        ref={progressRef}
        className="h-3 w-full bg-purple-900/30 rounded-full overflow-hidden relative"
      >
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full absolute top-0 left-0 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        >
          <div className="absolute top-0 right-0 h-full w-4 bg-white/30 blur-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;