import React, {Component} from 'react';
import Logo from "../logo";
import '../../css/main.css';
import LittleLogo from "../little_logo";
import Picture from "../picture";



class TopBar extends Component{

    style

    render(){
        return(
        <header className="topbar">
            <LittleLogo/>
            <div className="profile">
                <div >Imie Nazwisko</div>
                <Picture  />
            </div>
        </header>
        );
    }
}

export default TopBar;