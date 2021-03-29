import React, {Component} from 'react';
import Logo from '../components/logo';
import '../css/Login.css';
import RegisterForm from "../components/register form";
import LogoText from "../components/logo_text";

class Register extends Component {

    render() {
        return (
            <div>

                <head>
                    <title>REGISTER</title>
                </head>

                <body>
                <div className="container">
                    <div className="logo">
                        <Logo/>
                        <LogoText/>
                    </div>
                    <RegisterForm/>
                </div>
                </body>
            </div>
        );
    }
}

export default Register;
