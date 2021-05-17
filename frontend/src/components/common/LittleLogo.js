import React, {Component} from 'react';
import {Link} from 'react-router-dom'



class LittleLogo extends Component {


    render() {
        return (
            <div className="logo">
                <Link to="/">
                    <img src={'./logo.png'} alt="" style={{
                        height: "100px",
                        width: "100px",
                        marginRight: "1em"

                    }}/></Link>

            </div>
        );
    }
}

export default LittleLogo;