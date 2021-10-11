import './tasks.scss';

import '../../components/header/header';
import '../../components/search/search';
import '../../components/checkbox/checkbox';
import '../../components/select/select';
import '../../components/task/task';
import '../../components/type/type';
import '../../components/button-task/button-task';
import '../../components/button-with-text/button-with-text';


const taskList = [
  {
    id: '1',
    name: 'Название повседневная практика показывает',
    type: {
      id: 1,
      name: 'video'
    },
    executor: {
      id: 1,
      name: 'Аркадий Юрченко'
    },
    dateExpired: '2020-10-01T20:00:00.000Z',
    status: {
      id: 1,
      name: 'inWork'
    }
  },

  {
    id: '2',
    name: 'Название равным образом начало повседневной работы',
    type: {
      id: 2,
      name: 'photo'
    },
    executor: {
      id: 2,
      name: 'Эльза Калининa'
    },
    dateExpired: '2020-02-08T20:00:00.000Z',
    status: {
      id: 3,
      name: 'approved'
    }
  },
  {
    id: '3',
    name: 'Название с другой стороны начало повседневной работы по формированию позиции',
    type: {
      id: 3,
      name: 'audio'
    },
    executor: {
      id: 3,
      name: 'Дмитрий Румянцев'
    },
    dateExpired: '2020-08-01T20:00:00.000Z',
    status: {
      id: 2,
      name: 'feedback'
    }
  }
];

const types = {
  video: 'Видео',
  photo: 'Фото',
  audio: 'Аудио'
};

const status = {
  inWork: 'В работе',
  feedback: 'Ожидает согласования',
  approved: 'Выполнено'
};
