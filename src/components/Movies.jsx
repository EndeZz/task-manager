import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

const Movies = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </div>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    MovieItem.propTypes,
  ).isRequired,
};

export default Movies;
