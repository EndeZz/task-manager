import './task-new.pug';
import './task-new.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';


import React, {Component} from 'react';



import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Select from '../../components/select/select';



import plusGrayIcon from '../../../public/img/plus-gray--icon.svg'
import backIcon from '../../../public/img/back.svg'
import approveIcon from '../../../public/img/approve--icon.svg'


import calendarImg from '../../../public/img/calendar.svg'

import fileExtImg from '../../../public/img/file-ext--icon.svg'
import arrowDownImg from '../../../public/img/arrow-down.svg'
import approveImg from '../../../public/img/approve--icon.svg'

import starpleImg from '../../../public/img/starple--icon.svg'
import errorImg from '../../../public/img/error--icon.svg'
import deleteFileImg from '../../../public/img/delete.svg'
import { ListOfTasksBtn } from '../task/task';


import logoIcon from '../../../public/img/logo.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'

const nav = [
    {className: "header", active : "active", "text" : "Главная", href: "/index"},
    {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
    {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
  ]
  
  const headerData = [
    {className: "header-block", classNotif: "header__notif-count", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "4", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
]

const deleteFilteBtn = [
    {
        classBtn: "delete-file",
        classReset: "btn-reset",
        bgBtn: "blue",
        text: "Удалить",
        img: `${deleteFileImg}`
    }
]
const createTaskBtn = [
    {
        classBtn: "create-task",
        classReset: "btn-reset",
        bgBtn: "blue",
        text: "Создать задачу",
        img: `${approveImg}`
    }
]

// const newTaskType = [
//     {nameContent: "Фото"},
//     {nameContent: "Видео"},
//     {nameContent: "Аудио"},

// ]

// function content() {
//     return pug`${newTaskType.map(item => pug`
//         li(class="new-task__type-list") ${item.nameContent}
//     `)}`
// }

const ListType = [
    {className: "choose-type" ,listItem: "Видео", color: "black"},
    {className: "choose-type" ,listItem: "Фото", color: "green"},
    {className: "choose-type" ,listItem: "Аудио", color: "yellow"},
  ]

const chooseTypeContent = [
    {
        classInput: "choose-type", 
        label: "Тип контента", 
        placeholder: "Выберите тип контента",
        img: `${arrowDownImg}`
    }
]

const newTaskTitleInput = [
    {
      classInput: "new-task__title-content", 
      label: "Заголовок", 
      placeholder: "Введите заголовок задачи",
      img: `${arrowDownImg}`
    }
]

const insertFiles = [
    {className: "new-task", nameImg: `${fileExtImg}`, nameTitle: "Материалы.zip", nameSize: "61 Мб"},
    {className: "new-task", nameImg: `${fileExtImg}`, nameTitle: "Инструкция.doc", nameSize: "561 Мб"},
    {className: "new-task", nameImg: `${fileExtImg}`, nameTitle: "Резерф.exe", nameSize: "42Мб"}
]

function insertFileList() {
    return pug`${insertFiles.map(item => pug`
        li(class=${item.className + "__insert-file"})
            img(class=${item.className + "__insert-img"} src=${item.nameImg})
            span(class=${item.className + "__insert-name"}) ${item.nameTitle}
            span(class=${item.className + "__insert-size"}) ${item.nameSize}
            div(class=${item.className + "__insert-btn"})
                Button btn=${deleteFilteBtn}
    `)}`
}

const initiatorInput = [
    {
        classInput: "initiator-task", 
        label: "Инициатор", 
        placeholder: "Выберите инициатора",
        img: `${arrowDownImg}`
    }
]

const taskUser = [
    {className: "initiator-task" ,listItem: "Контент-мейкер", color: "black"},
    {className: "initiator-task" ,listItem: "Менеджер", color: "black"},
    {className: "initiator-task" ,listItem: "Администратор", color: "black"},
]

// function expertUser() {
//     return pug`${taskUser.map(item => pug`
//         li(class=${item.className + "__user"}) ${item.person}
//     `)}`
// }

const responsUser = [
    {className: "respons-block" ,listItem: "София Мельник", color: "black"},
    {className: "respons-block" ,listItem: "Альбина Ткаченко", color: "black"},
    {className: "respons-block" ,listItem: "София Мельник", color: "black"},
    {className: "respons-block" ,listItem: "Альбина Ткаченко", color: "black"},
    {className: "respons-block" ,listItem: "Альбина Ткаченко", color: "black"},
    {className: "respons-block" ,listItem: "София Мельник", color: "black"},
    {className: "respons-block" ,listItem: "София Мельник", color: "black"},

]

// function Users() {
//     return pug`${responsUser.map(item => pug`
//         li(class=${item.className + "__user"}) ${item.nameUser}
//     `)}`
// }

const calendarInput = [
    {
        classInput: "calendar-deadline", 
        label: "Срок выполнения", 
        placeholder: "Укажите дату",
        img: `${calendarImg}`
    }
]

const responsInput = [
    {
        classInput: "respons-block", 
        label: "Ответственный", 
        placeholder: "Выберите ответственного",
        img: `${arrowDownImg}`
    }
]



class TaskNew extends Component {
    render() {
      return pug`
        div
            Header head=${headerData} nav=${nav}
            .main 
                .container 
                    .new-task 
                        .descr__buttons
                            Button btn=${ListOfTasksBtn}
                        .descr__wrapper 
                            .descr__left-border 
                                div(class=${chooseTypeContent[0].classInput})
                                    Input inp=${chooseTypeContent}
                                    ul(class=${chooseTypeContent[0].classInput + "__type-contents"})
                                        Select sel=${ListType}
                                span(class="new-task__type-title") Заголовок
                                .new-task__title-content
                                    input(class="new-task__title-input" type="text" placeholder="Введите заголовок задачи")
                                span(class="new-task__type-descr") Описание
                                .new-task__descr-content
                                    textarea(class="new-task__descr-input", name="text", placeholder="Опишите требования") 
                                .new-task__insert-wrap
                                    ul(class="new-task__insert-files")
                                        ${insertFileList()}
                                div(class="new-task__select-file")
                                    label(class="new-task__custom-file")
                                        img(class="new-task__upload" src=${starpleImg})
                                        span(class="new-task__custom-title") Прикрепить файл
                                        input(class="new-task__custom-upload" type="file" name="file")
                            .descr__right-border 
                                .descr__right-content
                                    div(class="new-task__deadline-block")
                                        Input inp=${calendarInput}
                                    div(class=${initiatorInput[0].classInput})
                                        Input inp=${initiatorInput}
                                        ul(class=${initiatorInput[0].classInput + "__users"})
                                            Select sel=${taskUser}
                                    div(class=${responsInput[0].classInput})
                                        Input inp=${responsInput}
                                        ul(class=${responsInput[0].classInput + "__users"})
                                            Select sel=${responsUser}
                        div(class="new-task__fill-circle")
                            img(class="new-task__fill-img" src=${errorImg})
                            span(class="new-task__fill-title") Заполните отмеченные поля
                        div(class="new-task__create-task")
                            Button btn=${createTaskBtn}
      `
    }
  }

export default TaskNew;














