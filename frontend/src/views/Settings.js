import React, {Component} from 'react';
import '../css/Login.css';
import '../css/main.css'
import '../css/settings.css'
import TopBar from "../components/main/topbar";
import SettingsToggles from "../components/common/SettingsToggles";

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
                    <SettingsToggles/>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default Settings;
