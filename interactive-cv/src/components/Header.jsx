import React from 'react';
import ImageCarousel from './ImageCarousel'; 
import SocialLinks from './SocialLinks';  

const Header = ({ data }) => {
    return (
        <header className="cv-header">
            <ImageCarousel /> 

            <h1>{data.name}</h1>
            <h2>{data.title}</h2>
            
            <SocialLinks />
            
            <div className="contact-info contact-info-compact">
                <span>{data.location}</span> | 
                <span>
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                </span> | 
                <span>{data.phone}</span>
            </div>
            
        </header>
    );
};

export default Header;