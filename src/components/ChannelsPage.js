import { useState } from "react";
import Channels from "./Channels";

const ChannelsPage = () => {
  const [channels, setChannels] = useState([
    {
      id: 1,
      title: "Первый канал",
      img: "../images/first.png",
      schedule: [
        {
          id: 1,
          hour: "13:00",
          program: "Новости (с субтитрами)",
        },
        {
          id: 2,
          hour: "14:00",
          program: "Давай поженимся",
        },
        {
          id: 3,
          hour: "15:00",
          program: "Другие новости",
        },
      ],
    },
    {
      id: 2,
      title: "2x2",
      img: "../images/2x2.png",
      schedule: [
        {
          id: 1,
          hour: "13:00",
          program: "МУЛЬТ ТВ. Сезон 4, 7 серия",
        },
        {
          id: 2,
          hour: "14:00",
          program: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия",
        },
        {
          id: 3,
          hour: "15:00",
          program: "БУРДАШЕВ. Сезон 1, 20 серия",
        },
      ],
    },
    {
      id: 3,
      title: "РБК",
      img: "../images/rbc.png",
      schedule: [
        {
          id: 1,
          hour: "13:00",
          program: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС",
        },
        {
          id: 2,
          hour: "14:00",
          program: "ДЕНЬ. Главные темы",
        },
        {
          id: 3,
          hour: "15:00",
          program: "Главные новости",
        },
      ],
    },
    {
      id: 4,
      title: "AMEDIA PREMIUM",
      img: "../images/amedia.png",
      schedule: [
        {
          id: 1,
          hour: "13:00",
          program: "Клиент всегда мёртв",
        },
        {
          id: 2,
          hour: "14:00",
          program: "Голодные игры: Сойка-пересмешница. Часть I",
        },
        {
          id: 3,
          hour: "15:00",
          program: "Секс в большом городе",
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
