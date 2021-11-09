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

const { PAGES } = ROUTER;

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path={PAGES.INDEX} element={<IndexComponent></IndexComponent>}></Route>
        <Route path={PAGES.AUTH} element={<AuthComponent></AuthComponent>}></Route>
        <Route path={PAGES.ERROR} element={<Error404></Error404>}></Route>
        <Route path={PAGES.NOTIFICATIONS} element={<Notifications></Notifications>}></Route>
        <Route path={PAGES.PROFILE} element={<Profile></Profile>}></Route>
        <Route path={PAGES.TASK} element={<Task></Task>}></Route>
        <Route path={PAGES.TASKNEW} element={<TaskNew></TaskNew>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
