import './index.scss';

import '../../components/header/header';
import '../../components/type/type';
import '../../components/card/card';
import '../../components/search/search';
import '../../components/checkbox/checkbox';
import '../../components/loader/loader';
import durationTime from '../../utils/time';
import modal from '../../components/modal/modal';
import '../../components/media-button/media-button';

const cards = document.getElementsByClassName('card');

const types = {
  video: 'Видео',
  photo: 'Фото',
  audio: 'Аудио',
};

const data = [
  {
    id: 1,
    type: { id: 1, name: 'video' },
    name: 'Название повседневная практика показывает',
    dataCreated: '09:21 14.02.2020',
    author: { id: 1, name: 'Аркадий Юрченко' },
    format: 'mp4',
    url: '../public/img/content/1.mp4',
    preview: '../../../public/img/content/preview-1.jpg',
  },

  {
    id: 2,
    type: { id: 2, name: 'photo' },
    name: 'Название равным образом начало повседневной работы',
    dataCreated: '15:41 14.02.2020',
    author: { id: 2, name: 'Оскар Калинин' },
    format: 'png',
    url: '../../../public/img/content/2.png',
    preview: '../../../public/img/content/preview-2.png',
  },

  {
    id: 3,
    type: { id: 3, name: 'audio' },
    name: 'Название с другой стороны начало повседневной работы по формированию позиции',
    dataCreated: '20: 18 13.02.2020',
    author: { id: 3, name: 'Валерий Яковлев' },
    format: 'mp3',
    url: '../../../public/img/content/3.mp3',
    preview: '../../../public/img/content/preview-3.jpg',
  },

  {
    id: 4,
    type: { id: 2, name: 'photo' },
    name: 'Название равным образом начало повседневной работы',
    dataCreated: '10:41 12.02.2020',
    author: { id: 4, name: 'София Лебедевa' },
    format: 'jpg',
    url: '../../../public/img/content/4.jpg',
    preview: '../../../public/img/content/preview-4.jpg',
  },

  {
    id: 5,
    type: { id: 1, name: 'video' },
    name: 'Название повседневная практика показывает',
    dataCreated: '09:21 14.02.2020',
    author: { id: 1, name: 'Аркадий Юрченко' },
    format: 'mp4',
    url: '../../../public/img/content/5.mp4',
    preview: '../../../public/img/content/preview-5.jpg',
  },

  {
    id: 6,
    type: { id: 2, name: 'photo' },
    name: 'Название повседневная практика показывает',
    dataCreated: '08:47 11.02.2020',
    author: { id: 6, name: 'Данил Плотников' },
    format: 'png',
    url: '../../../public/img/content/6.png',
    preview: '../../../public/img/content/6.png',
  },

  {
    id: 7,
    type: { id: 3, name: 'audio' },
    name: 'Название повседневная практика показывает',
    dataCreated: '20:18 10.02.2020',
    author: { id: 3, name: 'Валерий Яковлев' },
    format: 'mp3',
    url: '../../../public/img/content/7.mp3',
    preview: '../../../public/img/content/preview-7.jpg',
  },

  {
    id: 8,
    type: { id: 3, name: 'audio' },
    name: 'Название с другой стороны начало повседневной работы по формированию позиции',
    dataCreated: '15:30 10.02.2020',
    author: { id: 6, name: 'Данил Плотников' },
    format: 'mp3',
    url: '../../../public/img/content/8.mp3',
    preview: '../../../public/img/content/preview-8.jpg',
  },

  {
    id: 9,
    type: { id: 2, name: 'photo' },
    name: 'Название повседневная практика показывает',
    dataCreated: '08:47 11.02.2020',
    author: { id: 6, name: 'Данил Плотников' },
    format: 'png',
    url: '../../../public/img/content/9.jpg',
    preview: '../../../public/img/content/9.jpg',
  },
];

const content = document.querySelector('.content__list');
const templateCard = document.getElementById('card');

data.forEach((item) => {
  const clone = templateCard.content.cloneNode(true);

  clone.querySelector('.card').classList.add(`card_${item.type.name}`);
  clone.querySelector('.card').id = item.id;
  clone.querySelector('.card__img').src = item.preview;

  clone.querySelector('.type__img').classList.add(`type__img_${item.type.name}`);
  clone.querySelector('.type__img > use').href.baseVal += item.type.name;
  clone.querySelector('.type__text').classList.add(`type__text_${item.type.name}`);
  clone.querySelector('.type__text').innerText = types[item.type.name];

  clone.querySelector('.card__title').innerText = item.name;

  clone.querySelector('.card__author-name').innerText = item.author.name;

  clone.querySelector('.card__date').innerText = item.dataCreated;

  if (item.type.name === 'audio' || item.type.name === 'video') {
    const element = document.createElement(item.type.name);
    element.setAttribute('src', item.url);
    const idItem = item.id;

    element.onloadedmetadata = () => {
      const time = durationTime(Math.floor(element.duration));
      document.getElementById(idItem).querySelector('.card__type-time').innerText = time;
    };
  }
  content.append(clone);
});

Array.from(cards).forEach((card) => {
  card.addEventListener('click', () => {
    const { id: ids } = card;
    const obj = data.filter((item) => item.id === ids);

    const container = document.querySelector('.main');
    const template = document.getElementById('modal');
    const clone = template.content.cloneNode(true);
    container.append(clone);
    modal(obj);
  });
});
