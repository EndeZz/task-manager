import './styles/index.scss';
import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/header';
import Index from './pages/index/index';
import Tasks from './pages/tasks/tasks';
import NotFound from './pages/404/404';
import Auth from './pages/auth/auth';
import Profile from './pages/profile/profile';
import Users from './pages/users/users';
import Task from './pages/task/task';
import ROUTES from './router/routes';
import { useTypedSelector } from './hooks/useTypedSelector';
import { AuthActionCreator } from './store/reducers/auth/action-creator';
import { IUser } from './store/reducers/auth/types';
import User from './pages/user/user';

const App = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(AuthActionCreator.setUser({ email: localStorage.getItem('name' || '') } as IUser));
      dispatch(AuthActionCreator.setIsAuth(true));
    }
  }, []);

  return (
    <BrowserRouter>
      {isAuth ? (
        <>
          <Header />
          <Switch>
            <Route path={ROUTES.INDEX.url} exact={ROUTES.INDEX.exact}>
              <Index title={ROUTES.INDEX.title} />
            </Route>
            <Route path={ROUTES.TASKS.url} exact={ROUTES.TASKS.exact}>
              <Tasks title={ROUTES.TASKS.title} />
            </Route>
            <Route path={`${ROUTES.TASK.url}`} exact={ROUTES.TASK.exact}>
              <Task title={ROUTES.TASK.title} />
            </Route>
            <Route path={ROUTES.PROFILE.url} exact={ROUTES.PROFILE.exact}>
              <Profile title={ROUTES.PROFILE.title} />
            </Route>
            <Route path={ROUTES.USERS.url} exact={ROUTES.USERS.exact}>
              <Users title={ROUTES.USERS.title} />
            </Route>
            <Route path={ROUTES.USER.url} exact={ROUTES.USER.exact}>
              <User title={ROUTES.USER.title} />
            </Route>
            <Route path={ROUTES.NOT_FOUND_PAGE.url} exact={ROUTES.NOT_FOUND_PAGE.exact}>
              <NotFound title={ROUTES.NOT_FOUND_PAGE.title} />
            </Route>
            <Redirect to={ROUTES.NOT_FOUND_PAGE.url} />
          </Switch>
        </>
      ) : (
        <Switch>
          <Route path={ROUTES.AUTH.url} exact={ROUTES.AUTH.exact}>
            <Auth title={ROUTES.AUTH.title} />
          </Route>
          <Redirect to={ROUTES.AUTH.url} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
