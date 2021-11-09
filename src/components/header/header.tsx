import React from 'react';
import Nav from '../nav/nav';
import Notification from './notification/notification';
import User from './user/user';
import './header.scss';

function Header() {
  return (
    <div className="">
      <header className="header">
        <div className="header__nav">
          <a href="/">
            <img src="/public/icons/logo.svg" alt="логотип"/>
          </a>
          <Nav role="admin"></Nav>
        </div>
        <div className="header__user">
          <Notification></Notification>
          <User name="Семён Щеглов"></User>
        </div>
      </header>
    </div>
  );
}

export default Header;
