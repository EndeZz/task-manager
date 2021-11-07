import './header.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';

import Index from '../../pages/index';
import Tasks from '../../pages/tasks/tasks';
import Users from '../../pages/users/users';

const Header = (  props  ) => {

    console.log("setIs", props)

    const handleLogOut = () => {
        props.setIsLoggedIn(false)
    }
    console.log("logged", props.isLoggedIn)
    
        return pug`
            ${props.children[1].map((item, ind) => pug`
                Router
                    div(class=${item.className}) 
                        .container 
                            .header-block  
                                .header__logo-img 
                                    a 
                                        img(src=${item.logoImg})
                                nav.header__menu        
                                    ul.header__menu-list
                                        li.header__menu-item
                                            a(href="/") Главная
                                        li.header__menu-item
                                            a(href="/tasks") Задачи
                                        li.header__menu-item
                                            a(href="/users") Пользователи
                                .header__notif-block                
                                    a(class="header__notif-link header__notif-link_border", href="#")
                                        img(src=${item.notifImg})
                                        span(class=${item.classNotif}) ${item.notifCount}
                                .header__user-block ${item.nameUser}
                                .header__user-photo 
                                    img.header__user-img(src=${item.logoPers} alt="Логотип пользователя")
                                ul.header__user-profile 
                                    li.header__user-item 
                                        a.header__user-log(href="#") Профиль
                                    li.header__user-item 
                                        a(class="header__user-goout" href="#" onClick=${handleLogOut}) Выход
            `)} 
        `;
}


export default Header;


// nav=${this.props.children[3]}
// nav.header__menu
// ul.header__menu-list ${this.getNav()}