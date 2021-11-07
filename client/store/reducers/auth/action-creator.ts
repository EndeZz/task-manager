import axios from 'axios';
import { AppDispatch } from '../../index';

import { AuthActionEnum, IUser, SetAuthAction, SetUserAction, SetIsLoadingAction, SetErrorAction } from './types';

export const AuthActionCreator = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),

  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreator.setIsLoading(true));
      const response = await axios.get<IUser[]>('http://localhost:8081/authLogin');
      const dataUsers = response.data.find((user) => user.email === email && user.password === password);
      if (dataUsers) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('email', dataUsers.email);
        localStorage.setItem('password', dataUsers.password);
        dispatch(AuthActionCreator.setIsAuth(true));
        dispatch(AuthActionCreator.setUser(dataUsers));
      } else {
        dispatch(AuthActionCreator.setError('Неверно введен логин или пароль'));
      }
      dispatch(AuthActionCreator.setIsLoading(false));
    } catch (error) {
      dispatch(AuthActionCreator.setError('Ошибка при логине'));
    }
  },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    dispatch(AuthActionCreator.setUser({} as IUser));
    dispatch(AuthActionCreator.setIsAuth(false));
  },
};
