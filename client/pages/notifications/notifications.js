import './notifications.scss';

import '../../components/header/header';
import '../../components/user-avatar/user-avatar';
import '../../components/media-button/media-button';
import '../../components/notification/notification';

document.querySelector('.media-button-back').onclick = () => {
  window.history.back();
};
