import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/main.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main"
import Admin from "./components/Admin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import Logo from "./components/Logo";
import Profile from "./components/Profile";
import List from "./components/List";
import {deleteMatches} from "./services/user.service";

const App = () => {

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    deleteMatches(currentUser.id).then(
        ()=>{
          localStorage.removeItem("number")
        }
    )
    dispatch(logout());

  };

  return (
    <Router history={history}>


      <React.Fragment>

        <header>
          <div className='menu-bar'>
            <Logo />
            {currentUser && (
                <Link className='astyle' to="/matched_list">
                  Twoje kontakty
                </Link>
            )}
            {currentUser && (
                  <Link to={"/main"} className='astyle'>
                    Poznaj
                  </Link>
            )}
            {showAdminBoard && (

                  <Link to={"/admin"} className='astyle'>
                    Administrowanie
                  </Link>

            )}
          </div>
          <div className='menu-bar'>
            {currentUser ? (
                <div className="my_navbar ml-auto">
                    <Link to={"/profile"} className='astyle'>
                      {currentUser.username}
                    </Link>
                    <a className='astyle' href="/login" onClick={logOut}>
                      Wyloguj
                    </a>
                </div>
            ) : (
                <div className="menu-bar">

                    <Link to={"/login"} className='astyle'>
                      Logowanie
                    </Link>

                    <Link to={"/register"} className='astyle'>
                      Rejestracja
                    </Link>

                </div>
            )}
          </div>
        </header>

        <body>
          <Switch>
            <Route exact path={["/", "/main"]} component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component ={Profile}/>
            <Route path="/admin" component={Admin} />
            <Route path="/matched_list" component={List} />
          </Switch>
        </body>
      </React.Fragment>

    </Router>
  );
};

export default App;
