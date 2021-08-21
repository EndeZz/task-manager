import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ genre }) => (
  <div
    className="genre"
    style={{
      background: `linear-gradient(127.83deg, ${genre.colorFrom}, ${genre.colorTo})`,
    }}
  >
    <p>{genre.emoji}</p>
    <p>{genre.title}</p>
  </div>
);

Genre.propTypes = {
  genre: PropTypes.shape({
    colorFrom: PropTypes.string.isRequired,
    colorTo: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Genre;
