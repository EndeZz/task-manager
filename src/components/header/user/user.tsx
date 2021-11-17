import React, { Fragment, useState, useEffect } from 'react';
import ROUTER from '../../../router/routes';
import './user.scss';

const { PAGES } = ROUTER;

function User(props: { name: string }) {
  const [isShown, setShow] = useState('hidden');

  useEffect(() => {
    const dropdownMenu = document.querySelector('.profile__dropdown');
    const overlay = document.querySelector('.overlay');

    if (isShown === 'show') {
      dropdownMenu.removeAttribute('hidden');
      overlay.classList.add('show');
    } else {
      dropdownMenu.setAttribute('hidden', 'hidden');
      overlay.classList.remove('show');
    }
  });

  return (
    <Fragment>
      <div className="profile">
        <div className="profile__info">
          <span className="profile__info__name">
            {props.name}
          </span>
          <img className="profile__info__img" src="/profile/avatar.png" alt="Фото пользователя" />
          <button className="button button__dropdown" onClick={() => setShow('show')}>
            <img src="/icons/arrow.svg" alt="" />
          </button>
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
      <div className="overlay" onClick={() => setShow('hidden')}></div>
    </Fragment>
  );
}

export default User;
