import React from 'react';
import ROUTER from '../../../router/routes';
import './notification.scss';

const { PAGES } = ROUTER;

function Notification() {
  return (
    <div className="notification">
      <a className="notification__icon" href={PAGES.NOTIFICATIONS}>
        <img src="/icons/bell.svg" alt="Уведомление" />
      </a>
    </div>
  );
}

export default Notification;
