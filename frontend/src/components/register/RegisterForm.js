import React, {Component} from 'react';
import Input from "../Input";
import Button from "../Button";


class RegisterForm extends Component {
    render() {
        return (<div className="login-container">
            <form className="register">
                <div className="login-banner upload-file">Rejestracja</div>
                <Input name="email" type="text" placeholder="adres email"/>
                <Input name="password" type="password" placeholder="hasło"/>
                <Input name="confirmedPassword" type="password" placeholder="potwierdź hasło"/>
                <Input name="name" type="text" placeholder="imię"/>
                <Input name="surname" type="text" placeholder="nazwisko"/>
                <Button type="submit" texts="Zarejestruj się"/>
            </form>
        </div>);

    }
}

export default RegisterForm;