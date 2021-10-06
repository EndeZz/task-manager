import $ from 'jquery';
import 'air-datepicker';

const calendar = $('.input__block-text--calendar').datepicker();
const calendarSmall = $('.input__block-text--calendar-small').datepicker();
const datepickerContainer = document.querySelector('.datepickers-container');
const calendarShow = document.querySelector('.datepicker--days');
const inputCalendar = document.querySelector('.input__block-box--calendar') as HTMLElement;
calendarShow.classList.remove('active');
datepickerContainer.classList.add('hidden');
inputCalendar.addEventListener('click', () => {
  calendarShow.classList.add('active');
  datepickerContainer.classList.remove('hidden');
});

export {
  calendar,
  calendarSmall,
};
