import React, { useState } from 'react'
import rightArrow from '../assets/images/rightArrow.png'
import leftArrow from '../assets/images/leftArrow.png'
import PropTypes from 'prop-types';

function SlideShow({ pictures, title }) {

    const [currentPicture, setCurrentPicture] = useState(0);
    const totalPictures = pictures.length;

    const nextSlide = () => {
        setCurrentPicture((currentPicture) => (currentPicture + 1) % totalPictures);
    }

    const prevSlide = () => {
        setCurrentPicture((currentPicture) => (currentPicture - 1 + totalPictures) % totalPictures);
    }

    return (
        <div className="logementPicture">
            <img src={pictures[currentPicture]} alt={`${title}, image n°${currentPicture + 1} sur ${totalPictures}`} className='currentPicture' />
            {totalPictures > 1 && (
                <>
                    <img src={rightArrow} alt='flèche droite' className='arrow rightArrow' onClick={nextSlide} />
                    <img src={leftArrow} alt='flèche droite' className='arrow leftArrow' onClick={prevSlide} />
                    <p>{currentPicture + 1}/{totalPictures}</p>
                </>
            )}
        </div>
    )
}

SlideShow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};


export default SlideShow