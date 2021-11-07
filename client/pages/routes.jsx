import React, { Component, useState } from 'react';

import Navigation from '../components/navigation/navigation';
import Index from './index/index';
import Tasks from './tasks/tasks';
import Task from './task/task';
import Publish from './publish/publish';
import TaskNew from './task-new/task-new';
import Users from './users/users';
import User from './user/user';
import Auth from './auth/auth';
import Notifications from './notifications/notifications';
import Fault from './404/404';
import Prof from './profile/profile';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Header from '../components/header/header';

 function Rout() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

        return (
            <Router>
                    {/* <ul className="header__menu-list">
                        <li className="header__menu-item"><Link to='/'>Главная</Link></li>
                        <li className="header__menu-item"><Link to='/tasks'>Задачи</Link></li>
                        <li className="header__menu-item"><Link to='/users'>Пользователи</Link></li>
                    </ul> */}
                <Switch>
                    <Route exact path="/" 
                        render={(props) => (<Index {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> )}
                    /> 
                    <Route path="/tasks" component={Tasks} />
                    <Route path="/task" component={Task} />
                    <Route path="/publish" component={Publish} />
                    <Route path="/taskNew" component={TaskNew} />
                    <Route path="/users" component={Users} />
                    <Route path="/user" component={User} />
                    <Route path="/auth"
                        render={(props) => (<Auth {...props} setIsLoggedIn={setIsLoggedIn} />)} 
                        />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/fault" component={Fault} />
                    <Route path="/profile" component={Prof} />
                </Switch> 
            </Router>
        );   
}

export default Rout;
