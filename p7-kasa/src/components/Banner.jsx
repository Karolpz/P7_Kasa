import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ srcImage, titleImage }) => {
  return (
    <section className="banner">
      <img src={srcImage} alt="Bannière paysage du site" className="logoBanner" />
      <h1 className="titleBanner">{titleImage}</h1>
    </section>
  );
};

Banner.propTypes = {
  srcImage: PropTypes.string.isRequired,
  titleImage: PropTypes.string,
};

export default Banner;
