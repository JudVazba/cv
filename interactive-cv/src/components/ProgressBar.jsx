import React, { useState, useEffect } from 'react';

const ProgressBar = ({ name, level }) => {
  const [currentWidth, setCurrentWidth] = useState(0); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWidth(level);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <div className="skill-bar-container">
        <div 
          className="skill-bar" 
          style={{ width: `${currentWidth}%` }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
          role="progressbar"
        >
          <span className="skill-level">{level}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;