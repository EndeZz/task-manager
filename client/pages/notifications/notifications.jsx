// import './notifications.scss';
// import '../../styles/common.scss';
// import '../../styles/fonts.scss';


// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';


// import Header from '../../components/header/header';
// import Button from '../../components/button/button';
// import NotifList from '../../components/notifList/notifList';
// import Select from '../../components/select/select.jsx';

// import logoIcon from '../../../public/img/logo.svg'
// import backImg from '../../../public/img/back--icon.svg'
// import bluebell from '../../../public/img/bluebell.svg'
// import logoPerson from '../../../public/img/logo-person.svg'

// import notice1Icon from '../../../public/img/icon/notice-1.svg'
// import notice2Icon from '../../../public/img/icon/notice-2.svg'
// import notice3Icon from '../../../public/img/icon/notice-3.svg'
// import notice4Icon from '../../../public/img/icon/notice-4.svg'
// import notice5Icon from '../../../public/img/icon/notice-5.svg'
// import notice6Icon from '../../../public/img/icon/notice-6.svg'
// import notice7Icon from '../../../public/img/icon/notice-7.svg'



// const noticesBtn = [
//   {
//     classBtn: "notice-btn",
//     classReset: "btn-reset",
//     bgBtn: "white",
//     text: "Уведомления",
//     img: `${backImg}`
//   }
// ]

// const items = [
//   {className: "notification", icon: `${notice1Icon}`, title: "Новый комментарий в задаче", subtitle: "Название задачи", data: "09:51 14.02.2021" },
//   {className: "notification", icon: `${notice2Icon}`, title: "Аркадий Юрченко загрузил контент в задаче", subtitle: "Название задачи", data: "09:51 14.02.2021" },
//   {className: "notification", icon: `${notice3Icon}`, title: "Семён Щеглов поручил вам новую задачу", subtitle: "", data: "09:51 14.02.2021" },
//   {className: "notification", icon: `${notice4Icon}`, title: "Новый комментарий в задаче", subtitle: "Название задачи", data: "09:51 14.02.2021" },
//   {className: "notification", icon: `${notice5Icon}`, title: "Новый комментарий в задаче", subtitle: "Название задачи", data: "09:51 14.02.2021" },
//   {className: "notification", icon: `${notice6Icon}`, title: "Новый комментарий в задаче", subtitle: "Название задачи", data: "09:51 14.02.2021" },
//   {className: "notification", icon: `${notice7Icon}`, title: "Новый комментарий в задаче", subtitle: "Название задачи", data: "09:51 14.02.2021" },
// ]

// const nav = [
//   {className: "header", active : "active", "text" : "Главная", href: "/index"},
//   {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
//   {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
// ]

// const headerData = [
//   {className: "header-block", classNotif: "header__notif-count", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "4", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
// ]


// class Notifications extends Component {
//     render() {
//       return pug`
//         div
//           Header head=${headerData} nav=${nav}
//           .main 
//             .container 
//               .notification 
//                 .notification__title-btn
//                   Button btn=${noticesBtn}
//                 ul(class=${items[0].className + "__items"})
//                   NotifList list=${items}


                                           
//       `
//     }
//   }

// export default Notifications;