import './profile.scss';

import '../../components/header/header';
import '../../components/button-with-text/button-with-text';
import '../../components/media-button/media-button';
import '../../components/user-avatar/user-avatar';

import data from '../../../server/UserResponseDto.json';

const user = data[0];

if (user?.avatar && user.avatar != "") {
  document.querySelector('.profile__image-box').querySelector('.user-avatar__img').src = user.avatar;
  document.querySelector('.profile__image-box').querySelector('.user-avatar__img').style.display = "block";
}

if (user?.name) {
  document.querySelector('.profile__input_name').value = user.name;
}

if (user?.email) {
  document.querySelector('.profile__input_email').value = user.email;
}

document.querySelector('.media-button-back').onclick = () => {
  window.location.href = 'index.html';
};
