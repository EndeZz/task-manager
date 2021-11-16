import React from 'react';
import ROUTER from '../../router/routes';
import Nav from '../nav/nav';
import Notification from './notification/notification';
import User from './user/user';
import './header.scss';

const { PAGES } = ROUTER;

function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <a href={PAGES.INDEX}>
          <img src="/icons/logo.svg" alt="логотип"/>
        </a>
        <Nav role="admin" page={PAGES.INDEX}></Nav>
      </div>
      <div className="header__user">
        <Notification></Notification>
        <User name="Семён Щеглов"></User>
      </div>
    </header>
  );
}

export default Header;
