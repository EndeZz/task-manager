import React from 'react';
import PropTypes from 'prop-types';

const MainHeader = ({ title, onClick, isActive }) => (
  <button type="button" className={isActive ? 'active-page' : ''} onClick={onClick}>
    {title}
  </button>
);

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
};

export default MainHeader;
