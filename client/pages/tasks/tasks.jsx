import './tasks.pug';
import './tasks.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';


import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from '../../components/header/header';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Button from '../../components/button/button';
import Cards from '../../components/cards/cards';
import CardTask from '../../components/cardsTask/cardsTask';

import searchImg from '../../../public/img/search.svg'
import videoIcon from '../../../public/img/blue--icon.svg'
import photoIcon from '../../../public/img/green--icon.svg'
import audioIcon from '../../../public/img/yellow--icon.svg'
import arrowDown from '../../../public/img/arrow-down.svg'
import calendar from '../../../public/img/calendar.svg'

const searchInput = [
  {
    classInput: "search-block", 
    label: "Поиск", 
    placeholder: "Введите название имя исполнителя",
    img:  `${searchImg}`
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

const NameStatusInput = [
  {
    classInput: "status-block", 
    label: "Статус", 
    placeholder: "Выберите статус",
    img:  `${arrowDown}`
  }
]

const ListStatus = [
  {className: "status-block" ,listItem: "Любой", color: "black"},
  {className: "status-block" ,listItem: "В работе", color: "purple"},
  {className: "status-block" ,listItem: "Ожидает согласования", color: "blue"},
  {className: "status-block" ,listItem: "Выполнено", color: "green"}
]

const Deadline = [
  {
    classInput: "deadline-block", 
    label: "Срок выполнения", 
    placeholder: "Укажите дату",
    img:  `${calendar}`
  }
]

import logoIcon from '../../../public/img/logo.svg'
import blueIncon from '../../../public/img/blue--icon.svg' 
import yellowIcon from '../../../public/img/yellow--icon.svg'
import greenIcon from '../../../public/img/green--icon.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'

import EditImg from '../../../public/img/edit--icon.svg'
import DelImg from '../../../public/img/delete--icon.svg'

const items = [
    {className: "user-card" ,icon: `${blueIncon}`, color: "blue", title: "Видео", status: "inwork", statusColor: "purple", statusName: "В работе", text: "Название повседневная практика показывает", author: "Аркадий Юрченко", calendar: "calendar.svg", data: "10.02.2020", type: "video", classEditBtn: "edit-btn", classDelBtn: "delete-btn", classReset: "btn-reset", bgEditBtn: "blue", bgDelBtn: "blue", imgEdit: `${EditImg}`, imgDel: `${DelImg}`},
    {className: "user-card" ,icon: `${greenIcon}`, color: "green", title: "Фото", status: "done", statusColor: "green", statusName: "Выполнено", text: "Название равным образом начало повседневной работы", author: "Эльза Калининa", data: "09.02.2020", type: "photo", classEditBtn: "edit-btn", classDelBtn: "delete-btn", classReset: "btn-reset", bgEditBtn: "blue", bgDelBtn: "blue", imgEdit: `${EditImg}`, imgDel: `${DelImg}`},
    {className: "user-card" ,icon: `${yellowIcon}`, color: "yellow", title: "Аудио", status: "wait", statusColor: "blue", statusName: "Ожидает согласования", text: "Название с другой стороны начало повседневной работы по формиро", author: "Дмитрий Румянцев", data: "08.02.2020",  type: "audio", classEditBtn: "edit-btn", classDelBtn: "delete-btn", classReset: "btn-reset", bgEditBtn: "blue", bgDelBtn: "blue", imgEdit: `${EditImg}`, imgDel: `${DelImg}`},
    {className: "user-card" ,icon: `${greenIcon}`, color: "green", title: "Фото", status: "wait", statusColor: "blue", statusName: "Ожидает согласования", text: "Название равным образом начало повседневной работы", author: "Гена Черемнов", data: "06.02.2020", type: "photo", classEditBtn: "edit-btn", classEditBtn: "edit-btn", classDelBtn: "delete-btn", classReset: "btn-reset", bgEditBtn: "blue", bgDelBtn: "blue", imgEdit: `${EditImg}`, imgDel: `${DelImg}`},
    {className: "user-card" ,icon: `${blueIncon}`, color: "blue", title: "Видео", status: "done", statusColor: "green", statusName: "Выполнено", text: "Название повседневная практика показывает", author: "Инесса Соловьёвa", data: "01.02.2020", type: "video", classEditBtn: "edit-btn", claddDelBtn: "delete-btn", classEditBtn: "edit-btn", classDelBtn: "delete-btn", classReset: "btn-reset", bgEditBtn: "blue", bgDelBtn: "blue", imgEdit: `${EditImg}`, imgDel: `${DelImg}`},
]


const nav = [
  {className: "header", active : "active", "text" : "Главная", href: "/index"},
  {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
  {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
]

const headerData = [
  {className: "header-block", classNotif: "header__notif-count", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "4", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
]

class Tasks extends Component {
    render() {
      return pug`
        div
          Header head=${headerData} nav=${nav}
          .main
              .info 
                  .container
                      .search 
                        Input items=${searchInput}
                        div(class=${NameStatusInput[0].classInput})
                          Input items=${NameStatusInput}
                          ul(class=${ListStatus[0].className + "__users"})
                            Select list=${ListStatus}
                        Input items=${Deadline}
                        .info__content 
                          label(class="info__search-title") Тип контента
                          .info__content-block
                            Button btn=${videoBtn}
                            Button btn=${photoBtn}
                            Button btn=${audioBtn}
                      ul(class="card-task")
                        CardTask items=${items}




      `
    }
  }

export default Tasks;

