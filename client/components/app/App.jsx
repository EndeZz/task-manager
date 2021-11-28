import React, { useState } from 'react';


import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import Fault from '../../pages/404/404';

import Index, { headerData, nav } from '../../pages/index';
import Task from '../../pages/task/task';
import Tasks from '../../pages/tasks/tasks';
import Auth from '../../pages/auth/auth';
import Header from '../header/header';


 const App = ( props ) => {

    const [ cards, setCards ] = useState([])
    const [ isLoggedIn, setIsLoggedIn ] = useState(() => {
        if(localStorage.getItem('isLoggedIn') === 'true') return true
        return false
    })
    const [ userName, setUserName ] = useState(localStorage.getItem('emailUser'))

        return (
            <BrowserRouter>
                <Header head={headerData} nav={nav} userName={userName} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Switch>
                    {/* <Route exact path="/" component={Index}/>  */}
                    <Route exact path="/" >
                        <Index cards={cards} setCards={setCards} />
                    </Route> 
                    <Route path="/tasks"  >
                        <Tasks cards={cards} setCards={setCards} />
                    </Route>
                    <Route path="/task/:name" component={Task} />
                    {/* <Route path="/publish" component={Publish} />
                    <Route path="/taskNew" component={TaskNew} />
                    <Route path="/users" component={Users} />
                    <Route path="/user" component={User} /> */}
                    <Route path="/auth" 
                     render={( props ) => <Auth {...props} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} /> }
                    />
                    {/* <Route path="/notifications" component={Notifications} /> */}
                    <Route component={Fault} />
                    {/* <Route path="/profile" component={Prof} /> */}
                </Switch> 
            </BrowserRouter>
        );   
}

export default App;
