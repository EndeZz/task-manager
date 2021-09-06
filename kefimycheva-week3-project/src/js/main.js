import SimpleBar from 'simplebar';
import {
  selectList,
  searchInput,
  userMenu,
} from './modules/select';

import Calendar from './modules/Calendar';

try {
  const scrollbar = new SimpleBar(document.querySelector('.select__dropdown-content'));
  scrollbar.getContentElement();
} catch (err) {
  console.log(err);
}

const calendar = document.querySelector('.calendar');
const inputCalendar = document.querySelector('.input__block-text--calendar');
const calendarCreate = new Calendar();
calendar.append(calendarCreate.render());

const dayNow = (new Date()).getDate();
const calendarDays = document.querySelectorAll('.calendar__days-item__num');

calendarDays.forEach((day) => {
  if (+day.textContent === dayNow) {
    day.classList.add('calendar__days-item__num--today');
  }
});

inputCalendar.addEventListener('click', () => {
  document.querySelector('.calendar__wrapper').classList.toggle('show');
});

selectList();
searchInput();
userMenu();
