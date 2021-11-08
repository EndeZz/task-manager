import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  NavLink
} from 'react-router-dom';

import Header from "../../components/header/header";
import Main from "../main/main";
import Tasks from "../tasks/tasks";
import TaskNew from "../task-new/task-new";
import Users from "../users/users";
import User from "../user/user";
import Profile from "../profile/profile";
import Notifications from "../__notifications/notifications";
import Auth from "../auth/auth";
import PageError from "../pageError/pageError";

import data from '../../../server/UserResponseDto.json';
import { UserInterface } from "../../utils/interface";
import Task from "../___task/task";
import userApi from "../../api/user";

export default function App() {
  const user = data[0]
  let [userInfo, setUserInfo] = useState(user)

  const pages = [
    { id: 'main', link: '/', component: <Main /> },
    { id: 'tasks', link: '/tasks', component: <Tasks /> },
    { id: 'task', link: '/task/:id', component: <Task user={userInfo} /> },
    { id: 'taskNew', link: ['/task-new', '/task-new/:id'], component: <TaskNew /> },
    { id: 'users', link: '/users', component: <Users /> },
    { id: 'user', link: ['/user', '/user/:id'], component: <User /> },
    { id: 'profile', link: '/profile', component: <Profile user={userInfo} /> },
    { id: 'notification', link: '/notification', component: <Notifications /> },
    { id: 'auth', link: '/auth', component: <Auth user={userInfo} /> },
    { id: 'error', link: '*', component: <PageError /> }
  ]

  function setUser(value: UserInterface) {
    setUserInfo(value)
  }

  return (
    <Router>
      <Switch>
        {pages.map((item) => {
          return (item.id !== 'auth')
            ? <Route exact path={item.link} key={item.id}>
              <Header user={userInfo} notification={3} userInfo={setUser} />
              {item.component}
            </Route>
            : <Route exact path={item.link} key={item.id}> {item.component}</Route>
        })}
      </Switch>
    </Router>
  )
};
