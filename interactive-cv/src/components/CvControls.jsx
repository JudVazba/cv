import React from 'react';
import { useTranslation } from 'react-i18next';

const CvControls = ({ isDarkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="control-buttons-container">
      <button 
        className="toggle-language-button control-button" 
        onClick={toggleLanguage}
        aria-label={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        {currentLang === 'es' ? 'English' : 'Español'}
      </button>
      
      <button 
        className="toggle-mode-button control-button" 
        onClick={toggleDarkMode}
        aria-label={t(isDarkMode ? "mode_switch_light" : "mode_switch_dark")}
      >
        {isDarkMode ? '☀️' : '🌑'} {t(isDarkMode ? "mode_switch_light" : "mode_switch_dark")}
      </button>
    </div>
  );
};

export default CvControls;