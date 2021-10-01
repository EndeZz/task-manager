import './header.scss';

const buttonMenu = document.querySelector('.user__button');
const menuUser = document.querySelector('.user-menu');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.add('user__button_active')
})

menuUser.addEventListener('mouseleave', () => {
  buttonMenu.classList.remove('user__button_active')
})