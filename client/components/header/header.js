import './header.scss';

import data from '../../../server/UserResponseDto.json';

const user = data[0];

if (user?.avatar && user.avatar != "") {
  document.querySelector('.header').querySelector('.user-avatar__img').src = user.avatar;
  document.querySelector('.header').querySelector('.user-avatar__img').style.display = "block";
}

if (user?.role && user.role.name === 'admin') {
  // тут будет меню, но пока оно в Pug-e
}

if (user?.name) {
  document.querySelector('.header').querySelector('.user__name').innerText = user.name;
}

const buttonMenu = document.querySelector('.user__button');
const menuUser = document.querySelector('.user-menu');
const burger = document.querySelector('.menu-burger');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('user__button_active');
});

menuUser.addEventListener('mouseleave', () => {
  buttonMenu.classList.remove('user__button_active');
});

burger.addEventListener('click', () => {
  burger.classList.toggle('menu-burger_active');
});

const location = window.location.pathname.match(/(?<=\/)\w+-?\w+(?=\.html)/ig)[0];

const page = {
  index: [document.getElementsByClassName('menu__item')[0], 'menu__item'],
  task: [document.getElementsByClassName('menu__item')[1], 'menu__item'],
  tasks: [document.getElementsByClassName('menu__item')[1], 'menu__item'],
  'task-new': [document.getElementsByClassName('menu__item')[1], 'menu__item'],
  user: [document.getElementsByClassName('menu__item')[2], 'menu__item'],
  users: [document.getElementsByClassName('menu__item')[2], 'menu__item'],
  profile: [document.getElementsByClassName('menu__item')[0], 'menu__item'],
  notifications: [document.querySelector('.notification'), 'notification'],
};

if (Object.prototype.hasOwnProperty.call(page, location)) {
  page[location][0].classList.add(`${page[location][1]}_active`);
}


document.getElementsByClassName('user-menu__link')[0].onclick = () => {
  window.location.href = 'profile.html';
};

document.getElementsByClassName('user-menu__link')[1].onclick = () => {
  localStorage.clear();
  window.location.href = 'auth.html';
};
