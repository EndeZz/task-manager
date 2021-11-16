import React from 'react';
import ROUTER from '../../../router/routes';
import ButtonDropdown from '../../buttons/ButtonDropdown/ButtonDropdown';
import './user.scss';

const { PAGES } = ROUTER;

function User(props: { name: string }) {
  // const onClick = () => {
  //   const dropdownMenu = document.querySelector('.profile__dropdown');
  //   dropdownMenu.removeAttribute('hidden');
  // };

  return (
    <div className="profile">
      <div className="profile__info">
        <span className="profile__info__name">
          {props.name}
        </span>
        <img className="profile__info__img" src="/profile/avatar.png" alt="Фото пользователя" />
        <ButtonDropdown></ButtonDropdown>
      </div>
      <div className="profile__dropdown" hidden>
        <ul className="profile__dropdown__list">
          <li>
            <div className="profile__dropdown__list__item">
              <a className="profile__dropdown__list__item__text" href={PAGES.PROFILE}>Профиль</a>
            </div>
          </li>
          <li>
            <div className="profile__dropdown__list__item">
              <a className="profile__dropdown__list__item__text" href={PAGES.AUTH}>Выйти</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;
