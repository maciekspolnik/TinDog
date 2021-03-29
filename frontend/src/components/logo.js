import React, {Component} from 'react';
import logo from '../logo.png';
import Register from "../views/Register";


class Logo extends Component {
    little_logo = {
        height: "100px",
        width: "100px"
    };


    render() {
        return (
            <div className="logo">
                <img src={logo} alt=""/>
            </div>);
    }
}

export default Logo;