import React, {Component} from 'react';
import '../../css/main.css';
import LittleLogo from "../LittleLogo";
import Picture from "../Picture";
import {Link} from "react-router-dom";


class TopBar extends Component {

    style={
        textDecoration: "none",
        color: "black",
        fontSize: "26px",
        marginTop: "auto",
        marginBottom: "auto"
    }

    render() {
        return (
            <header className="topbar">
                <LittleLogo/>
                <div className="profile">
                    <Link style={this.style} to="/login">
                        Imie Nazwisko
                    </Link>

                    <Picture/>
                </div>
            </header>
        );
    }
}

export default TopBar;