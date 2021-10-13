import './modal.scss';
import durationTime from '../../utils/time';

const types = {
  video: 'Видео',
  photo: 'Фото',
  audio: 'Аудио',
};

export default (data) => {
  const modal = document.querySelector('.modal');

  modal.onclick = () => {
    modal.remove();
  };

  document.getElementsByClassName('media-button-back')[0].addEventListener(('click'), () => {
    document.querySelector('.modal').style.display = 'none';
    modal.remove();
  });

  modal.style.display = 'block';

  modal.querySelector('.modal__content').classList.add(`modal__content_${data[0].type.name}`);

  modal.querySelector('.type__img').classList.add(`type__img_${data[0].type.name}`);
  modal.querySelector('.type__img > use').href.baseVal += data[0].type.name;
  modal.querySelector('.type__text').innerText = types[data[0].type.name];

  modal.querySelector('.modal__title').innerText = data[0].name;
  modal.querySelector('.modal__date').innerText = data[0].dataCreated;

  const component = modal.getElementsByClassName('modal__component');
  let time = '';

  switch (data[0].type.name) {
    case 'photo': {
      component[1].setAttribute('src', data[0].url);
      break;
    }

    case 'video': {
      component[0].setAttribute('src', data[0].url);
      component[0].onloadedmetadata = () => {
        time = durationTime(Math.floor(component[0].duration));
        modal.querySelector('.modal__type-time').innerText = time;
      };
      break;
    }

    case 'audio': {
      component[2].setAttribute('src', data[0].url);
      component[2].onloadedmetadata = () => {
        time = durationTime(Math.floor(component[2].duration));
        modal.querySelector('.modal__type-time').innerText = time;
      };
      break;
    }
    default: break;
  }
};
