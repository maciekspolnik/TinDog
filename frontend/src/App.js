import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/main.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main"
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import LittleLogo from "./components/all/LittleLogo";
import Profile from "./components/Profile";
import List from "./components/List";
import Test from "./components/Test";

const App = () => {

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
                  <Link to={"/main"} style={style}>
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
            <Route exact path={["/", "/main"]} component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component ={Profile}/>
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/matched_list" component={List} />
            <Route path="/test" component={Test}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
