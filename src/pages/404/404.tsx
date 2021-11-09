import React from 'react';
import ButtonMain from '../../components/buttons/buttonMain/buttonMain';
import Header from '../../components/header/header';
import './404.scss';

function Error404() {
  return (
    <div>
      <Header></Header>
      <section className="error404">
        <img className="error404__img" src="/public/icons/404.svg" alt="ошибка 404" />
        <div className="error404__message">
          <h1 className="error404__message__h1">Потерялись</h1>
          <span className="error404__message__text">Страница, которую вы ищите не существует, либо была удалена</span>
          <ButtonMain type="home" color="blue" text="На главную"></ButtonMain>
        </div>
      </section>
    </div>
  );
}

export default Error404;
