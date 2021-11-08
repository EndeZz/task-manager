import React, { useState } from 'react';
import { Redirect } from 'react-router';
import logo from '../../../public/img/icons/logo.svg';
import Button from '../../components/button-with-text/button-with-text';
import Input from '../../components/input/input';
import Label from '../../components/label/label';

import { UserInterface } from '../../utils/interface';

import './auth.scss';

export default function Auth(props: { user: UserInterface }) {
  let [userAuth, setUserAuth] = useState({
    email: '',
    password: ''
  })

  function updateData(e: { target: HTMLInputElement }) {
    const { name, value } = e.target;
    setUserAuth({ ...userAuth, [name]: value })
  }

  return (
    (props.user.id)
      ? <Redirect to='/' />
      : (
        <main className="main">
          <div className="container_full">
            <div className="content-auth">
              <img src={logo} alt="Логотип сайты" className="content-auth__icon" />
              <div className="login-box">
                <h1 className="login-box__title">Вход</h1>

                <Label text='E-mail'>
                  <Input placeholder='Введите e-mail' name='email' onChange={updateData} value={userAuth.email} />
                </Label>
                <Label text='Пароль'>
                  <Input placeholder='Введите пароль' name='password' type='password' onChange={updateData} value={userAuth.password} />
                </Label>

                <Button type="login" text="Войти" />
              </div>
            </div>
          </div>
        </main>
      )
  );
}
