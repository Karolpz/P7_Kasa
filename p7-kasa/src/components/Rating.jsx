import React from 'react';
import fullStarPic from '../assets/images/fullStar.png';
import emptyStarPic from '../assets/images/emptyStar.png';
import PropTypes from 'prop-types';

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

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;