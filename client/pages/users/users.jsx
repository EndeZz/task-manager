import './users.pug';
import './users.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';
import '../../components/input/input.scss';
import '../../components/select/select.scss';
import '../../components/button/button.scss'
import '../../components/cardsTask/cardsTask.scss'
// import '../user/user.ts'

// import liCreateUser from '../user/user'



import '../../styles/common.scss';
import '../../styles/fonts.scss';


import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from '../../components/header/header';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Button from '../../components/button/button';
import AddUser from '../../components/addUser/addUser';



import plusImg from '../../../public/img/plus--icon.svg'
import searchImg from '../../../public/img/search.svg'
import { searchInput } from '../index';

import personPhoto1Img from '../../../public/img/person/1.svg'
import personPhoto2Img from '../../../public/img/person/2.svg'
import personPhoto3Img from '../../../public/img/person/3.svg'
import personPhoto4Img from '../../../public/img/person/4.svg'
import personPhoto5Img from '../../../public/img/person/5.svg'

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

const allRoleBtn = [
    {
      classBtn: "all-role_btn",
      classReset: "btn-reset",
      bgBtn: "white",
      text: "Все",
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    }
  ]

const contentMakerBtn = [
    {
        classBtn: "content-maker_btn",
        classReset: "btn-reset",
        bgBtn: "white",
        text: "Контент-майкер",
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    }
]

const managerBtn = [
    {
        classBtn: "manager_btn",
        classReset: "btn-reset",
        bgBtn: "white",
        text: "Менеджер",
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    }
]

const adminBtn = [
    {
        classBtn: "admin_btn",
        classReset: "btn-reset",
        bgBtn: "white",
        text: "Администратор",
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    }
]

const addUserBtn = [
    {
        classBtn: "add-user",
        classReset: "btn-reset",
        bgBtn: "blue",
        text: "Добавить пользователя",
        img: `${plusImg}`
    }
]

const users = [
    {className: "users", classDop: "user-card" ,icon: `${personPhoto1Img}`, name: "Инесса Соловьёвa",  email: "inessa90@gmail.com", role: "Контент-мейкер"},
    {className: "users", classDop: "user-card" ,icon: `${personPhoto2Img}`, name: "Оскар Калинин",  email: "oscar@gmail.com", role: "Менеджер"},
    {className: "users", classDop: "user-card" ,icon: `${personPhoto3Img}`, name: "Адам Галкин",  email: "galkin@gmail.com", role: "Администратор"},
    {className: "users", classDop: "user-card" ,icon: `${personPhoto4Img}`, name: "София Мельник", email: "melnik_s@gmail.com", role: "Менеджер"},
    {className: "users", classDop: "user-card" ,icon: `${personPhoto5Img}`, name: "Инесса Соловьёвa",  email: "inessa90@gmail.com", role: "Контент-мейкер"},
] 

class Users extends Component {
    render() {
      return pug`
        div
            Header head=${headerData} nav=${nav}
            .main 
                .container
                    .users 
                        .users__info
                            .users__search-block
                                Input inp=${searchInput}
                            .users__roles 
                                span(class="users__role-title") Роль 
                                .users__buttons
                                    Button btn=${allRoleBtn}
                                    Button btn=${contentMakerBtn}
                                    Button btn=${managerBtn}
                                    Button btn=${adminBtn}
                        .users__add-person
                            Button btn=${addUserBtn}
                        ul(class="users__person-items")
                            AddUser add=${users}
      `
    }
  }

export default Users;











// const ulUsers = document.querySelector('.users__person-items');
// console.log('ulUsers', ulUsers)
// const liCreateUser = document.createElement('li');
// liCreateUser.className = 'users__person-item user-card';
// // console.log('liCreateUser', liCreateUser);

// const divUser = document.createElement('div');
// divUser.className = 'users__person-insert';

// const WrapperImgUser = document.createElement('div');
// WrapperImgUser.className = 'users__person-picture';

// const ImgEditInsideBtn = document.createElement('img')
// ImgEditInsideBtn.className = 'edit-btn__img'
// ImgEditInsideBtn.setAttribute('src', './img/edit--icon..svg')

// const ImgDeleteInsideBtn = document.createElement('img')
// ImgDeleteInsideBtn.className = 'delete-btn__img'
// ImgDeleteInsideBtn.setAttribute('src', './img/delete--icon..svg')

// const editUser = document.createElement('button');
// editUser.className = 'edit-btn';
// editUser.appendChild(ImgEditInsideBtn);

// const deleteBtn = document.createElement('button');
// deleteBtn.className = 'delete-btn';
// deleteBtn.appendChild(ImgDeleteInsideBtn)
// divUser.appendChild(editUser);
// divUser.appendChild(deleteBtn);




// const createImgUser = document.createElement('img');
// createImgUser.className = 'users__person-img';

// let imageDataUrl = localStorage.getItem('resent-image')
// createImgUser.setAttribute('src', imageDataUrl);



// const createNameUser = document.createElement('span');
// createNameUser.className = 'users__person-name';
// let fio = localStorage.getItem('fioUser')

// createNameUser.innerHTML = fio;

// const createEmailUser = document.createElement('span');
// createEmailUser.className = 'users__person-email';
// let email = localStorage.getItem('emailUser')
// createEmailUser.innerHTML = email;

// const createRoleUser = document.createElement('span');
// createRoleUser.className = 'users__person-role';
// let role = localStorage.getItem('roleUser');
// createRoleUser.innerHTML = role;


// WrapperImgUser.appendChild(createImgUser)
// console.log('wrapperImgUser', WrapperImgUser)

// liCreateUser.appendChild(WrapperImgUser)
// liCreateUser.appendChild(createNameUser);
// liCreateUser.appendChild(createEmailUser);
// liCreateUser.appendChild(createRoleUser);
// liCreateUser.appendChild(divUser)

// console.log('liCreate', liCreateUser)

// ulUsers.appendChild(liCreateUser)





// const deleteUserBtn = document.querySelectorAll('.delete-btn');
// function deleteLiElement () {
//     for(let i = 0; i < deleteUserBtn.length; i++) {
//         deleteUserBtn[i].addEventListener('click', function() {
//             deleteUserBtn[i].closest('.users__person-item').remove()
//         })
//     }
// }
// if (deleteUserBtn) {
//     deleteLiElement()
// }




// const editUserBtn = document.querySelectorAll('.edit-btn');
// function editLiElement () {
//     for(let i = 0; i < deleteUserBtn.length; i++) {
//         editUserBtn[i].addEventListener('click', function() {
//             const liElement = editUserBtn[i].closest('.users__person-item')
//             let img = liElement.querySelector('.users__person-img');
//             let fioEdit = liElement.querySelector('.users__person-name').textContent;
//             let emailEdit = liElement.querySelector('.users__person-email').textContent;
//             let roleEdit = liElement.querySelector('.users__person-role').textContent
//             // let passwordEdit = localStorage.getItem('password');

//             let imgLen = img.src.split('/').length
//             console.log('img', img.src.split('/')[imgLen - 1])

//             // const createImg = document.createElement('img')
//             // createImg.className = 'new-user__photo-img'
//             // createImg.setAttribute('src', './img/' + img.src.split('/')[imgLen - 1]);

//             localStorage.setItem('newUserPhoto', './img/' + img.src.split('/')[imgLen - 1])
//             localStorage.setItem('newUserFio', fioEdit);
//             localStorage.setItem('newUserEmail', emailEdit);
//             localStorage.setItem('newUserRole', roleEdit);
            
//             liElement.innerHTML = '';
//             window.location.href = 'user.html'
//         })
//     }
// } 

// if (editUserBtn) {
//     editLiElement()
// }




// const ulUsers = document.getElementById('ul-list');
// console.log('ulUsers', ulUsers)
// const liCreateUser = document.createElement('li');
// liCreateUser.className = 'users__person-item user-card';
// // console.log('liCreateUser', liCreateUser);

// const divUser = document.createElement('div');
// divUser.className = 'users__person-insert';

// const WrapperImgUser = document.createElement('div');
// WrapperImgUser.className = 'users__person-picture';

// const ImgEditInsideBtn = document.createElement('img')
// ImgEditInsideBtn.className = 'edit-btn__img'
// ImgEditInsideBtn.setAttribute('src', './img/edit--icon..svg')

// const ImgDeleteInsideBtn = document.createElement('img')
// ImgDeleteInsideBtn.className = 'delete-btn__img'
// ImgDeleteInsideBtn.setAttribute('src', './img/delete--icon..svg')

// const editUser = document.createElement('button') as HTMLButtonElement;
// editUser.className = 'edit-btn';
// editUser.appendChild(ImgEditInsideBtn);

// const deleteBtn = document.createElement('button') as HTMLButtonElement;
// deleteBtn.className = 'delete-btn';
// deleteBtn.appendChild(ImgDeleteInsideBtn)
// divUser.appendChild(editUser);
// divUser.appendChild(deleteBtn);




// const createImgUser = document.createElement('img') as HTMLImageElement;
// createImgUser.className = 'users__person-img';

// let imageDataUrl = localStorage.getItem('resent-image')
// createImgUser.setAttribute('src', imageDataUrl);



// const createNameUser = document.createElement('span');
// createNameUser.className = 'users__person-name';
// let fio = sessionStorage.getItem('fioUser')

// createNameUser.innerHTML = fio;

// const createEmailUser = document.createElement('span');
// createEmailUser.className = 'users__person-email';
// let email = sessionStorage.getItem('emailUser')
// createEmailUser.innerHTML = email;

// const createRoleUser = document.createElement('span');
// createRoleUser.className = 'users__person-role';
// let role = sessionStorage.getItem('roleUser');
// createRoleUser.innerHTML = role;

// console.log('role', role)

// console.log('createRoleUser', createRoleUser);

// // localStorage.setItem('passwordUser', pass);

// WrapperImgUser.appendChild(createImgUser)
// console.log('wrapperImgUser', WrapperImgUser)

// liCreateUser.appendChild(WrapperImgUser)
// // liCreateUser.appendChild(createImgUser);
// liCreateUser.appendChild(createNameUser);
// liCreateUser.appendChild(createEmailUser);
// liCreateUser.appendChild(createRoleUser);
// liCreateUser.appendChild(divUser)


// ulUsers.appendChild(liCreateUser)

