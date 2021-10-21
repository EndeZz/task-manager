import './task-new.scss';

import '../../components/header/header';
import '../../components/user-avatar/user-avatar';
import '../../components/media-button/media-button';
import '../../components/input/input';
import '../../components/select/select';
import '../../components/files/files';
import '../../components/button-with-text/button-with-text';

document.querySelector('.media-button-back').onclick = () => {
  window.history.back();
};
