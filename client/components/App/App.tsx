import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Tasks from '../../pages/Tasks/Tasks';
import Users from '../../pages/Users/Users';
import MainPage from '../../pages/MainPage/MainPage';
import Error from '../../pages/Error/Error';
import NewTask from '../../pages/NewTask/NewTask';
import Publish from '../../pages/Publish/Publish';
import Auth from '../../pages/Auth/Auth';
import Notifications from '../../pages/Notifications/Notifications';
import Profile from '../../pages/Profile/Profile';
import NewUser from '../../pages/NewUser/NewUser';
import TaskNoResult from '../../pages/TaskNoResult/TaskNoResult';
import TaskResult from '../../pages/TaskResult/TaskResult';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../../store/reducers';
import '../../common.scss';

const App = (): ReactElement => {
    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path={'/'} render={(props) => props.location.pathname !== '/' && <Header />} />
                <Switch>
                    <Route exact path={'/mainpage'} component={MainPage} />
                    <Route path={'/profile'} component={Profile} />
                    <Route exact path={'/tasks'} component={Tasks} />
                    <Route path={'/tasks/:newtasklink'} component={NewTask} />
                    <Route path={'/tasknoresult'} component={TaskNoResult} />
                    <Route path={'/taskresult'} component={TaskResult} />
                    <Route path={'/tasks/:publishlink'} component={Publish} />
                    <Route exact path={'/users'} component={Users} />
                    <Route path={'/users/:newuserlink'} component={NewUser} />
                    <Route path={'/notifications'} component={Notifications} />
                    <Route exact path={'/'} component={Auth} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
