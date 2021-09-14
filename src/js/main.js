import SimpleBar from 'simplebar';

import {
  selectList,
  searchInput,
  userMenu,
} from './modules/select';
import calendar, { calendarSmall } from './modules/calendar';

try {
  const scrollbar = new SimpleBar(document.querySelector('.select__dropdown-content'));
  scrollbar.getContentElement();
} catch (err) {
  console.log(err);
}

try {
  calendar();
  calendarSmall();
} catch (err) {
  console.log(err);
}

try {
  selectList();
} catch (err) {
  console.log(err);
}

try {
  userMenu();
} catch (err) {
  console.log(err);
}

try {
  searchInput();
} catch (err) {
  console.log(err);
}
