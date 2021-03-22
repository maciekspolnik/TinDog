import React, {Component} from 'react';
import Input from "./input";
import Button from "./button";


class LoginForm extends Component{
    render(){
        return (<div className="login-container">
            <form className="login">
                <div className="login-banner">Zaloguj się</div>
                <Input name="email" type="text" placeholder=" email"/>
                <Input name="password" type="password" placeholder=" password"/>
                <Button type="submit" texts="Login"/>
                <a className="upload-file" href="https://pk.edu.pl">Rejestracja</a>
            </form>
        </div>);

    }
}

export default LoginForm;