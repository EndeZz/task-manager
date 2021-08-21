import React, { useState } from 'react';

import Channels from './Channels';

import firstImg from '../../public/images/first.png';
import twoByTwoImg from '../../public/images/2x2.png';
import rbcImg from '../../public/images/rbc.png';
import amediaImg from '../../public/images/amedia.png';

const ChannelsPage = () => {
  const [channels] = useState([
    {
      id: 1,
      title: 'Первый канал',
      img: firstImg,
      schedule: [
        {
          id: 1,
          hour: '13:00',
          program: 'Новости (с субтитрами)',
        },
        {
          id: 2,
          hour: '14:00',
          program: 'Давай поженимся',
        },
        {
          id: 3,
          hour: '15:00',
          program: 'Другие новости',
        },
      ],
    },
    {
      id: 2,
      title: '2x2',
      img: twoByTwoImg,
      schedule: [
        {
          id: 1,
          hour: '13:00',
          program: 'МУЛЬТ ТВ. Сезон 4, 7 серия',
        },
        {
          id: 2,
          hour: '14:00',
          program: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
        },
        {
          id: 3,
          hour: '15:00',
          program: 'БУРДАШЕВ. Сезон 1, 20 серия',
        },
      ],
    },
    {
      id: 3,
      title: 'РБК',
      img: rbcImg,
      schedule: [
        {
          id: 1,
          hour: '13:00',
          program: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
        },
        {
          id: 2,
          hour: '14:00',
          program: 'ДЕНЬ. Главные темы',
        },
        {
          id: 3,
          hour: '15:00',
          program: 'Главные новости',
        },
      ],
    },
    {
      id: 4,
      title: 'AMEDIA PREMIUM',
      img: amediaImg,
      schedule: [
        {
          id: 1,
          hour: '13:00',
          program: 'Клиент всегда мёртв',
        },
        {
          id: 2,
          hour: '14:00',
          program: 'Голодные игры: Сойка-пересмешница. Часть I',
        },
        {
          id: 3,
          hour: '15:00',
          program: 'Секс в большом городе',
        },
      ],
    },
  ]);

  return (
    <>
      <Channels channels={channels} />
    </>
  );
};

export default ChannelsPage;
