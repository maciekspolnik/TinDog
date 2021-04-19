import React, {Component} from 'react';
import Input from "../Input";
import Button from "../Button";
import {Link} from "react-router-dom";


class LoginForm extends Component {
    render() {
        return (
            <div className="login-container">
                <form className="login">
                    <div className="login-banner">Zaloguj się</div>
                        <Input name="email" type="text" placeholder=" email"/>
                        <Input name="password" type="password" placeholder=" password"/>
                        <Button type="submit" texts="Login"/>
                <Link to="/register">
                    <div className="upload-file" style={{textDecoration: "none"}}>Rejestracja</div>
                </Link>
            </form>
        </div>);

    }
}

export default LoginForm;