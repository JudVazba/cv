const SOCIAL_LINKS = [
    { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/in/tuperfil' },
    { name: 'GitHub', icon: 'git', url: 'https://github.com/tuusuario' },
    { name: 'NPM', icon: 'npm', url: 'https://www.npmjs.com/~tuusuario' },
    { name: 'Email', icon: '@', url: 'mailto:jud.vazba@gmail.com' },
];

const SocialLinks = () => {
    return (
        <div className="social-links-container">
            {SOCIAL_LINKS.map((link, index) => (
                <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label={`Visitar mi perfil de ${link.name}`}
                >
                    <span className="social-icon">{link.icon}</span> 
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;