import React, {Component} from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom'



class LittleLogo extends Component {


    render() {
        return (
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" style={{
                        height: "100px",
                        width: "100px"
                }}/></Link>

            </div>);
    }
}

export default LittleLogo;