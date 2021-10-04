import React from 'react';
import './notificationIcon.scss';

interface Props {
  icon: JSX.Element;
  className?: string;
}

const NotificationIcon: React.FunctionComponent<Props> = ({
  icon,
}) => {
  // react children
  return (
    <div className='notification-icon-container'>
      {icon}
      <span className='red-dot' />

    </div>
  );
};

export default NotificationIcon;
