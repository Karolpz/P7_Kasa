import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ logements }) => {
  return (
    <div className='cardsContainer'>
      {logements.map((logement) => (
        <div key={logement.id} className='cardContent'>
          <img src={logement.cover} alt={logement.title} className='cardPicture' />
          <h2>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,   
      title: PropTypes.string.isRequired,   
    })
  ).isRequired,
};

export default Card;
