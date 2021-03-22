import React, {Component} from 'react';
import '../css/Login.css';
import Logo from "../components/logo";
import LoginForm from "../components/login form";
import LogoText from "../components/logo_text";

class Login extends Component{

  render(){
    return (
        <React.Fragment>
            <head>
                        <title>PK How - Logowanie</title>
            </head>
            <body>
            <div className="container">
                <div className="logo">
                    <Logo/>
                    <LogoText />
                </div>

                <LoginForm />
            </div>
            </body>
        </React.Fragment>
            );
  }


}

export default Login;
