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
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
