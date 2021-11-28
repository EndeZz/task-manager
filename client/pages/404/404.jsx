import './404.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from '../../components/header/header';
import Button from '../../components/button/button';

import logoIcon from '../../../public/img/logo.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'
import backImg from '../../../public/img/back--icon.svg'
import errorImg from '../../../public/img/404.svg'
import homeImg from '../../../public/img/home--icon.svg'

const noticesBtn = [
  {
    classBtn: "home-page_btn",
    classReset: "btn-reset",
    bgBtn: "blue",
    text: "На главную",
    img: `${homeImg}`
  }
]

const nav = [
  {className: "header", active : "active", "text" : "Главная", href: "/index"},
  {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
  {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
]

const headerData = [
  {className: "header-block", classNotif: "", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
]


const Fault = () => {
      return (
        <>
            <div>
                Потерялись ???
            </div>
        </>
      )


                                    
  }

export default Fault;