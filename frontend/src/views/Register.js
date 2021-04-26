import React, {Component} from 'react';
import '../css/Login.css';
import RegisterForm from "../components/register/RegisterForm";
import LogoText from "../components/LogoText";
import MainLogo from "../components/common/MainLogo";

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
                        <MainLogo/>
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
