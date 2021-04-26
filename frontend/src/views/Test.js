import React, {Component} from 'react'
import '../css/Login.css'
import '../css/error.css'
import '../css/main.css'
import Logo from "../components/common/Logo";
import LittleLogo from "../components/common/LittleLogo";
import ToggleSwitch from "../components/common/toggle/ToggleSwitch";

class Test extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                <ToggleSwitch Name='newsletter' />
                <ToggleSwitch Name='daily' />
                <ToggleSwitch Name='weekly' />
                <ToggleSwitch Name='monthly' />
                </div>
            </React.Fragment>
        );
    }
}

export default Test;
