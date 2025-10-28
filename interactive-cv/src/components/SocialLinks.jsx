import React from 'react';
import { useTranslation } from 'react-i18next';
import npmIcon from "../assets/icons/npm.png";
import ghIcon from "../assets/icons/github.png";
import inIcon from "../assets/icons/linkedin.png";
import emailIcon from "../assets/icons/email.png";

const SOCIAL_LINKS = [
    { name: 'LinkedIn', icon: inIcon, type: 'img', url: 'https://www.linkedin.com/in/judith-vazba/' },
    { name: 'GitHub', icon: ghIcon, type: 'img', url: 'https://github.com/JudVazba' },
    { name: 'NPM', icon: npmIcon, type: 'img', url: 'https://www.npmjs.com/package/lovely-table' },
    { name: 'Email', icon: emailIcon, type: 'img', url: 'mailto:jud.vazba@gmail.com' },
];

const SocialLinks = () => {
    const { t } = useTranslation();
    
    return (
        <div className="social-links-container">
            {SOCIAL_LINKS.map((link, index) => (
                <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label={t('aria_label_social', { name: link.name })}
                >
                    {link.type === 'img' ? (
                        <img 
                            src={link.icon} 
                            alt={`${link.name} Icon`} 
                            className="social-icon-image"
                        />
                    ) : (
                        <span className="social-icon-text">{link.icon}</span> 
                    )}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
