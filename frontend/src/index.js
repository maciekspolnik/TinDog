import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import {Router, Route, Switch} from 'react-router'
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import List from "./views/List";
import Register from './views/Register'
import Login from './views/Login'
import Main from './views/Main'
const history = createBrowserHistory();

ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/matched_list" component={List} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </Router>),
    document.getElementById('root')
);

