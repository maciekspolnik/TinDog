import React, {Component} from 'react';
import '../../css/main.css';
import plus from "../../multimedia/add.png"
import minus from "../../multimedia/minus.png"
import bone from "../../multimedia/bone.png"


class Bottom extends Component {


    render() {
        return (
            <div className="bottom">
                <div className="swipe_block">
                    <div className="swipe_click"><img className="icon" alt="" src={plus}/></div>
                    <div className="swipe_click"><img className="icon" alt="" src={bone}/></div>
                    <div className="swipe_click"><img className="icon" alt="" src={minus}/></div>

                </div>
            </div>
        );
    }
}

export default Bottom;