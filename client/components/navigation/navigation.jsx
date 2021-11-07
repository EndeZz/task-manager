import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";
import logo from '../../../public/img/logo.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'
import './navigation.scss'

import Index from '../../pages/index';
import Users from '../../pages/users/users';
import Tasks from '../../pages/tasks/tasks';


// const nav = [
//     {"active" : "active", "link" : "/index.html", "text" : "Главная"},
//     {"active" : "", "link" : "/tasks.html", "text" : "Задачи"},
//     {"active" : "", "link" : "/users.html", "text" : "Пользователи"}
//   ]

const Navigation = (props) => {

    // console.log("propsNav", props)
    
        return (
            // this.props.children[1].map((item, ind) =>
                <ul className="header__menu-list">
                    <li className="header__menu-item">
                        <a href="/">Главная</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="/tasks">Задачи</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="/users">Пользователи</a>
                    </li>
                </ul>
            // )
        ) 
    }


export default Navigation;



{/* <Router>
<ul className="header__menu-list">
    <li className="header__menu-item">
        <Link exact to="/">Главная</Link>
    </li>
    <li className="header__menu-item">
        <Link to="/tasks">Задачи</Link>
    </li>
    <li className="header__menu-item">
        <Link to="/users">Пользователи</Link>
    </li>
</ul>
</Router> */}


{/* <Switch>
<Route exact path="/index">
    <Index />
</Route>
<Route path="/tasks">
    <Tasks />
</Route>
<Route path="/users">
    <Users />
</Route>
</Switch> */}


// class Navigation extends Component {
//     render() {
//         return pug`
//             ${this.props.children[1].map((item, ind) => pug`
//                 li(class=${item.className + "__menu-item"})
//                     Link to="${item.href}" ${item.text}
//             `)}
//         `;
//     }
// }


// export default Navigation;


// a(class=${ `${item.className + "__menu-list_link"} ${item.active}` }  href=${item.href}) ${item.text}