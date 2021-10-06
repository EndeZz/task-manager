import '../../components/calendar/calendar';
import {
  modalOpen,
  modalClose
} from '../../components/modal/modal';
import userMenu from '../../components/user/user';
import searchInput from '../../components/search/search';
import '../../components/select/select';
import '../../components/cardsOfTasks/cardsOfTasks';
import "./tasks.scss";
import hideText from '../../components/cardsOfTasks/cardsOfTasks';
import selectList from '../../components/select/select';
import '../../components/simplebar/simplebar';

searchInput();
userMenu();
selectList();

const tasksText = document.querySelectorAll('.card__tasks-descr__text') as NodeListOf<HTMLElement>;
hideText(tasksText);