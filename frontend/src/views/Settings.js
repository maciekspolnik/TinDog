import React, {Component} from 'react';
import '../css/Login.css';
import '../css/main.css'
import '../css/settings.css'
import TopBar from "../components/main/topbar";
import ToggleSwitch from "../components/common/toggle/ToggleSwitch";
import Button from "../components/Button";

class Settings extends Component {

    render() {
        return (
            <React.Fragment>
                <head>
                    <title>SETTINGS</title>
                </head>
                <body>
                <div className="main-container">
                    <TopBar/>
                    <div className='settings'>
                        <div>
                            <p>Ustawienie 1</p>
                            <ToggleSwitch Name='a' />
                        </div>
                        <div>
                            <p>Ustawienie 2</p>
                            <ToggleSwitch Name='b' />
                        </div>
                        <div>
                            <p>Ustawienie 3</p>
                            <ToggleSwitch Name='c' />
                        </div>
                        <div>
                            <p>Ustawienie 4</p>
                            <ToggleSwitch Name='d' />
                        </div>
                        <Button style={{
                            width:'18%',
                            marginLeft:'1em'
                        }} type="submit" texts="Zapisz zmiany" />
                    </div>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default Settings;
