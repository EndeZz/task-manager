import SimpleBar from 'simplebar';

import {
  selectList,
  searchInput,
  userMenu,
} from './modules/select';

try {
  const scrollbar = new SimpleBar(document.querySelector('.select__dropdown-content'));
  scrollbar.getContentElement();
} catch (err) {
  console.log(err);
}

selectList();
searchInput();
userMenu();
