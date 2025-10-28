import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';

const Education = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const educationData = cvData.education || [];

  if (educationData.length === 0) {
    return null;
  }
  
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 pt-2">
      {educationData.map((item, index) => {
        const isExpanded = expandedIndex === index;
        const hasDescription = item.disciplineKey !== null;

        return (
          <div 
            key={index} 
            className="education-entry" 
            style={{
              borderLeft: `4px solid ${isExpanded ? 'var(--primary-color)' : 'var(--secondary-color)'}`,
              marginBottom: '30px',
              paddingLeft: '20px',
              transition: 'border-left 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderLeft = `4px solid var(--primary-color)`}
            onMouseOut={(e) => e.currentTarget.style.borderLeft = `4px solid ${isExpanded ? 'var(--primary-color)' : 'var(--secondary-color)'}`}
          >
            
            <h4 style={{ margin: '0 0 5px', fontSize: '1.2em', color: 'var(--text-color)' }} className="job-entry-title">
              {t(item.degreeKey)}
            </h4>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                
                {item.place && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <p className="job-company" style={{ 
                            margin: 0, 
                            color: 'var(--secondary-color)', 
                            fontWeight: '600',
                            fontStyle: 'italic',
                        }}>
                            {item.place}
                        </p>
                        
                        {hasDescription && (
                            <span 
                                onClick={() => toggleExpand(index)}
                                title={isExpanded ? t('ocultar_detalles') : t('mostrar_detalles')} 
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '10px',
                                    color: 'var(--primary-color)',
                                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease-in-out',
                                    padding: '5px' 
                                }}
                            >
                                {'\u25BC'} 
                            </span>
                        )}
                    </div>
                )}

                <span className="job-dates" style={{ 
                    fontSize: '0.9em', 
                    opacity: '0.6', 
                    color: 'var(--text-color)', 
                    fontWeight: '600'
                }}>
                    {t(item.dateKey)}
                </span>
            </div>
            {(hasDescription && isExpanded) && (
              <p className="job-description" style={{ 
                fontSize: '0.95em', 
                color: 'var(--text-color)', 
                marginTop: '10px',
                paddingTop: '5px',
                borderTop: '1px dotted rgba(0,0,0,0.1)'
              }}>
                {t(item.disciplineKey)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Education;