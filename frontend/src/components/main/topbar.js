import React, {Component} from 'react';
import '../../css/main.css';
import LittleLogo from "../little_logo";
import Picture from "../picture";
import {Link} from "react-router-dom";


class TopBar extends Component {

    style={
        textDecoration: "none",
        color: "black"
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