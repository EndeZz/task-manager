import './404.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import Icon from '../../components/icon/icon';

const NotFound = ({ title }) => {
  useTitle(title);

  return (
    <div className="container error-page">
      <img src="./img/icons/404.svg" alt="404 страница" />
      <h2 className="error-page__title">Потерялись?</h2>
      <p className="error-page__subtitle">Страница, которую вы ищите не существует, либо была удалена</p>
      <Link className="btn btn_primary btn_inline" to="/">
        <Icon
          className="icon icon_primary icon_tick icon_edge"
          path="./img/icons/icons.svg#home-circle"
          width={15}
          height={15}
          aria-hidden="true"
        />
        На главную
      </Link>
    </div>
  );
};

export default NotFound;
