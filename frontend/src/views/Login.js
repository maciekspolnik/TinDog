import React, {Component} from 'react';
import '../css/Login.css';
import LoginForm from "../components/login/LoginForm";
import LogoText from "../components/LogoText";
import MainLogo from "../components/common/MainLogo";

class Login extends Component {

    render() {
        return (
            <React.Fragment>
                <head>
                    <title>PK How - Logowanie</title>
                </head>
                <body>
                <div className="container">
                    <div className="logo">
                        <MainLogo/>
                        <LogoText/>
                    </div>

                    <LoginForm/>
                </div>
                </body>
            </React.Fragment>
        );
    }


}

export default Login;
