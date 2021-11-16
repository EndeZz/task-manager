import React from 'react';
import ROUTER from '../../router/routes';
import './nav.scss';

function NavRender(role: 'admin' | 'manager' | 'content-maker', page: string) {
  const { PAGES } = ROUTER;
  const pages = [{ name: 'Главная', url: PAGES.INDEX }, { name: 'Задачи', url: PAGES.TASKS }];

  if (role === 'admin') {
    pages.push({ name: 'Пользователи', url: PAGES.USERS });
  }

  const navs = pages.map(({ name, url }) => {
    const navClass = url === page ? 'button nav__btn active' : 'button nav__btn';
    return (
      <li className={navClass} key={`page_${url}`}>
        <a className="button__text" href={`${url}`}>{name}</a>
      </li>
    );
  });

  return (
    <ul className="nav__list">
      {navs}
    </ul>
  );
}

function Nav(props: { role: 'admin' | 'manager' | 'content-maker', page: string }) {
  return (
    <nav className="nav">
      {NavRender(props.role, props.page)}
    </nav>
  );
}

export default Nav;
