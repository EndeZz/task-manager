import './navigation.scss';
import React, { FC, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ROUTES from '../../router/routes';
import Button from '../button/button';
import DropDown from '../dropdown/dropdown';
import Icon from '../icon/icon';

const Navigation: FC = () => {
  const [visibleDropDown, setVisibleDropDown] = useState<boolean>(false);

  const toggleVisibleDropDown = () => {
    setVisibleDropDown(!visibleDropDown);
  };

  return (
    <nav className="nav__menu">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={ROUTES.INDEX.url} className="btn btn__link" activeClassName="btn_active" exact>
            {ROUTES.INDEX.title}
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to={ROUTES.TASKS.url} className="btn btn__link" activeClassName="btn_active">
            {ROUTES.TASKS.title}
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to={ROUTES.USERS.url} className="btn btn__link" activeClassName="btn_active">
            {ROUTES.USERS.title}
          </NavLink>
        </li>
      </ul>

      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="btn btn__notify btn__link nav__profile" aria-label="Уведомления">
            <span className="nav__notify">
              <Icon className="icon-notify" path="./img/icons/icons.svg#icon-notify" width={20} height={24} />
            </span>
            <span className="nav__notify-new">3</span>
          </Link>

          <Button
            className={`btn btn__profile nav__profile ${visibleDropDown ? 'nav__profile_active' : ''}`}
            id="profile-toggle"
            onClick={toggleVisibleDropDown}>
            <span className="nav__profile_name">Семён Щеглов</span>
            <img className="nav__profile_img" src="./img/profile/pic1.png" alt="Аватар профиля" />
            <span className="nav__profile_arrow"></span>
          </Button>

          {visibleDropDown && <DropDown />}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
