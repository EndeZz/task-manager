import './index.scss';

import '../../components/header/header';
import '../../components/type/type';
import '../../components/card/card';
import '../../components/search/search';
import '../../components/checkbox/checkbox';

const cards = document.getElementsByClassName('card');

const types = {
  video: 'Видео',
  photo: 'Фото',
  audio: 'Аудио'
};

let data = [
  {
    id: 1,
    type: { id: 1, name: "video" },
    name: "Название повседневная практика показывает",
    dataCreated: "09:21 14.02.2020",
    author: { id: 1, name: "Аркадий Юрченко" },
    format: "mp4",
    url: "../public/img/content/1.mp4",
    preview: "../../../public/img/content/preview-1.jpg"
  },

  {
    id: 2,
    type: { id: 2, name: "photo" },
    name: "Название равным образом начало повседневной работы",
    dataCreated: "15:41 14.02.2020",
    author: { id: 2, name: "Оскар Калинин" },
    format: "png",
    url: "../../../public/img/content/2.png",
    preview: "../../../public/img/content/preview-2.png"
  },

  {
    id: 3,
    type: { id: 3, name: "audio" },
    name: "Название с другой стороны начало повседневной работы по формированию позиции",
    dataCreated: "20: 18 13.02.2020",
    author: { id: 3, name: "Валерий Яковлев" },
    format: "mp3",
    url: "../../../public/img/content/3.mp3",
    preview: "../../../public/img/content/preview-3.jpg"
  },

  {
    id: 4,
    type: { id: 2, name: "photo" },
    name: "Название равным образом начало повседневной работы",
    dataCreated: "10:41 12.02.2020",
    author: { id: 4, name: "София Лебедевa" },
    format: "jpg",
    url: "../../../public/img/content/4.jpg",
    preview: "../../../public/img/content/preview-4.jpg"
  },

  {
    id: 5,
    type: { id: 1, name: "video" },
    name: "Название повседневная практика показывает",
    dataCreated: "09:21 14.02.2020",
    author: { id: 1, name: "Аркадий Юрченко" },
    format: "mp4",
    url: "../../../public/img/content/5.mp4",
    preview: "../../../public/img/content/preview-5.jpg"
  },

  {
    id: 6,
    type: { id: 2, name: "photo" },
    name: "Название повседневная практика показывает",
    dataCreated: "08:47 11.02.2020",
    author: { id: 6, name: "Данил Плотников" },
    format: "png",
    url: "../../../public/img/content/6.png",
    preview: "../../../public/img/content/6.png"
  },

  {
    id: 7,
    type: { id: 3, name: "audio" },
    name: "Название повседневная практика показывает",
    dataCreated: "20:18 10.02.2020",
    author: { id: 3, name: "Валерий Яковлев" },
    format: "mp3",
    url: "../../../public/img/content/7.mp3",
    preview: "../../../public/img/content/preview-7.jpg"
  },

  {
    id: 8,
    type: { id: 3, name: "audio" },
    name: "Название с другой стороны начало повседневной работы по формированию позиции",
    dataCreated: "15:30 10.02.2020",
    author: { id: 6, name: "Данил Плотников" },
    format: "mp3",
    url: "../../../public/img/content/8.mp3",
    preview: "../../../public/img/content/preview-8.jpg"
  },

  {
    id: 9,
    type: { id: 2, name: "photo" },
    name: "Название повседневная практика показывает",
    dataCreated: "08:47 11.02.2020",
    author: { id: 6, name: "Данил Плотников" },
    format: "png",
    url: "../../../public/img/content/9.jpg",
    preview: "../../../public/img/content/9.jpg"
  }

];