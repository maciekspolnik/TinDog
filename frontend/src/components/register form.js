import React, {Component} from 'react';
import Input from "./input";
import Button from "./button";


class RegisterForm extends Component{
    render(){
        return (<div className="login-container" >
            <form className="register">
                <div className="login-banner upload-file">Rejestracja</div>
                <Input name="email" type="text" placeholder = "email@email.com"/>
                <Input name="password" type="password" placeholder = "password"/>
                <Input name="confirmedPassword" type="password" placeholder="confirm password"/>
                <Input  name="name" type="text" placeholder="name"/>
                <Input name="surname" type="text" placeholder="surname"/>
                <Input name="phone" type="text" placeholder="phone number"/>
                <Button type="submit" texts="Zarejestruj się" />
            </form>
        </div>);

    }
}

export default RegisterForm;