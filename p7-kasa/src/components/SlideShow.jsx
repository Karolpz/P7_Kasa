import React, { useState } from 'react'
import rightArrow from '../assets/images/rightArrow.png'
import leftArrow from '../assets/images/leftArrow.png'

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
            <img src={pictures[currentPicture]} alt={title} className='currentPicture' />
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

export default SlideShow