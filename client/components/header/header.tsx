import * as React from "react";
import logo from '../../../public/img/icons/logo.svg';
import NavItem from "../navItem/navItem";
import Svg from '../svg/svg';
import Avatar from '../avatar/avatar';

import { UserInterface } from "../../utils/interface";

import './header.scss';
import { Redirect, useLocation } from "react-router";
import { Link } from "react-router-dom";

function Header(props: { user: UserInterface, notification: number, userInfo: Function }) {

  const loc = useLocation()
  const activePage = () => {
    if (loc.pathname === '/' || loc.pathname === '/profile') { return 'index' }
    if (loc.pathname.indexOf('task') !== -1) { return 'tasks' }
    if (loc.pathname.indexOf('user') !== -1) { return 'users' }
    if (loc.pathname.indexOf('notification') !== -1) { return 'notifications' }
  }

  interface nav {
    id: string;
    link: string;
    text: string;
  }

  let page: nav[] = [
    { id: 'index', link: '/', text: 'Главная' },
    { id: 'tasks', link: '/tasks', text: 'Задачи' }
  ]

  if (props.user.role.name === 'admin') {
    page.push({ id: 'users', link: '/users', text: 'Пользователи' })
  }

  function userButton() {
    const buttonMenu = document.querySelector('.user__button');
    buttonMenu.classList.toggle('user__button_active');
  }

  function burgerButton() {
    const burger = document.querySelector('.menu-burger');
    burger.classList.toggle('menu-burger_active');
  }

  function logoutUser() {
    console.log(1)
    props.userInfo({
      id: 0,
      name: '',
      email: '',
      avatar: '',
      role: {
        id: 0,
        name: '',
      }
    })
  }

  return (
    (props.user.id === 0)
      ? <Redirect to='/auth' />
      : (
        < header className="header" >
          <div className="container">
            <div className="header__left-colm">
              <a href="/" className="header__logo-link">
                <img src={logo} alt="Логотип сайта" />
              </a>
              <nav className="header__nav">
                <div className="menu-burger" onClick={burgerButton}>
                  <span className="menu-burger__button"></span>
                </div>

                <ul className="menu">
                  {
                    page.map((item) => { return (<NavItem id={item.id} link={item.link} text={item.text} key={item.id} active={(item.id === activePage())} />) })
                  }
                </ul>
              </nav>
            </div>
            <div className="header__right-colm">
              <Link to="/notification" className={`notification ${(activePage() === 'notifications') ? "notification_active" : ""}`}>
                <Svg type="bell" classes="notification__bell-icon" />
                <div className="notification__new-area label  notification_new">
                  <span className="notification__new-message">{props.notification}</span>
                </div>
              </Link>
              <div className="user">
                <span className="user__name">{props.user.name}</span>
                <button className="user__button" onClick={userButton}>
                  <Avatar url={props.user.avatar} size='small' />
                  <Svg type="menu" classes="user__open-menu" />
                </button>
                <div className="user-menu">
                  <ul className="user-menu__list">
                    <li className="user-menu__item">
                      <Link to='/profile' className="user-menu__link">Профиль</Link>
                    </li>
                    <li className="user-menu__item">
                      <Link to='/auth' className="user-menu__link" onClick={() => logoutUser()}>Выйти</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header >
      )
  )
}

export default Header;
