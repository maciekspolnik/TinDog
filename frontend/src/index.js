import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './views/Register'
import Login from './views/Login'
import Main from './views/Main'
import UserComponent from './components/UserComponent'

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import List from "./views/List";

ReactDOM.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals(console.log);
