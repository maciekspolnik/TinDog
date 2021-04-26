import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Err from "./views/Err"
import List from "./views/List"
import Test from "./views/Test"
import Main from './views/Main'
import Login from './views/Login'
import Register from './views/Register'
import Settings from './views/Settings'

const history = createBrowserHistory();

ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/matched_list" component={List} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/settings" component={Settings} />
            <Route path="/err" component={Err} />
            <Route path="/test" component={Test} />
        </Switch>
    </Router>),
    document.getElementById('root')
);

