import './auth.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTitle } from '../../hooks/useTitle';
import { AuthActionCreator } from '../../store/reducers/auth/action-creator';
import { IUser } from '../../store/reducers/auth/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';
import Input from '../../components/input/input';

const Auth = ({ title }) => {
  const [{ email, password }, setUser] = useState<IUser>({ email: '', password: '' });
  const { error } = useTypedSelector((state) => state.auth);

  const dispatch = useDispatch();
  useTitle(title);

  const login = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(AuthActionCreator.login(email, password));
  };

  return (
    <div>
      <div className="container auth">
        <img className="auth__img" src="/img/icons/logo.svg" alt="Логотип" />
        <div className="auth__content">
          <h2 className="auth__title">Вход</h2>
          <form className="auth__form" onSubmit={login}>
            <div className="auth__group">
              <p className="control__title">E-mail</p>
              <Input
                type="text"
                id="auth-email"
                className="input"
                placeholder="Введите e-mail"
                value={email}
                onChange={(e) => setUser({ email: e.target.value, password })}
              />
            </div>
            <div className="auth__group">
              <p className="control__title">Пароль</p>
              <Input
                type="password"
                id="auth-password"
                className="input"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setUser({ email, password: e.target.value })}
              />
            </div>

            {error && <span>{error}</span>}

            <Button className="btn btn_primary btn_inline">
              <Icon
                className="icon icon_primary icon_tick icon_edge"
                path="./img/icons/icons.svg#lock-circle"
                width={18}
                height={18}
                aria-hidden="true"
              />
              Войти
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
