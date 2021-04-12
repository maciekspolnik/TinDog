import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import List from "./views/List";
import Register from './views/Register'
import Login from './views/Login'

import Main from './views/Main'
import UserComponent from './components/UserComponent'

ReactDOM.render(
    <React.StrictMode>
        <List/>
    </React.StrictMode>,
    document.getElementById('root')
);

