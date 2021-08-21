import React from 'react';
import PropTypes from 'prop-types';

const Program = ({ program }) => (
  <div className="program">
    <p className="program-hour">{program.hour}</p>
    <p>{program.program}</p>
  </div>
);

Program.propTypes = {
  program: PropTypes.shape({
    hour: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
  }).isRequired,
};

export default Program;
