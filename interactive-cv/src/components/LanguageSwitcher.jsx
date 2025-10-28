import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      className="toggle-language-button" 
      onClick={toggleLanguage}
      aria-label={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {currentLang === 'es' ? 'English' : 'Español'}
    </button>
  );
};

export default LanguageSwitcher;