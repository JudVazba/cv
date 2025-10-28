import React from 'react';
import ProgressBar from './ProgressBar';

const Skills = ({ skills }) => {
  return (
    <div className="skills-list">
      {skills.map((skill, index) => (
        <ProgressBar 
          key={index} 
          name={skill.name} 
          level={skill.level} 
        />
      ))}
    </div>
  );
};

export default Skills;