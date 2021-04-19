import React, {Component} from 'react';
import logo from '../multimedia/logo.png';
import {Link} from 'react-router-dom'



class LittleLogo extends Component {


    render() {
        return (
            <React.Fragment className="logo">
                <Link to="/">
                    <img src={logo} alt="" style={{
                        height: "100px",
                        width: "100px"
                }}/></Link>

            </React.Fragment>
        );
    }
}

export default LittleLogo;