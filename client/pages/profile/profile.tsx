import './profile.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import ROUTES from '../../router/routes';
import Icon from '../../components/icon/icon';
import Button from '../../components/button/button';

import Input from '../../components/input/input';

const Profile = ({ title }) => {
  useTitle(title);
  const history = useHistory();

  return (
    <div className="container profile">
      <div className="back back__heading">
        <Button className="btn btn_trans btn_inline" onClick={() => history.push(ROUTES.INDEX.url)}>
          <Icon className="icon icon_back icon_sm icon_primary" path="./img/icons/icons.svg#back" aria-hidden="true" />
        </Button>
        <h2 className="profile__heading">Профиль</h2>
      </div>

      <div className="profile__wrapper">
        <div className="profile__logo">
          <div className="profile__img">
            <img src="./img/profile/unknown.png" alt="Изображение профиля" />
          </div>
          <label htmlFor="download" className="profile__btn-upload">
            <Input className="hidden" id="download" type="file" />
            <a className="btn btn_trans btn_inline">
              <Icon
                className="icon icon_primary icon_edge"
                path="./img/icons/icons.svg#upload-icon"
                width={14}
                height={14}
                aria-hidden="true"
              />
              Загрузить аватар
            </a>
          </label>
        </div>

        <form className="profile__form" action="#">
          <div className="profile__group">
            <label className="profile__caption">Имя, фамилия</label>
            <Input className="input" type="text" placeholder="Введите имя и фамилию" />
          </div>
          <div className="profile__group">
            <label className="profile__caption">E-mail</label>
            <Input className="input" type="password" placeholder="Введите пароль" />
          </div>
          <div className="profile__btn-group">
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

export default Profile;
