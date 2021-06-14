import React, {Component} from 'react';
import {Link} from 'react-router-dom'



class Logo extends Component {


    render() {
        return (
            <div className="logo">
                <Link to="/">
                    <img src={'./logo.png'} alt="" style={{
                        height: "80px",
                        width: "80px",
                        marginRight: "1em"
                    }}/></Link>
            </div>
        );
    }
}

export default Logo;