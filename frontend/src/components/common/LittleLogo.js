import React, {Component} from 'react';
import {Link} from 'react-router-dom'



class LittleLogo extends Component {


    render() {
        return (
            <React.Fragment className="logo">
                <Link to="/">
                    <img src={'./logo.png'} alt="" style={{
                        height: "100px",
                        width: "100px",
                        marginRight: "1em"

                    }}/></Link>

            </React.Fragment>
        );
    }
}

export default LittleLogo;