/* eslint-disable react/prop-types */
import './task.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';



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

import Header from '../../components/header/header';

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

const Task = ( { match } ) => {
        return (
            <div>
                {/* <Header head={headerData} nav={nav} /> */}
                <div>ddd {match.params.name}</div>  
            </div>
        )
}


export default Task