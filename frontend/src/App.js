import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/main.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import LittleLogo from "./components/all/common/LittleLogo";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const style={
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: "1em"
  }

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>


      <div>

        <header className="topbar">
          <div className='menu-bar'>
            <LittleLogo />
            {currentUser && (
                <Link style={style} to="/matched_list">
                  Twoje kontakty
                </Link>
            )}
            {currentUser && (
                  <Link to={"/user"} style={style}>
                    Poznaj
                  </Link>
            )}
            {showAdminBoard && (

                  <Link to={"/admin"} style={style}>
                    Administrowanie
                  </Link>

            )}
          </div>
          <div className='menu-bar'>
            {currentUser ? (
                <div className="my_navbar ml-auto">
                    <Link to={"/profile"} style={style}>
                      {currentUser.username}
                    </Link>
                    <a href="/login" style={style} onClick={logOut}>
                      Wyloguj
                    </a>
                </div>
            ) : (
                <div className="menu-bar">

                    <Link to={"/login"} style={style}>
                      Logowanie
                    </Link>

                    <Link to={"/register"} style={style}>
                      Rejestracja
                    </Link>

                </div>
            )}
          </div>
        </header>


        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
