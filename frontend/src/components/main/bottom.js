import React, {Component} from 'react';
import '../../css/main.css';
import LittleLogo from "../little_logo";
import Picture from "../picture";
import plus from "../../add.png"
import minus from "../../minus.png"
import bone from "../../bone.png"


class Bottom extends Component {


    render() {
        return (
            <div className="bottom">
                <div className="swipe_block">
                    <div className="swipe_click"><img className="icon" src={plus}/></div>
                    <div className="swipe_click"><img className="icon" src={bone}/></div>
                    <div className="swipe_click"><img className="icon" src={minus}/></div>

                </div>
            </div>
        );
    }
}

export default Bottom;