import './task.pug';
import './task.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';
import '../../components/header/header';
import '../../components/input/input.scss';
import '../../components/select/select.scss';
import '../../components/button/button.scss'
import '../../components/cardsTask/cardsTask.scss'

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

import backImg from '../../../public/img/back--icon.svg'
import approveImg from '../../../public/img/approve--icon.svg'
import editImg from '../../../public/img/edit--icon.svg'
import deleteImg from '../../../public/img/delete--icon.svg'
import blueIcon from '../../../public/img/blue--icon.svg'
import fileExtIcon from '../../../public/img/file-ext--icon.svg'
import fileSaveImg from '../../../public/img/file-save--icon.svg'
import fileSave from '../../../public/img/plus-gray--icon.svg'
import typeIcon from '../../../public/img/type-1.svg'
import plusGrayIcon from '../../../public/img/plus-gray--icon.svg'
import card1 from '../../../public/img/cards/1.jpg'



import logoIcon from '../../../public/img/logo.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'

export const ListOfTasksBtn = [
    {
      classBtn: "list-task",
      classReset: "btn-reset",
      bgBtn: "blue",
      text: "К списку задач",
      img: `${backImg}`
    }
]

const approveBtn = [
    {
        classBtn: "approve-btn",
        classReset: "btn-reset",
        bgBtn: "blue",
        text: "Утвердить и опубликовать",
        img: `${approveImg}`
    }
]

const editBtn = [
    {
        classBtn: "edit-btn",
        classReset: "btn-reset",
        bgBtn: "blue",
        text: "",
        img: `${editImg}`
    }
]

const deleteBtn = [
    {
        classBtn: "delete-btn",
        classReset: "btn-reset",
        bgBtn: "blue",
        text: "",
        img: `${deleteImg}`
    }
]

const descrBtn = [
    {
        classBtn: "descr-btn",
        classReset: "btn-reset",
        bgBtn: "blue",
        text: "Скачать",
        img: `${fileSaveImg}`
    }
]

const descrSendBtn = [
    {
        classBtn: "descr__btn-send",
        classReset: "btn-reset",
        bgBtn: "blue",
        text: "Отправить",
        img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    }
]



const nav = [
    {className: "header", active : "active", "text" : "Главная", href: "/index"},
    {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
    {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
  ]
  
  const headerData = [
    {className: "header-block", classNotif: "header__notif-count", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "4", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
  ]

class Task extends Component {
    render() {
        const format = [
            {nameIcon: `${typeIcon}`},
            {nameIcon: `${typeIcon}`},
            {nameIcon: `${typeIcon}`},
        ]
        function type() {
            return pug`${format.map(item => pug`
                    li(class="content-upload__list")
                        img(class="content-upload__type" src=${item.nameIcon})
                `)}`
        }
        const uploadContent = [
            {classContent: "icon--plus" ,uploadType: `${plusGrayIcon}`},
            {classContent: "content-upload__card" ,uploadType: `${card1}`}
        ]
        function card() {
            return pug`${uploadContent.map(item => pug`
                li(class="content-upload__column")
                    div(class="content-upload__border-dashed")
                        img(class=${item.classContent} src=${item.uploadType})
            `)}`
        }
        const taskContent = [
            {className: "descr__right-task_create", text: "Задача создана"},
            {className: "descr__right-task_data", text: "05.02.2020"},
            {className: "descr__right-task_deadline", text: "Срок выполнения"},
            {className: "descr__right-task_data", text: "05.02.2020"},
            {className: "descr__right-task_tweet", text: "Опубликовал"},
            {className: "descr__right-task_author", text: "Семён Щеглов"},
            {className: "descr__right-task_respons", text: "Ответственный"},
            {className: "descr__right-task_author", text: "Станислав Щукин"}

        ]
        function descrTask() {
            return pug`${taskContent.map(item => pug`
                span(class=${item.className}) ${item.text}
                span(class=${item.className}) ${item.text}
                span(class=${item.className}) ${item.text}
                span(class=${item.className}) ${item.text}
                span(class=${item.className}) ${item.text}
                span(class=${item.className}) ${item.text}
                span(class=${item.className}) ${item.text}
                span(class=${item.className}) ${item.text}
        `)}`
        }
      return pug`
        div
          Header head=${headerData} nav=${nav}
          .main 
            .container
                .descr 
                    .descr__content 
                        .descr__buttons
                            Button btn=${ListOfTasksBtn}
                            .descr__resize-task
                                div(class="descr__approve")
                                    Button btn=${approveBtn}
                                div(class="descr__edit-btn")
                                    Button btn=${editBtn}
                                Button btn=${deleteBtn}
                                
                        .descr__wrapper
                            div(class="descr__left-border left-content_border")
                                div(class="descr__left-content")
                                    img(class="descr__left-arrow" src=${blueIcon})
                                    span(class="descr__left-name user-card__title--blue") Видео
                                    span(class="descr__left-status user-card__process--pink") В работе
                                    h3(class="descr__left-title") Заголовок задачи с другой стороны консультация с широким активом позволяет
                                    p(class="descr__left-text").
                                                            Не следует, однако забывать, что постоянный количественный рост 
                                                            и сфера нашей активности позволяет оценить значение форм развития. 
                                                            Значимость этих проблем настолько очевидна, 
                                                            что новая модель организационной деятельности требуют от нас анализа системы обучения кадров, 
                                                            соответствует насущным потребностям. Товарищи! постоянный количественный рост и 
                                                            сфера нашей активности требуют определения и уточнения позиций, 
                                                            занимаемых участниками в отношении поставленных задач. 
                                                            Повседневная практика показывает, что постоянный количественный рост и 
                                                            сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, 
                                                            соответствует насущным потребностям.
                                    span(class="descr__left-files") Файлы
                                    div(class="descr__left-wrap")
                                        div(class="descr__left-file")
                                            img(class="descr__left-file_img" src=${fileExtIcon}, alt="")
                                            span(class="descr__left-file_name") Техническое задание.doc
                                            span(class="descr__left-file_size") 61 Мб
                                        div(class="descr__left-save_file")
                                            Button btn=${descrBtn}
                            div(class="descr__right-border right-content_border")
                                div(class="descr__right-content")
                                    ${descrTask()}
                        div(class="descr__bottom content-upload")
                            div(class="content-upload__body")
                                div(class="content-upload__descr")
                                    h3(class="content-upload__result") Результат
                                    span(class="content-upload__format") Допустимые форматы:
                                    ul(class="content-upload__types")
                                        ${type()}
                                ul(class="content-upload__row")
                                    ${card()}
                                div(class="descr__bottom-text")
                                    textarea(class="descr__bottom-input" type="text" placeholder="Введите сообщение...")
                                    Button btn=${descrSendBtn}

      `
    }
  }

export default Task;

