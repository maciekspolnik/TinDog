import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Logo extends Component {

    render() {
        return (
            <Link to="/" className="logo">
                <img src={'./logo.png'} alt=""/>
            </Link>);
    }
}

export default Logo;