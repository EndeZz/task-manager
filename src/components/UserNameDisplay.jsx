import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserNameDisplay = ({ user, onChangeUserName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(user.name);

  useEffect(() => {
    setUserName(user.name);
  }, [user.name]);

  return (
    <div>
      {isEditing ? (
        <input
          onBlur={() => {
            setIsEditing(false);
            onChangeUserName(userName);
          }}
          type="text"
          className="input-field"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          ref={(inputRef) => {
            if (inputRef) {
              inputRef.focus();
            }
          }}
        />
      ) : (
        <h3
          onClick={() => {
            setIsEditing(true);
          }}
        >
          {user.name}
        </h3>
      )}
    </div>
  );
};

UserNameDisplay.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onChangeUserName: PropTypes.func.isRequired,
};

export default UserNameDisplay;
