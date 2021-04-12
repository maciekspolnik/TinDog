import React, {Component} from 'react';
import logo from '../logo.png';
import {Link} from "react-router-dom";


class Logo extends Component {

    render() {
        return (
            <Link to="/" className="logo">
                <img src={logo} alt=""/>
            </Link>);
    }
}

export default Logo;