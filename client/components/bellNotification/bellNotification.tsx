import React from 'react';
import './bellNotification.scss';
import BellIcon from '../iconComponents/bellIcon';

interface Props {
  numberOfNotifications: string,
  className?: string;
}

const BellNotification: React.FunctionComponent<Props> = ({
  numberOfNotifications,
}) => {
  // react children
  return (
    <div className='bell-container'>
      <BellIcon className='bell' />
      {Number(numberOfNotifications) > 0 ? (
        <div className='number-of-notifications'>
          {numberOfNotifications}
        </div>
      ) : null}

    </div>
  );
};

export default BellNotification;
