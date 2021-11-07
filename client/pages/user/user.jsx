import './user.pug';
import './user.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';
import '../../components/header/header';
import '../../components/input/input.scss';
import '../../components/select/select.scss';
import '../../components/button/button.scss'
import '../../components/cardsTask/cardsTask.scss'
import '../../components/select/select.jsx';


import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Select from '../../components/select/select.jsx';
import UploadAvatar from '../../components/uploadAvatar/uploadAvatar';

import backIcon from '../../../public/img/back.svg'
import approveIcon from '../../../public/img/approve--icon.svg'
import show from '../../../public/img/show--icon.svg'

import backImg from '../../../public/img/back--icon.svg'
import userLogoImg from '../../../public/img/person/user-logo.svg'
import uploadImg from '../../../public/img/upload--icon.svg'
import errorImg from '../../../public/img/error--icon.svg'
import deleteImg from '../../../public/img/delete.svg'
import arrowDownImg from '../../../public/img/arrow-down.svg'


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


const ListOfTasksBtn = [
    {
      classBtn: "publish-btn",
      classReset: "btn-reset",
      bgBtn: "blue",
      text: "Пользователи",
      img: `${backImg}`
    }
]

export const saveBtn = [
  {
    classBtn: "save-btn",
    classReset: "btn-reset",
    bgBtn: "blue",
    text: "Сохранить",
    img: `${approveIcon}`
  }
]

export const deleteProfileBtn = [
  {
    classBtn: "delete-profile_btn",
    classReset: "btn-reset",
    bgBtn: "blue",
    text: "Удалить профиль",
    img: `${deleteImg}`
  }
]

export const fioInput = [
    {
      classInput: "user-fio", 
      label: "Имя, фамилия", 
      placeholder: "Введите имя и фамилию",
      img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    }
]

export const emailInput = [
    {
        classInput: "user-email", 
        label: "E-mail", 
        placeholder: "Введите email",
        img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    }
]


const roleInput = [
  {
      classInput: "role-block", 
      label: "Роль", 
      placeholder: "Выберите роль",
      img: `${arrowDownImg}`
  }
]


const roleUser = [
  {className: "role-block" ,listItem: "Контент-мейкер", color: "black"},
  {className: "role-block" ,listItem: "Менеджер", color: "black"},
  {className: "role-block" ,listItem: "Администратор", color: "black"},
]


export const passwordInput = [
  {
    classInput: "password-block", 
    label: "Пароль", 
    placeholder: "Введите пароль",
    img: `${show}`
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

class User extends Component {
    render() {
      return pug`
        div
            Header head=${headerData} nav=${nav}
            .main 
                .container
                    .new-user 
                        .new-user__content
                            .new-user__back
                                Button btn=${ListOfTasksBtn}
                            .new-user__border-info
                                UploadAvatar load=${uploadAvatar}
                                .new-user__data-profile
                                    Input inp=${fioInput}
                                    Input inp=${emailInput}
                                    div(class=${roleInput[0].classInput})
                                      Input inp=${roleInput}
                                      ul(class=${roleInput[0].classInput + "__users"})
                                        Select sel=${roleUser}
                                    Input inp=${passwordInput}
                                    div(class="new-user__fill-field")
                                      div(class="new-user__fill-circle")
                                        img(class="new-user__fill-img" src=${errorImg})
                                      span(class="new-user__fill-title") Заполните отмеченные поля
                                    div(class="new-user__buttons")
                                      div(class="new-user__data-save")
                                        Button btn=${saveBtn}
                                      div(class="new-user__delete-profile")
                                        Button btn=${deleteProfileBtn}
                                           
      `
    }
  }

export default User;

// Берем картинки из папки проекта img
// const uploadAvatar = document.querySelector('.new-user__custom-upload');


// let setAtt = ''
// let resultTxt = ''

// if (uploadAvatar) {

//   uploadAvatar.addEventListener('change', function () {
//         if (this.files[0]) {
//             let fr = new FileReader();
//             let val = this.files[0].name;
//             fr.addEventListener('load', function () {
//             let arrStr = val.split('')
//             for (let i = 0; i < arrStr.length; i++) {
//                 if (arrStr[i] === '.') {
//                 arrStr.splice(i, 0, '.')
//                 break;
//                 }
//             }
//             resultTxt = arrStr.join('')
//             setAtt = './img/' + resultTxt

//             document.querySelector('.new-user__photo-img').setAttribute('src', './img/' + resultTxt);

//             let csv = fr.result
//             console.log('csv', csv)
//             localStorage.setItem('resent-image', String(csv))
//             }, false);
//             fr.readAsDataURL(this.files[0]);
//         }
//     });

// }

// // const fioPerson : string = localStorage.getItem('fioPerson')
// // console.log('fioPerson', fioPerson);
// // (<HTMLInputElement>document.querySelector('.new-user__fio-input')).value = fioPerson;




// const FioInput = document.querySelector('.new-user__fio-input');
// const EmailInput = document.querySelector('.new-user__email-input');
// const PasswInput = document.querySelector('.new-user_password__input');
// const RoleInput = document.querySelector('.new-user__role-input')
// const SaveBtn = document.querySelector('.save-btn');

// let fio = '';
// let email = '';
// let pass = '';
// let role = ''

// if (SaveBtn) {
//   SaveBtn.addEventListener('click', () => {

//     if (FioInput.value.length > 0) {
//       fio = FioInput.value.trim();
//     } else {
//       FioInput.style.border = '1px solid red';
//       //   document.querySelector('.new-user__fill-title').classList.add('typeHide');
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;')
//     }
//     if (EmailInput.value.length > 0) {
//       email = EmailInput.value.trim();
//     } else {
//       EmailInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;')
//     }
//     if (RoleInput.value.length > 0) {
//         role = RoleInput.value.trim();
//       } else {
//         RoleInput.style.border = '1px solid red';
//         document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;')
//       }
//     if (PasswInput.value.length > 0) {
//       pass = PasswInput.value.trim();
//     } else {
//       PasswInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').classList.add('typeHide');
//     }
//     if (fio.length === 0) {
//       FioInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;');
//     } else {
//       FioInput.style.border = '1px solid #D8E3EC';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 0');
//         console.log('fioInput', FioInput.value)
        
//     }
//     if (email.length === 0) { 
//       EmailInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;');
//     } else {
//       EmailInput.style.border = '1px solid #D8E3EC';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 0');
//     }
//     if (role.length === 0) { 
//         RoleInput.style.border = '1px solid red';
//         document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;');
//       } else {
//         RoleInput.style.border = '1px solid #D8E3EC';
//         document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 0');
//       }
//     if (pass.length === 0) {
//       PasswInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;');
//     } else {
//       PasswInput.style.border = '1px solid #D8E3EC';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 0');
//     }



//     localStorage.setItem('fioUser', fio)
//     localStorage.setItem('emailUser', email)
//     localStorage.setItem('roleUser', role)
//     localStorage.setItem('password', pass)
   
//   });
  
// }


// function InsertImgEdit () {
//   document.querySelector('.new-user__photo-img').setAttribute('src', localStorage.getItem('newUserPhoto'));
//   // (<HTMLInputElement>document.querySelector('.new-user__fio-input')).value = localStorage.getItem('newUserFio');
//   // (<HTMLInputElement>document.querySelector('.new-user__email-input')).value = localStorage.getItem('newUserEmail');
//   // (<HTMLInputElement>document.querySelector('.new-user__role-input')).value = localStorage.getItem('newUserRole');
//   document.querySelector('.new-user__fio-input').setAttribute('value', localStorage.getItem('newUserFio'));
//   document.querySelector('.new-user__email-input').setAttribute('value', localStorage.getItem('newUserEmail'));
//   document.querySelector('.new-user__role-input').setAttribute('value', localStorage.getItem('newUserRole'));
// }
// InsertImgEdit()








