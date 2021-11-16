import React from 'react';
import Nav from '../nav/nav';
import Notification from './notification/notification';
import User from './user/user';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <a href="/">
          <img src="/icons/logo.svg" alt="логотип"/>
        </a>
        <Nav role="admin"></Nav>
      </div>
      <div className="header__user">
        <Notification></Notification>
        <User name="Семён Щеглов"></User>
      </div>
    </header>
  );
}

export default Header;
