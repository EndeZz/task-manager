import './auth.scss';

import '../../components/button-with-text/button-with-text';
import '../../components/user-avatar/user-avatar';

document.querySelector('.button-login').onclick = () => {
  localStorage.id = 1;
  window.location.href = 'index.html';
};
