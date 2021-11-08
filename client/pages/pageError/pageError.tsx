import * as React from 'react';

import Button from '../../components/button-with-text/button-with-text';
import './pageError.scss';
import img from '../../../public/img/icons/404.svg';
import { useHistory } from 'react-router-dom';

export default function PageError(props: {}) {

  const history = useHistory()

  function returnHome() {
    console.log(2)
    history.push('/')
  }

  return (
    <main className="main">
      <div className="container">
        <div className="content-error">
          <img src={img} alt="Ошибка 404" className="content-error__img" />
          <h1 className="content-error__title"> Потерялись?</h1>
          <p className="content-error__text">Страница, которую вы ищите не существует, либо была удалена</p>
          <Button type="home" text="На главную" click={() => returnHome()} />
        </div>
      </div>
    </main>
  )
}
