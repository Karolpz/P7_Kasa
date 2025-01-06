import React from 'react';
import fullStarPic from '../assets/images/fullStar.png';  // Image pour étoile pleine
import emptyStarPic from '../assets/images/emptyStar.png';  // Image pour étoile vide

const Rating = ({ rating }) => {
    const fullStars = rating; 

    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
                <img
                    key={index}
                    src={index < fullStars ? fullStarPic : emptyStarPic}
                    alt={`Note de ${fullStars} sur ${Array.length}`}
                />
            ))}
        </div>
    );
};

export default Rating;