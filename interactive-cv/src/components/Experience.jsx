import React from 'react';

const Experience = ({ data }) => (
  <div className="job-entry">
    <h4>{data.position} <span className="job-company">@{data.company}</span></h4>
    <p className="job-dates">{data.dates}</p>
    <ul>
      {data.description.map((item, index) => (
        <li key={index} className="has-tooltip"> 
          {item}
          <span className="tooltip-text">
            {data.tooltips[item] || "Contextual details on this achievement."}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;