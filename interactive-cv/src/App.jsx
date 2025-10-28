import React, { useState, useEffect } from 'react';
import { cvData } from './data/cvData';
import Header from './components/Header';
import Section from './components/Section';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
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
      <Header data={cvData.profile} />

      <main className="cv-main">
        <Section title="Professional Profile">
          <p className="summary-text">{cvData.profile.summary}</p>
        </Section>

        <Section title="Professional Experience">
          {cvData.experience.map((exp, index) => (
            <Experience key={index} data={exp} />
          ))}
        </Section>
        
        <Section title="Technical Skills">
          <Skills skills={cvData.skills} /> 
        </Section>
        
        <Section title="Languages">
          <ul className="languages-list">
            {cvData.languages.map((lang, index) => (
              <li key={index}>
                <strong>{lang.lang}:</strong> {lang.level}
              </li>
            ))}
          </ul>
        </Section>
        
      </main>
      
      <button 
        className="toggle-mode-button" 
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? '☀️ Switch to Light Mode' : '🌑 Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default App;