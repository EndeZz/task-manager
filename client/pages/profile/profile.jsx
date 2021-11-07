import './profile.pug';
import './profile.scss';
import '../../styles/common.scss';


import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import UploadAvatar from '../../components/uploadAvatar/uploadAvatar';
import backImg from '../../../public/img/back--icon.svg'
import userLogoImg from '../../../public/img/person/user-logo.svg'
import uploadImg from '../../../public/img/upload--icon.svg'
import { fioInput } from '../user/user';
import { emailInput } from '../user/user';
import { saveBtn } from '../user/user';
import { deleteProfileBtn } from '../user/user';

import logoIcon from '../../../public/img/logo.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'

const ListOfTasksBtn = [
    {
      classBtn: "publish-btn",
      classReset: "btn-reset",
      bgBtn: "blue",
      text: "Профиль",
      img: `${backImg}`
    }
]


const uploadAvatar = [
    {
      className: "new-user",
      logo: `${userLogoImg}`,
      upload: `${uploadImg}`,
      title: "Загрузить аватар"
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


class Prof extends Component {
    render() {
      return pug`
        div
            Header head=${headerData} nav=${nav}
            .main 
                .container 
                    .profile.new-user
                        .profile__content.new-user__content
                            .new-user__back
                                Button btn=${ListOfTasksBtn}
                            .profile__border 
                                UploadAvatar load=${uploadAvatar}
                                .new-user__data-profile
                                    Input inp=${fioInput}
                                    Input inp=${emailInput}
                                    div(class="new-user__buttons")
                                        div(class="new-user__data-save")
                                            Button btn=${saveBtn}
                                        div(class="new-user__delete-profile")
                                            Button btn=${deleteProfileBtn}
                                   
      `
    }
  }

export default Prof;