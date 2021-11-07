import './404.pug';
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


class Fault extends Component {
    render() {
      return pug`
        div
          Header head=${headerData} nav=${nav}
          .main 
            .container 
                .error 
                    .error__descr
                        figure(class="error__card")
                            img(class="error__img" src=${errorImg})
                        h3(class="error__title") Потерялись
                        p(class="error__text") Страница, которую вы ищите не существует, либо была удалена
                        div(class="error__btn")
                            Button btn=${noticesBtn}


                                           
      `
    }
  }

export default Fault;