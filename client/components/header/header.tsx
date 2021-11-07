import './header.scss';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';

const Header: FC = () => (
  <header className="header">
    <h1 className="hidden">Task Manager</h1>
    <div className="container nav">
      <Link to="/" className="nav__logo">
        <img src="./img/icons/logo.svg" alt="Логотип" />
      </Link>
      <Navigation />
    </div>
  </header>
);

export default Header;
