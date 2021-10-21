import './tasks.scss';

import '../../components/header/header';
import '../../components/search/search';
import '../../components/checkbox/checkbox';
import '../../components/select/select';
import '../../components/task/task';
import '../../components/type/type';
import '../../components/button-task/button-task';
import '../../components/button-with-text/button-with-text';
import '../../components/user-avatar/user-avatar';

import taskList from '../../../server/TaskListResponseDto.json';

const types = {
  video: 'Видео',
  photo: 'Фото',
  audio: 'Аудио',
};

const status = {
  inWork: 'В работе',
  feedback: 'Ожидает согласования',
  approved: 'Выполнено',
};

if ('content' in document.createElement('template')) {
  const contents = document.querySelector('.content__list');
  const templateTask = document.getElementById('task');

  taskList.forEach((item) => {
    const clone = templateTask.content.cloneNode(true);
    clone.querySelector('.task__link').href += item.id;

    clone.querySelector('.type__img').classList.add(`type__img_${item.type.name}`);
    clone.querySelector('.type__img > use').href.baseVal += item.type.name;
    clone.querySelector('.type__text').classList.add(`type__text_${item.type.name}`);
    clone.querySelector('.type__text').innerText = types[item.type.name];
    clone.querySelector('.task__title').innerText = item.name;

    clone.querySelector('.task__author').innerText = item.executor.name;
    clone.querySelector('.task__date-text').innerText = new Date(item.dateExpired).toLocaleString().substring(0, 10);
    clone.querySelector('.date-time').setAttribute('datetime', item.dateExpired);

    clone.querySelector('.task__status').classList.add(`task__status_${item.status.name}`);
    clone.querySelector('.task__status').innerText = status[item.status.name];

    contents.appendChild(clone);
  });
}
