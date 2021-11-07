import './user.scss';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import ROUTES from '../../router/routes';
import Icon from '../../components/icon/icon';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

const User = ({ title }) => {
  useTitle(title);
  const history = useHistory();
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const togglePasswordMode = (e) => {
    e.preventDefault();
    setIsPassword((prev) => !prev);
  };

  const [input, setInput] = useState<string>('');
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="container user">
      <div className="back back__heading">
        <Button className="btn btn_trans btn_inline" onClick={() => history.push(ROUTES.INDEX.url)}>
          <Icon className="icon icon_back icon_sm icon_primary" path="./img/icons/icons.svg#back" aria-hidden="true" />
        </Button>
        <h2 className="user__heading">Пользователь</h2>
      </div>

      <div className="user__wrapper">
        <div className="user__logo">
          <div className="user__img">
            <img src="./img/profile/unknown.png" alt="Изображение профиля" />
          </div>
          <label htmlFor="download" className="user__btn-upload">
            <Input className="hidden" id="download" type="file" />
            <span className="btn btn_trans btn_inline">
              <Icon
                className="icon icon_primary icon_edge"
                path="./img/icons/icons.svg#upload-icon"
                width={14}
                height={14}
                aria-hidden="true"
              />
              Загрузить аватар
            </span>
          </label>
        </div>

        {/* <Control value={searchFilter} onChange={handleChange} clearButton={clearHandler} data={controlPanel} /> */}

        <form className="user__form" action="#">
          <div className="user__group">
            <label className="user__caption">Имя, фамилия</label>
            <input className="input" type="text" id="auth-password" name="Пароль" placeholder="Введите имя и фамилию" />
          </div>
          <div className="user__group">
            <label className="user__caption">E-mail</label>
            <input className="input" type="password" id="auth-password" name="Пароль" placeholder="Введите пароль" />
          </div>
          <div className="user__group">
            <label className="user__caption">Роль</label>
            <input className="input" type="password" id="auth-password" name="Пароль" placeholder="Введите пароль" />
          </div>
          <div className="user__group">
            <label className="user__caption">Пароль</label>
            <Input
              type={isPassword ? 'text' : 'password'}
              className="input"
              value={input}
              placeholder="Введите пароль"
              onChange={handleChange}
            />
            <Button className="btn btn_reset input_search-icon" onClick={togglePasswordMode}>
              <Icon
                className="icon icon_ghost"
                path={`./img/icons/icons.svg#${isPassword ? 'visible-icon' : 'not-visible-icon'}`}
                width={22}
                height={15}
                aria-hidden="true"
              />
            </Button>
          </div>
          <div className="user__btn-group">
            <Button className="btn btn_primary btn_inline">
              <Icon
                className="icon icon_primary icon_primary-str
         icon_tick icon_edge"
                path="./img/icons/icons.svg#tick-circle"
                aria-hidden="true"
              />
              Сохранить
            </Button>
            <Button className="btn btn_danger">
              <Icon
                className="icon icon_delete icon_tick icon_edge"
                path="./img/icons/icons.svg#delete-icon"
                aria-hidden="true"
              />
              Удалить профиль
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
