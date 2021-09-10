import '../css/simplebar.css';
import '../css/jsCalendar.css';
import '../scss/style.scss';
import '../index.html';

// JS
import './modules/simplebar';
import './modules/jsCalendar';
import './modules/jsCalendar.lang.ru';

let profile = document.querySelector('.header__user-photo');

profile.addEventListener('click', () => {
  document.querySelector('.header__user-profile').classList.toggle('photo-active');
});
