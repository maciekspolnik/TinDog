import React, {Component} from "react";
import banner from "../../img.jpg"

class Middle extends Component {


    render() {
        return (
            <div className="middle">
                <div className="name_block">Felo</div>
                <img className="banner" src={banner} alt=""/>
            </div>
        );
    }
}

export default Middle;