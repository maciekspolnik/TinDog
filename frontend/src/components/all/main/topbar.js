import React, {Component} from 'react';
import '../../css/main.css';
import LittleLogo from "../common/LittleLogo";
import {Link} from "react-router-dom";


class TopBar extends Component {

    style={
        textDecoration: "none",
        color: "white",
        fontSize: "26px",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "1em"
    }

    render() {
        return (
            <header className="topbar">
                <div className='menu-bar'>
                    <LittleLogo />
                    <Link style={this.style} to="/">
                        Strona Główna
                    </Link>
                    <Link style={this.style} to="/matched_list">
                        Twoje kontakty
                    </Link>
                    <Link style={this.style} to="/settings">
                        Ustawienia
                    </Link>
                    <Link style={this.style} to="/err">
                        Profil
                    </Link>
                    </div>
                <div className='menu-bar'>
                    <Link style={this.style} to="/login">
                        Zaloguj się
                    </Link>
                </div>
            </header>
        );
    }
}

export default TopBar;