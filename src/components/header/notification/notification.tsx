import React from 'react';
import './notification.scss';

function Notification() {
  return (
    <div className="notification">
      <img className="notification__icon" src="/icons/bell.svg" alt="Уведомление" />
    </div>
  );
}

export default Notification;
