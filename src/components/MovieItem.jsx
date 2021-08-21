import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => (
  <div className="movie-item">
    <div className="image-wrapper">
      <img src={movie.img} alt="" />
      <div className="img-overlay">
        <p className="movie-item-description">{movie.description}</p>
      </div>
    </div>
    <p className="movie-item-name">{movie.name}</p>
  </div>
);

MovieItem.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieItem;
