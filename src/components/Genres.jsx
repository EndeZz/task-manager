import React from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';

const Genres = ({ genres }) => (
  <div className="genres">
    {genres.map((genre) => (
      <Genre key={genre.id} genre={genre} />
    ))}
  </div>
);

Genres.propTypes = {
  genres: PropTypes.arrayOf(Genre.propTypes).isRequired,
};

export default Genres;
