import './user.scss';

import '../../components/header/header';
import '../../components/user-avatar/user-avatar';
import '../../components/media-button/media-button';
import '../../components/button-with-text/button-with-text';
import '../../components/select/select';
import '../../components/input/input';

document.querySelector('.media-button-back').onclick = () => {
  window.history.back();
};
