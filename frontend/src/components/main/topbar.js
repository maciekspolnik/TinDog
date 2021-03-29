import React, {Component} from 'react';
import '../../css/main.css';
import LittleLogo from "../little_logo";
import Picture from "../picture";
import UserService from "../../services/UserService";


class TopBar extends Component {



    render() {
        return (
            <header className="topbar">
                <LittleLogo/>
                <div className="profile">
                    <div>Imie Nazwisko</div>
                    <Picture/>
                </div>
            </header>
        );
    }
}

export default TopBar;