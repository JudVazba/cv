import React, { useState, useEffect } from 'react';
import useInterval from '../hooks/useInterval'; 
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";

const PROFILE_IMAGES = [
    img1,
    img2,
];

const TRANSITION_TIME = 8000;
const TRANSITION_DURATION_MS = 1000;
const totalImages = PROFILE_IMAGES.length;

const ImageCarousel = () => {
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
        if (current === totalImages - 1) { 
            const jumpTimer = setTimeout(() => {
                setCurrent(0);
            }, TRANSITION_TIME); 
            
            return () => clearTimeout(jumpTimer);
        }
    }, [current, totalImages]); 

    useInterval(() => {
        setCurrent(prev => prev + 1);
    }, current < totalImages - 1 ? TRANSITION_TIME : null); 

    const itemWidth = `${100 / totalImages}%`;
    const movePercentage = 100 / totalImages;
    const transformValue = `translateX(-${current * movePercentage}%)`;
    
    return (
        <div className="carousel-container">
            <div 
                className="carousel-inner"
                style={{ 
                    width: `${totalImages * 100}%`,
                    transform: transformValue,
                    transition: current === 0 && current > 0 ? 'none' : `transform ${TRANSITION_DURATION_MS / 1000}s ease-in-out`,
                }}
            >
                {PROFILE_IMAGES.map((src, index) => (
                    <div 
                        key={index} 
                        className="carousel-item"
                        style={{ 
                            width: itemWidth, 
                            flexShrink: 0,
                            backgroundImage: `url(${src})` 
                        }}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;