// import './publish.scss';
// import '../../styles/common.scss';
// import '../../styles/fonts.scss';
// import '../../components/header/header';
// import '../../components/input/input.scss';
// import '../../components/button/button.scss';
// import '../../components/cards/cards.scss';
// import '../../components/modals/modals.scss';

// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';


// import Header from '../../components/header/header';
// import Button from '../../components/button/button';
// import Input from '../../components/input/input';


// import backIcon from '../../../public/img/back.svg'
// import approveIcon from '../../../public/img/approve--icon.svg'

// import card1 from '../../../public/img/cards/1.jpg'
// import card2 from '../../../public/img/cards/2.jpg'
// import card3 from '../../../public/img/cards/3.jpg'
// import card4 from '../../../public/img/cards/4.jpg'
// import card5 from '../../../public/img/cards/5.jpg'
// import card6 from '../../../public/img/cards/6.jpg'



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

// class Publish extends Component {
//     render() {
//         const card = [
//             {className: "publish", img: `${card1}`, format: "video_594-19.avi", data: "09:41 08.02.2020"},
//             {className: "publish", img: `${card2}`, format: "video_594-19.avi", data: "09:41 08.02.2020"},
//             {className: "publish", img: `${card3}`, format: "video_594-19.avi", data: "39:41 10.02.2020"},
//             {className: "publish", img: `${card4}`, format: "video_594-19.avi", data: "09:41 08.02.2020"},
//             {className: "publish", img: `${card5}`, format: "video_594-19.avi", data: "09:41 08.02.2020"},
//             {className: "publish", img: `${card6}`, format: "video_594-19.avi", data: "09:41 08.02.2020"},

//         ]
//         function cardList() {
//             return pug`${card.map(item => pug`
//                 li(class=${item.className + "__column"})
//                     img(class=${item.className + "__column-img"} src=${item.img})
//                     span(class=${item.className + "__column-format"}) ${item.format}
//                     span(class=${item.className + "__column-data"}) ${item.data}
//             `)}`
//         }

//         const publishBtn = [
//             {
//                 classBtn: "publish-btn",
//                 classReset: "btn-reset",
//                 bgBtn: "white",
//                 text: "Выберите файл для публикации",
//                 img: `${backIcon}`
//             }
//         ]
//         const approveBtn = [
//             {
//                 classBtn: "approve-btn",
//                 classReset: "",
//                 bgBtn: "white",
//                 text: "Утвердить и опубликовать",
//                 img: `${approveIcon}`
//             }
//         ]
//       return pug`
//         div
//             Header head=${headerData} nav=${nav}
//             .main 
//                 .container
//                     .publish 
//                         .publish__name
//                             Button btn=${publishBtn}
//                         .publish__content
//                             ul(class="publish__row")      
//                                 ${cardList()}
//                             div(class="publish__footer")
//                                 span(class="publish__shange-file") Изменить название
//                                 div(class="publish__insert-file")
//                                     span(class="publish__name-file") video_594-23.avi
//                                 div(class="publish__approve")
//                                     Button btn=${approveBtn}
//       `
//     }
//   }

// export default Publish;

