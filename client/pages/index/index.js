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
import '../../components/user-avatar/user-avatar';

import data from '../../../server/ContentsResponseDto.json';

const cards = document.getElementsByClassName('card');

const types = {
  video: 'Видео',
  photo: 'Фото',
  audio: 'Аудио',
};

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
    const obj = data.filter((item) => item.id === +ids);
    const container = document.querySelector('.main');
    const template = document.getElementById('modal');
    const clone = template.content.cloneNode(true);
    container.append(clone);
    modal(obj);
  });
});
