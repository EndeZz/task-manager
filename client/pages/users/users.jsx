// import './users.scss';
// import '../../styles/common.scss';
// import '../../styles/fonts.scss';
// import '../../components/input/input.scss';
// import '../../components/select/select.scss';
// import '../../components/button/button.scss'
// import '../../components/cardsTask/cardsTask.scss'
// // import '../user/user.ts'

// // import liCreateUser from '../user/user'



// import '../../styles/common.scss';
// import '../../styles/fonts.scss';


// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';


// import Header from '../../components/header/header';
// import Input from '../../components/input/input';
// import Select from '../../components/select/select';
// import Button from '../../components/button/button';
// import AddUser from '../../components/addUser/addUser';



// import plusImg from '../../../public/img/plus--icon.svg'
// import searchImg from '../../../public/img/search.svg'
// import { searchInput } from '../index';

// import personPhoto1Img from '../../../public/img/person/1.svg'
// import personPhoto2Img from '../../../public/img/person/2.svg'
// import personPhoto3Img from '../../../public/img/person/3.svg'
// import personPhoto4Img from '../../../public/img/person/4.svg'
// import personPhoto5Img from '../../../public/img/person/5.svg'

// import logoIcon from '../../../public/img/logo.svg'
// import bluebell from '../../../public/img/bluebell.svg'
// import logoPerson from '../../../public/img/logo-person.svg'


// const nav = [
//     {className: "header", active : "active", "text" : "Главная", href: "/index"},
//     {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
//     {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
//   ]
  
//   const headerData = [
//     {className: "header-block", classNotif: "header__notif-count", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "4", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
//   ]

// const allRoleBtn = [
//     {
//       classBtn: "all-role_btn",
//       classReset: "btn-reset",
//       bgBtn: "white",
//       text: "Все",
//       img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
//     }
//   ]

// const contentMakerBtn = [
//     {
//         classBtn: "content-maker_btn",
//         classReset: "btn-reset",
//         bgBtn: "white",
//         text: "Контент-майкер",
//         img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
//     }
// ]

// const managerBtn = [
//     {
//         classBtn: "manager_btn",
//         classReset: "btn-reset",
//         bgBtn: "white",
//         text: "Менеджер",
//         img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
//     }
// ]

// const adminBtn = [
//     {
//         classBtn: "admin_btn",
//         classReset: "btn-reset",
//         bgBtn: "white",
//         text: "Администратор",
//         img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
//     }
// ]

// const addUserBtn = [
//     {
//         classBtn: "add-user",
//         classReset: "btn-reset",
//         bgBtn: "blue",
//         text: "Добавить пользователя",
//         img: `${plusImg}`
//     }
// ]

// const users = [
//     {className: "users", classDop: "user-card" ,icon: `${personPhoto1Img}`, name: "Инесса Соловьёвa",  email: "inessa90@gmail.com", role: "Контент-мейкер"},
//     {className: "users", classDop: "user-card" ,icon: `${personPhoto2Img}`, name: "Оскар Калинин",  email: "oscar@gmail.com", role: "Менеджер"},
//     {className: "users", classDop: "user-card" ,icon: `${personPhoto3Img}`, name: "Адам Галкин",  email: "galkin@gmail.com", role: "Администратор"},
//     {className: "users", classDop: "user-card" ,icon: `${personPhoto4Img}`, name: "София Мельник", email: "melnik_s@gmail.com", role: "Менеджер"},
//     {className: "users", classDop: "user-card" ,icon: `${personPhoto5Img}`, name: "Инесса Соловьёвa",  email: "inessa90@gmail.com", role: "Контент-мейкер"},
// ] 

// class Users extends Component {
//     render() {
//       return pug`
//         div
//             Header head=${headerData} nav=${nav}
//             .main 
//                 .container
//                     .users 
//                         .users__info
//                             .users__search-block
//                                 Input inp=${searchInput}
//                             .users__roles 
//                                 span(class="users__role-title") Роль 
//                                 .users__buttons
//                                     Button btn=${allRoleBtn}
//                                     Button btn=${contentMakerBtn}
//                                     Button btn=${managerBtn}
//                                     Button btn=${adminBtn}
//                         .users__add-person
//                             Button btn=${addUserBtn}
//                         ul(class="users__person-items")
//                             AddUser add=${users}
//       `
//     }
//   }

// export default Users;









