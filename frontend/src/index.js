import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Register from './views/Register'
import Login from './views/Login'
import Main from './views/Main'

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
