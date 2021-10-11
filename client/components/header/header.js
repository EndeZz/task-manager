import './header.scss';

const buttonMenu = document.querySelector('.user__button');
const menuUser = document.querySelector('.user-menu');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('user__button_active')
})

menuUser.addEventListener('mouseleave', () => {
  buttonMenu.classList.remove('user__button_active')
})

const location = window.location.pathname.match(/(?<=\/)\w+(?=\.html)/ig)[0];
const page = {
  'index': [document.getElementsByClassName('menu__item')[0], 'menu__item'],
  'task': [document.getElementsByClassName('menu__item')[1], 'menu__item'],
  'tasks': [document.getElementsByClassName('menu__item')[1], 'menu__item'],
  'new-task': [document.getElementsByClassName('menu__item')[1], 'menu__item'],
  'user': [document.getElementsByClassName('menu__item')[2], 'menu__item'],
  'users': [document.getElementsByClassName('menu__item')[2], 'menu__item'],
  'profile': [document.getElementsByClassName('menu__item')[0], 'menu__item'],
  'notifications': [document.querySelector('.notification'), 'notification']
};

if (page.hasOwnProperty(location)) {
  page[location][0].classList.add(page[location][1] + '_active');
}

document.getElementsByClassName("user-menu__link")[0].onclick = () => {
  window.location.href = "profile.html";
}

document.getElementsByClassName("user-menu__link")[1].onclick = () => {
  window.location.href = "auth.html";
}
