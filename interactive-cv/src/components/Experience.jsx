import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = ({ data }) => {
  const { t } = useTranslation();
  
  const positionKey = `job_${data.company.toLowerCase()}_position`;
  
  return (
    <div className="job-entry">
      <h4>{t(positionKey)} <span className="job-company">@{data.company}</span></h4>
      <p className="job-dates">{data.dates}</p>
      <ul>
        {data.descriptionKeys.map((key, index) => (
          <li key={index} className="has-tooltip"> 
            {t(key)}
            <span className="tooltip-text">
              {t(data.tooltipKeys[index] || 'tooltip_default')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;