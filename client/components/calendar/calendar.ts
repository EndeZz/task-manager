import $ from 'jquery';
import 'air-datepicker';

// const calendar = document.querySelector('.input__block-text--calendar');
// calendar.classList.add('datepicker-here');
const calendar = $('.input__block-text--calendar').datepicker();
const calendarSmall = $('.input__block-text--calendar-small').datepicker();

export {
  calendar,
  calendarSmall,
};
