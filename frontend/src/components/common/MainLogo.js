import React, {Component} from 'react';
import {Link} from "react-router-dom";


class MainLogo extends Component {

    render() {
        return (
            <Link to="/" className="logo">
                <img src={'./logo_text.png'} alt=""/>
            </Link>);
    }
}

export default MainLogo;