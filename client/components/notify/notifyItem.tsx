import * as React from 'react';
import './notify.scss';
import Icon from '../icon/icon';

enum TYPE {
  AUDIO = 'audio',
  VIDEO = 'video',
  PHOTO = 'photo',
}
const NotifyItem = (props: any) => {
  const { notification } = props;
  let media;
  switch (notification.type) {
    case TYPE.AUDIO:
      media = 'notify-big__icon notify-big__icon--audio';
      break;
    case TYPE.VIDEO:
      media = 'notify-big__icon notify-big__icon--video';
      break;
    case TYPE.PHOTO:
      media = 'notify-big__icon notify-big__icon--photo';
      break;
    default:
      break;
  }
  return (
    <div className={'notify-big'}>
      <div className={`notify-big__icon-inner notify-big__icon-inner--active ${media && media}`}>
        <Icon typeIcon={notification.type} />
      </div>
      <div className={'notify-big__content-inner'}>
        <div className={'notify-big__desc'}>
          {notification.user.name && <span className={'notify-big__name'}>{notification.user.name}</span>}
          <span className={'notify-big__'}>{notification.message}</span>
          {notification.user.name && <span className={'notify-big__name'}>{notification.task.name}</span>}
        </div>
        <p className={'notify-big__time'}>{notification.date}</p>
      </div>
    </div>
  );
};

export default NotifyItem;
