import './index.pug';
import './index.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';

import '../../components/modals/modals.jsx';

import { BtnAudioCard } from '../../components/button/button';
import { BtnPhotoCard } from '../../components/button/button';
import { BtnVideoCard } from '../../components/button/button';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../../components/navigation/navigation';
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Cards from '../../components/cards/cards';
import VideoModal from '../../components/videoModal/videoModal';
import PhotoModal from '../../components/photoModal/photoModal';
import AudioModal from '../../components/audioModal/audioModal';

import logoIcon from '../../../public/img/logo.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'
import searchImg from '../../../public/img/search.svg'
import calendarImg from '../../../public/img/calendar.svg'
import videoIcon from '../../../public/img/blue--icon.svg'
import photoIcon from '../../../public/img/green--icon.svg'
import audioIcon from '../../../public/img/yellow--icon.svg'


import CardImg1 from '../../../public/img/cards/1.jpg';
import CardImg2 from '../../../public/img/cards/2.jpg';
import CardImg3 from '../../../public/img/cards/3.jpg';
import CardImg4 from '../../../public/img/cards/4.jpg';
import CardImg5 from '../../../public/img/cards/5.jpg';
import CardImg6 from '../../../public/img/cards/6.jpg';

import blueIcon1 from '../../../public/img/blue--icon.svg'
import greenIcon2 from '../../../public/img/green--icon.svg'
import yellowIcon3 from '../../../public/img/yellow--icon.svg'
import videoImg from '../../../public/img/video/arrow-left.svg'
import videoPage from '../../../public/video/video.mp4'
import playIcon from '../../../public/img/video/play-icon.svg'
import volumeIcon from '../../../public/img/video/volume-icon.svg'
import fullscreenIcon from '../../../public/img/video/fullscreen-icon.svg'
import arrowLeft from '../../../public/img/video/arrow-left.svg'
import photoImg from '../../../public/img/cards/2.jpg'
import Tasks from '../tasks/tasks';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";


export const searchInput = [
  {
    classInput: "search-block", 
    label: "Поиск", 
    placeholder: "Введите название имя исполнителя",
    img:  `${searchImg}`
  }
]
const calendarInput = [
  {
    classInput: "search-block", 
    label: "Дата публикации", 
    placeholder: "Укажите дату публикации",
    img: `${calendarImg}`
  }
]


const videoBtn = [
  {
    classBtn: "btn-video",
    classReset: "btn-reset",
    bgBtn: "blue",
    text: "Видео",
    img: `${videoIcon}`
  }
]
const photoBtn = [
  {
    classBtn: "btn-photo",
    classReset: "btn-reset",
    bgBtn: "green",
    text: "Фото",
    img: `${photoIcon}`
  }
]
const audioBtn = [
  {
    classBtn: "btn-audio",
    classReset: "btn-reset",
    bgBtn: "yellow",
    text: "Аудио",
    img: `${audioIcon}`
  }
]



const cards = [
  {classCard: "card", img: `${CardImg1}`, icon: `${blueIcon1}`, color: "blue", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "Аркадий Юрченко", public: "03:21 17.08.2021", duration: "8:31", type: "video", typeName: "Видео"},
  {classCard: "card", img: `${CardImg2}`, icon: `${greenIcon2}`, color: "green", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "Оскар Калинин", public: "09:21 14.02.2020", duration: "", type: "photo", typeText: "Фото", typeName: "Фото"},
  {classCard: "card", img: `${CardImg3}`, icon: `${yellowIcon3}`, color: "yellow", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "Валерий Яковлев", public: "21:21 17.02.2021", duration: "2:31", duration: "2:31", type: "audio", typeName: "Аудио"},
  {classCard: "card", img: `${CardImg4}`, icon: `${greenIcon2}`, color: "green", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "София Лебедевa", public: "05:21 11.02.2021", duration: "", type: "photo", typeText: "Фото", typeName: "Фото"},
  {classCard: "card", img: `${CardImg5}`, icon: `${blueIcon1}`, color: "blue", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "Альбина Ткаченко", public: "09:21 03.07.2021", duration: "2:31", type: "video", typeName: "Видео"},
  {classCard: "card", img: `${CardImg6}`, icon: `${greenIcon2}`, color: "green", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "Данил Плотников", public: "09:21 04.01.2021", duration: "", type: "photo", typeText: "Фото", typeName: "Фото"},
  {classCard: "card", img: `${CardImg2}`, icon: `${yellowIcon3}`, color: "yellow", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "Валерий Яковлев", public: "09:21 28.11.2021", duration: "2:31", type: "audio", typeName: "Аудио"},
  {classCard: "card", img: `${CardImg1}`, icon: `${greenIcon2}`, color: "green", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "Оскар Калинин", public: "09:21 14.02.2020", duration: "", type: "photo", typeText: "Фото", typeName: "Фото"},
  {classCard: "card", img: `${CardImg5}`, icon: `${blueIcon1}`, color: "blue", altText: "Видео - скалистый берег", text: "Название повседневная практика показывает", author: "Аркадий Юрченко", public: "06:21 14.02.2020", duration: "2:31", type: "video", typeName: "Видео"}
]


const videoModal = [
  {classModal: "player-block", classDop: "controls", nameModal: "Видео", img: `${videoImg}`, video: `${videoPage}`, playIcon: `${playIcon}`, volumeIcon: `${volumeIcon}`, fullscreenIcon: `${fullscreenIcon}`}
  // {classModal: "audio-block", classDop: "", nameModal: "Аудио"}
]


const photoModal = [
  {classModal: "photo-block", classDop: "", nameModal: "Фото", img: `${photoImg}`, arrowLeft: `${arrowLeft}`},
  // {classModal: "audio-block", classDop: "", nameModal: "Аудио"}
]

// import audioMusic from '../../../public/audio/audio.mp3'
const audioMusic = require('../../../public/audio/audio.mp3')

const audioModal = [
  {classModal: "audio-block", classDop: "", nameModal: "Аудио", img: `${photoImg}`, arrowLeft: `${arrowLeft}`, playIcon: `${playIcon}`, audioMusic: `${audioMusic}`, volumeIcon: `${volumeIcon}`},
  // {classModal: "audio-block", classDop: "", nameModal: "Аудио"}
]

const nav = [
  {className: "header", active : "active", "text" : "Главная", href: "/index"},
  {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
  {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
]

const headerData = [
  {className: "header-block", classNotif: "header__notif-count", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "4", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
]


const Index = ( {isLoggedIn, setIsLoggedIn} ) => {
    return pug`
      div
        Header head=${headerData} nav=${nav} isLogged=${isLoggedIn} setLogged=${setIsLoggedIn}
        .main 
          .info
            .container 
              .search
                Input items=${searchInput}
                Input items=${calendarInput}
                .info__content 
                  label(className="info__search-title") Тип контента
                  .info__content-block
                    Button btn=${videoBtn}
                    Button btn=${photoBtn}
                    Button btn=${audioBtn}
              .card
                ul(className="card__row")
                  Cards cards=${cards}
              .loader
              VideoModal modals=${videoModal}
              PhotoModal modals=${photoModal}

    `
}

export default Index;

// class Index extends Component {
//     render() {
//       return pug`
//         div
//           Header head=${headerData} nav=${nav}
//           .main 
//             .info
//               .container 
//                 .search
//                   Input items=${searchInput}
//                   Input items=${calendarInput}
//                   .info__content 
//                     label(className="info__search-title") Тип контента
//                     .info__content-block
//                       Button btn=${videoBtn}
//                       Button btn=${photoBtn}
//                       Button btn=${audioBtn}
//                 .card
//                   ul(className="card__row")
//                     Cards cards=${cards}
//                 .loader
//                 VideoModal modals=${videoModal}
//                 PhotoModal modals=${photoModal}

//       `
//     }
//   }

// export default Index;

// ReactDOM.render(React.createElement(Index), document.getElementById("root"));

// BtnAudioCard();
// BtnPhotoCard()
// BtnVideoCard()

// const searchFilter = document.querySelector('.search-filter');
// if (searchFilter) {
//       searchFilter.oninput = function () {
//         let str = searchFilter.value.trim().toLowerCase();
//         let names = document.querySelectorAll<HTMLElement>('.card__column-author');
//         if (str !== '') {
//             names.forEach(name => {
//                 let i = String(name.textContent).replace(/ +/g, '');
//                 i = i.toLowerCase()
//                 if (i.search(str) === -1) {
//                     name.closest('.card__column').classList.add('hide');
//                 } else {
//                     name.closest('.card__column').classList.remove('hide');
//                 }
//             })
//         } else {
//             names.forEach(elem => {
//                 elem.closest('.card__column').classList.remove('hide');
//               });
//         }
//     }
// }




// const calendarFilter = document.querySelector('.calendar-filter');
// if (calendarFilter) {
//       calendarFilter.oninput = function () {
//         let str = calendarFilter.value.trim().toLowerCase();
//         let names = document.querySelectorAll<HTMLElement>('.card__column-public_data');
//         if (str !== '') {
//             names.forEach(elem => {
//               let i = String(elem.textContent).replace(/ +/g, '');
//               i = String(i.replace(/[:*?$^(.)]/g, ''));
//               if (i.toLowerCase().search(str) === -1) {
//                 elem.closest('.card__column').classList.add('hide');
//               } else {
//                 elem.closest('.card__column').classList.remove('hide');
//               }
//             });
//         } else {
//           names.forEach(elem => {
//             elem.closest('.card__column').classList.remove('hide');
//         });
//       }
//   }
// }







