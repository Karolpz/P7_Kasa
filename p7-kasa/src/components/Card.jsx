import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

const Card = ({ id, image, title }) => {
  return (
    <NavLink to={`/logements/${id}`}>
      <div className='cardContent'>
        <img src={image} alt={title} className='cardPicture' />
        <h2>{title}</h2>
      </div>
    </NavLink>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default Card;
