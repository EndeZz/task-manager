import React from 'react';
import PropTypes from 'prop-types';
import SignIn from './SignIn';

const SignInModalWindow = ({
  active, setActive, signin, error,
}) => (
  <div
    className={active ? 'sign-in-container active' : 'sign-in-container'}
    onClick={() => setActive(false)}
  >
    <SignIn signin={signin} error={error} />
  </div>
);

SignInModalWindow.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default SignInModalWindow;
