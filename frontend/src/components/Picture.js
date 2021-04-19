import React, {Component} from 'react';
import face from '../multimedia/face.png';


class Picture extends Component {
    little_logo = {
        height: "80px",
        width: "80px",
        marginLeft: "0.5em"
    };


    render() {
        return (
            <div className="logo">
                <img src={face} alt="" style={this.little_logo}/>
            </div>);
    }
}

export default Picture;