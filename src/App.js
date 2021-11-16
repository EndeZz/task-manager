import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ROUTER from './router/routes';
import AuthComponent from './pages/auth/auth';
import IndexComponent from './pages/index/index';
import Error404 from './pages/404/404';
import Notifications from './pages/notifications/notifications';
import Profile from './pages/profile/profile';
import Task from './pages/task/Task';
import TaskNew from './pages/TaskNew/TaskNew';
import Tasks from './pages/tasks/Tasks';
import User from './pages/user/User';
import Users from './pages/users/Users';
import Header from './components/header/header';

const { PAGES } = ROUTER;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path={PAGES.INDEX} element={<IndexComponent></IndexComponent>}></Route>
          <Route path={PAGES.AUTH} element={<AuthComponent></AuthComponent>}></Route>
          <Route path={PAGES.ERROR} element={<Error404></Error404>}></Route>
          <Route path={PAGES.NOTIFICATIONS} element={<Notifications></Notifications>}></Route>
          <Route path={PAGES.PROFILE} element={<Profile></Profile>}></Route>
          <Route path={PAGES.TASK} element={<Task></Task>}></Route>
          <Route path={PAGES.TASKNEW} element={<TaskNew></TaskNew>}></Route>
          <Route path={PAGES.TASKS} element={<Tasks></Tasks>}></Route>
          <Route path={PAGES.USER} element={<User></User>}></Route>
          <Route path={PAGES.USERS} element={<Users></Users>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
