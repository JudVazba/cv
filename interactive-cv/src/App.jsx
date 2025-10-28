import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cvData } from './data/cvData';
import Header from './components/Header';
import Section from './components/Section';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CvControls from './components/CvControls';
import Education from './components/Education';

function App() {
  const { t } = useTranslation();
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false; 
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`cv-container ${isDarkMode ? 'dark-mode' : ''}`}>
      
      <Header 
        data={cvData.profile} 
        titleKey="profile_title"
      />

      <main className="cv-main">
        <Section title={t('section_profile')}>
          <p className="summary-text">{t('profile_summary')}</p>
        </Section>
        <Section title={t('section_skills')}>
          <Skills skills={cvData.skills} /> 
        </Section>

        <Section title={t('section_experience')}>
          {cvData.experience.map((exp, index) => (
            <Experience key={index} data={exp} />
          ))}
        </Section>
        <Section title={t('section_education')}>
          <Education />
        </Section>
        
        <Section title={t('section_languages')}>
          <ul className="languages-list">
            {cvData.languages.map((lang, index) => (
              <li key={index}>
                <strong>{t(lang.langKey)}:</strong> {t(lang.levelKey)}
              </li>
            ))}
          </ul>
        </Section>
      </main>
      
      <CvControls 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
    </div>
  );
}

export default App;