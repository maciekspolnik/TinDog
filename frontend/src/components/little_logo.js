import React, {Component} from 'react';
import logo from '../logo.png';
import Register from "../views/Register";


class LittleLogo extends Component {


    render() {
        return (
            <div className="logo">
                <img src={logo} alt="" style={{
                    height: "100px",
                    width: "100px"
                }}/>
            </div>);
    }
}

export default LittleLogo;